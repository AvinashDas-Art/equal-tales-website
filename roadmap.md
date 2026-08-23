# Equal Tales Storyline — Website Roadmap

Running list of ideas, decisions, and things to come back to. Updated as we talk.

## Done

- Content draft reviewed and approved (`Equal_Tales_Storyline_Website_Draft.docx`)
- Single-file website built (`index.html`) — bilingual with an EN | हिं language switcher (defaults to Hindi), palette and typography drawn from the channel logo
- Featured episode: Ep 19, "Show Your Papers, Tell Your Caste" (`https://youtu.be/z8g29csr3LQ`) — updated 2026-07-08
- "Bharat Ki Kahani" series grid: episodes 11-19, Indus Valley Civilization → Modern India
- Real logo, favicon, and apple-touch-icon added to the site (via Claude Code session)
- Responsive layout reviewed at mobile / tablet / desktop widths
- Codebase refactor (2026-08-23): the Creator page (`creator.html`) is now served as the homepage at `index.html` — the old `index.html` content is preserved as a backup, not published. `creator.html` itself is now a redirect stub (meta refresh + JS) pointing to `index.html`, with `rel=canonical` and `noindex` so old bookmarks/links land on the new home without creating duplicate-content issues. Added a new `youtube.html` video gallery page (responsive 2-3 column grid, 16:9 embeds, template comment for adding future videos) populated with the 13 published Bharat Ki Kahani episodes (chapters 11-23). Site nav and footer updated everywhere: the standalone "Creator" link is gone, replaced by a "YouTube" link across all pages.
- **Cinematic filmography homepage redesign (2026-08-23):** `index.html` was rebuilt as a Universal Pictures-style cinematic showcase of Avinash Das's professional filmography — full-bleed hero (flagship: *Anaarkali of Aarah*), category-tabbed carousels ("All Works", "Feature Films", "Web Series", "Documentaries", "Music & Shorts", "Special Showcase"), poster cards with hover glow, and an in-page YouTube lightbox player. Catalog data lives in `assets/js/films-data.js` (19 entries: 18 public YouTube projects + 1 private/festival feature film placeholder). The former Creator/studio homepage content (vision, director bio, team, press, contact) was preserved and redesigned into a new dark-cinematic `about.html`. A new minimal `contact.html` was added. Nav/footer updated site-wide (all 23 episode pages, `scripts.html`, `youtube.html`) to add "About" and "Contact" links. Bharat Ki Kahani (`scripts.html` + episodes) and the `youtube.html` gallery remain a separate, linked creative property — unaffected in content, only their nav changed.
- **Known follow-up:** the "Special Showcase" private feature film entry in `films-data.js` (`id: "private-feature-01"`) is placeholder content — title, year, genre, logline, synopsis, credits and poster still need to be supplied by Avinash and swapped in.
- **Git note:** this repo's `.git` directory occasionally leaves stale `index.lock` / `HEAD.lock` / `objects/maintenance.lock` files behind (harmless, zero-byte) because the automated tooling used to commit can't delete files directly — it moves them into a git-ignored `_to_delete/` folder instead. That folder is safe to empty manually at any time.

## In progress

- Domain setup: `equaltales.com` (GoDaddy) → Cloudflare DNS (nameservers, DNS-only/grey-cloud CNAME) → Firebase Hosting, with Firebase issuing the free SSL certificate
- Being executed in a separate Claude Code terminal session
- Private feature film details (see "Known follow-up" above) needed to complete the Special Showcase card

## Backlog / ideas for later

- Revisit hero artwork — currently custom vector art inspired by the logo; could be swapped for AI-generated or photographic imagery later
- Confirm whether the language switcher should remember a visitor's choice across sessions (currently does, via localStorage) or always default to Hindi
- Consider adding more featured episodes beyond Ep 18 as the channel grows
- `youtube.html`'s gallery is populated manually (13 embeds, chapters 11-23). Consider a "recent uploads" section that pulls automatically from the YouTube channel via API instead, so new uploads appear without an edit
- Custom domain redirect rules (e.g. www.equaltales.com → equaltales.com) once the root domain is live
- Once the private feature film's real details arrive, also add a real poster image (`posterUrl` field in `films-data.js`) instead of the styled text placeholder card

## Notes

- This file is maintained in English regardless of the site's bilingual content.
- Site content language decisions (Hindi/English mixing, translations) are documented separately in `Equal_Tales_Storyline_Website_Draft.docx`.
