# Akarshify Website — Changelog

All notable website changes will be documented here, newest first.

This file tracks changes merged into the website repository. A GitHub commit does not by itself confirm a successful Cloudflare deployment or live visual verification.

## Akarshify Theme Update v2.0 — Ink & Vermilion (2026-11-12)

### Major change: Website-wide visual theme
- Introduced the shared editorial-minimalist palette: Ink `#20252B`, Vermilion `#D85B42`, and Warm Ivory `#F6F3EF`.
- Added `css/theme-v2.css` as a versioned override layer after the previous theme CSS.
- Applied the theme across **Homepage**, **Services**, and **About Us** simultaneously.
- Updated shared header navigation CTA, hero treatments, dark/light section colors, portfolio and promise panels, service pipeline, and footer palette.
- Preserved existing wording, page structure, carousel interactions, animated journey, and enquiry functionality; no scripts were removed.
- **Files:** `css/theme-v2.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Implementation commits:** [shared theme](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/96c16e6de9ab69b1b75daf6ddaaf03b9af90a13d), [homepage](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/ff8fb3d18069824704cacd2cb67cd3634f862c49), [About](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/9afc265464fa120a2e8f165c1301acff4e4a9159), [Services](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/d7ad1ac3be5ffc6616256b8f606420d62f7ad679).
- **Verification:** Changes committed to `main`. Live Cloudflare rendering and mobile responsiveness not yet verified.

### Change tracking convention
- Group major releases under named headings (e.g. `Akarshify Theme Update v2.0`).
- Use subheadings to identify affected features and pages.
- Record purpose, files, preservation constraints, commit links, and actual verification status.

## Unreleased — Further refinements
- Review the v2.0 palette and typography across all pages after deployment; refine section-specific contrast and styling as needed.

## 2026-11-12 — Change tracking introduced
- Added `CHANGELOG.md` to maintain a shared record of website updates.
- Established a convention to summarize changes, affected files, commit references, and deployment verification after future updates.

## Previous website updates (historical recap; dates not independently verified)

### Homepage navigation
- Changed the homepage **LET'S TALK** navigation button from Cornflower Blue to Copper (`#C17A50`), with Oxford Blue text and a lighter Copper hover state.
- Commit: [6bf496d](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/6bf496dd0129f55ccd6ce85c3323fd65fcbac599).

### Homepage portfolio showcase
- Updated project titles to use Google Sans, uppercase styling, and White/Copper emphasis across all three projects.
- Updated the portfolio copy panel to Oxford Blue and improved contrast of descriptions and notes.
- Refreshed the homepage CSS URL to help bypass stale cached styles.
- Commits: [9d35473](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/9d35473d64fc2f17162d401b0ca6f8c69efbc24c), [8c7f7fb](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/8c7f7fb220b3b420d1d66281e1aa2efb6d4c6d5b).

### Homepage process and service sections
- Applied Google Sans and White/Copper heading emphasis to the **Our Promise** card; improved text contrast.
- Changed its background to Oxford Blue (`#16283F`).
- Fixed the homepage services illustration description to white on its dark background.
- Commits: [a7eccf8](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a7eccf8053700d1a0946f29c46e9fae5c8487ed4), [030f809](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/030f809a07d22fb149b6738f050d19bfffc2a33b), [1317fe0](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/1317fe09fe09ba50d3289654191811221a76bfb8).

### Homepage theme prototype
- Introduced a homepage-only Oxford Blue, Copper, and Warm Ivory experiment.
- Added selectable abstract hero backgrounds: contours, diagonals, and ambient glow.
- Preserved the homepage's services, animated journey, and enquiry flow.
- Commits: [0c4e4b4](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/0c4e4b4a6d003d0d2e5e4e83569428579b290322), [fb09a18](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/fb09a185fd524d8f8978594e088f87357b8d4b08).

## Update format going forward

For each website change, record:
- **Summary:** what changed and why
- **Scope:** affected pages and files
- **Preserved:** important content, functionality, and animations left intact
- **Commit:** link to the GitHub change
- **Verification:** committed, deployed, and/or visually verified (only when confirmed)
