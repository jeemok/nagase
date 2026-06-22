# CLAUDE.md

## Project: Nagase KL Global Passport

A static single-page web app (vanilla JS, no build step) tracking a year-long
"global passport" campaign for Nagase KL Sports Club. Members collect stamps as
countries are released month by month. Deployed on Vercel (auto-deploys on push).

Files:
- `index.html` — entry point, loads `data.js` then `app.js`
- `data.js` — all content: `COUNTRIES`, `MEMBERS`, `PHOTOS` (edit this to update)
- `app.js` — router + rendering logic (home search, passport page, photo gallery)
- `style.css` — styling
- `stamps/` — stamp SVGs (one per released country)
- `photos/` — event photo galleries; `music/` — gallery background music
- `stamps-table.md` — human-readable mirror of who has which stamp

## CRITICAL: Total is always 18 countries

The campaign is branded **"18 Countries. 18 Adventures."** — this number is
hard-coded in `app.js` (home subtitle) and `index.html` (meta description), and
the passport progress counter shows `of ${COUNTRIES.length}`.

**`COUNTRIES` must always have exactly 18 entries.** When adding/releasing a new
country, do NOT just append — that breaks the count (this happened when Brazil
was added, pushing it to 19). Instead **insert the new country and remove one
unreleased placeholder** so the total stays 18.

When changing the country list, verify:
- `COUNTRIES.length === 18`
- IDs are contiguous `1..18`
- No member's `stamps` array references a removed/invalid id
- A stamp SVG exists in `stamps/` for every `released: true` country

## Releasing a country (in `data.js`)

1. Set the country's `released: true` and fill in `month` (e.g. `"JUN 2026"`).
2. Add its stamp image to `stamps/` and set the `stamp:` filename.
3. Award the stamp by adding the country's numeric id to attendees' `stamps` arrays.
4. (Optional) add a `music:` path and `PHOTOS[id]` gallery for the event.
5. Keep the country-numbers comment block at the top of `data.js` in sync.
6. Regenerate `stamps-table.md` to match.
