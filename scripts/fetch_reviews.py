#!/usr/bin/env python3
"""
Equal Tales Entertainment — Reviews / Dispatches aggregator.

Pulls recent film-review entries from a curated list of RSS feeds, cleans
them up, tags each with a display category, and writes a single JSON file
that reviews.html fetches client-side.

Usage:
    python3 scripts/fetch_reviews.py

Output:
    data/reviews.json   (relative to the repo root — this is Firebase's
                          hosting "public" dir for this project, see
                          firebase.json's "public": ".")

FEEDS below is a curated, individually-verified starting set (11 feeds).
It is deliberately NOT a giant scraped list of 50+ guessed URLs — every
entry here was checked (see repo notes) to actually return a valid RSS/XML
feed at the time of writing. Feed URLs do drift over time; if a feed starts
failing, this script logs it and continues rather than breaking the whole
run. Add more feeds by appending to FEEDS — one dict per feed, no other
code changes needed.
"""
import hashlib
import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import feedparser
import requests
from bs4 import BeautifulSoup

REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_PATH = REPO_ROOT / "data" / "reviews.json"

REQUEST_TIMEOUT = 15
USER_AGENT = "Mozilla/5.0 (compatible; EqualTalesReviewsBot/1.0; +https://equaltales.com)"

MAX_ITEMS_PER_FEED = 8
MAX_TOTAL_ITEMS = 120
QUOTE_MAX_CHARS = 220

CATEGORIES = ["Indian Cinema", "World Cinema", "Festival Winners", "Indie Gems"]

# category is the DEFAULT for a feed; individual entries can still be
# promoted to "Festival Winners" by FESTIVAL_KEYWORDS below.
FEEDS = [
    {"url": "https://www.thehindu.com/entertainment/movies/feeder/default.rss",
     "publisher": "The Hindu", "category": "Indian Cinema"},
    {"url": "https://indianexpress.com/section/entertainment/movie-review/feed/",
     "publisher": "The Indian Express", "category": "Indian Cinema"},
    {"url": "https://www.theguardian.com/uk/film/rss",
     "publisher": "The Guardian", "category": "World Cinema"},
    {"url": "https://variety.com/v/film/reviews/feed/",
     "publisher": "Variety", "category": "World Cinema"},
    {"url": "https://www.hollywoodreporter.com/c/movies/movie-reviews/feed/",
     "publisher": "The Hollywood Reporter", "category": "World Cinema"},
    {"url": "https://www.bbc.com/culture/feed.rss",
     "publisher": "BBC Culture", "category": "World Cinema"},
    {"url": "https://www.rogerebert.com/reviews/feed",
     "publisher": "RogerEbert.com", "category": "World Cinema"},
    {"url": "https://deadline.com/feed/",
     "publisher": "Deadline", "category": "World Cinema"},
    {"url": "https://www.slashfilm.com/feed/",
     "publisher": "/Film", "category": "Indie Gems"},
    {"url": "https://www.avclub.com/rss",
     "publisher": "The A.V. Club", "category": "Indie Gems"},
    {"url": "https://ropeofsilicon.com/feed/",
     "publisher": "RopeOfSilicon", "category": "Indie Gems"},
]

FESTIVAL_KEYWORDS = [
    "cannes", "sundance", "venice film festival", "berlinale", "berlin film festival",
    "tiff", "toronto international film festival", "oscar", "academy award",
    "golden globe", "national film award", "iffi", "busan international",
]


def clean_text(html_or_text):
    if not html_or_text:
        return ""
    soup = BeautifulSoup(html_or_text, "html.parser")
    text = soup.get_text(separator=" ", strip=True)
    return re.sub(r"\s+", " ", text).strip()


def truncate_quote(text, max_chars=QUOTE_MAX_CHARS):
    text = text.strip()
    if len(text) <= max_chars:
        return text
    cut = text[:max_chars].rsplit(" ", 1)[0]
    return cut.rstrip(",.;: ") + "…"


def extract_image(entry):
    for key in ("media_content", "media_thumbnail"):
        media = entry.get(key)
        if media:
            url = media[0].get("url")
            if url:
                return url
    for link in entry.get("links", []):
        if str(link.get("type", "")).startswith("image/") and link.get("href"):
            return link["href"]
    summary_html = entry.get("summary", "") or entry.get("description", "")
    if summary_html:
        soup = BeautifulSoup(summary_html, "html.parser")
        img = soup.find("img")
        if img and img.get("src"):
            return img["src"]
    return None


def extract_date_iso(entry):
    parsed = entry.get("published_parsed") or entry.get("updated_parsed")
    if parsed:
        try:
            return datetime.fromtimestamp(time.mktime(parsed), tz=timezone.utc).isoformat()
        except (OverflowError, ValueError):
            pass
    return datetime.now(timezone.utc).isoformat()


def resolve_category(default_category, title, summary_text):
    haystack = f"{title} {summary_text}".lower()
    if any(kw in haystack for kw in FESTIVAL_KEYWORDS):
        return "Festival Winners"
    return default_category


def make_id(link, title):
    return hashlib.sha1(f"{link}|{title}".encode("utf-8")).hexdigest()[:16]


def fetch_feed(feed_cfg):
    url = feed_cfg["url"]
    try:
        resp = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=REQUEST_TIMEOUT)
        resp.raise_for_status()
    except requests.RequestException as exc:
        print(f"  [skip] {feed_cfg['publisher']}: request failed ({exc})", file=sys.stderr)
        return []

    parsed = feedparser.parse(resp.content)
    if parsed.bozo and not parsed.entries:
        print(f"  [skip] {feed_cfg['publisher']}: unparseable feed", file=sys.stderr)
        return []

    items = []
    for entry in parsed.entries[:MAX_ITEMS_PER_FEED]:
        title = clean_text(entry.get("title", "")).strip()
        if not title:
            continue
        link = entry.get("link", "").strip()
        summary_text = clean_text(entry.get("summary", "") or entry.get("description", ""))
        quote = truncate_quote(summary_text) if summary_text else ""
        author = entry.get("author", "").strip() or None

        items.append({
            "id": make_id(link or title, title),
            "title": title,
            "quote": quote,
            "publisher": feed_cfg["publisher"],
            "author": author,
            "date": extract_date_iso(entry),
            "link": link,
            "image": extract_image(entry),
            "category": resolve_category(feed_cfg["category"], title, summary_text),
        })
    print(f"  [ok]   {feed_cfg['publisher']}: {len(items)} items")
    return items


def main():
    all_items = []
    seen_links = set()
    print(f"Fetching {len(FEEDS)} feeds...")
    for feed_cfg in FEEDS:
        for item in fetch_feed(feed_cfg):
            dedup_key = item["link"] or item["id"]
            if dedup_key in seen_links:
                continue
            seen_links.add(dedup_key)
            all_items.append(item)

    all_items.sort(key=lambda i: i["date"], reverse=True)
    all_items = all_items[:MAX_TOTAL_ITEMS]

    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source_feed_count": len(FEEDS),
        "categories": CATEGORIES,
        "reviews": all_items,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(all_items)} items to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
