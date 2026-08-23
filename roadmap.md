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

## In progress

- Domain setup: `equaltales.com` (GoDaddy) → Cloudflare DNS (nameservers, DNS-only/grey-cloud CNAME) → Firebase Hosting, with Firebase issuing the free SSL certificate
- Being executed in a separate Claude Code terminal session

## Backlog / ideas for later

- Revisit hero artwork — currently custom vector art inspired by the logo; could be swapped for AI-generated or photographic imagery later
- Confirm whether the language switcher should remember a visitor's choice across sessions (currently does, via localStorage) or always default to Hindi
- Consider adding more featured episodes beyond Ep 18 as the channel grows
- `youtube.html`'s gallery is populated manually (13 embeds, chapters 11-23). Consider a "recent uploads" section that pulls automatically from the YouTube channel via API instead, so new uploads appear without an edit
- Custom domain redirect rules (e.g. www.equaltales.com → equaltales.com) once the root domain is live

## Notes

- This file is maintained in English regardless of the site's bilingual content.
- Site content language decisions (Hindi/English mixing, translations) are documented separately in `Equal_Tales_Storyline_Website_Draft.docx`.
