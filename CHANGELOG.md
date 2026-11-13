## Services — Card text contrast correction (2026-11-13)

### Website Development and Digital Advertising cards
- Corrected unreadable headings and descriptions on both blue service cards by explicitly setting headings and list items to white and descriptions to near-white.
- Kept existing card colors, illustration, copy, and interaction styles unchanged.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [contrast fix](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/84395681b449c07c69b8b88d18bacb0e477ebb7d), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/cac5c7b89c50bfe4d00a37f84ad5329053e19b32).
- **QA:** Committed to `main`; visual browser check pending.

## Theme v2.1 — White and saffron hero heading emphasis (2026-11-13)

### Services and homepage heroes
- Kept primary hero heading text white on Deep Atlantic Blue and styled existing emphasized phrases in Saffron: **“built around you.”** on Services and **“better connected.”** on the homepage.
- Preserved the original wording, heading hierarchy and layout; no saffron accents were introduced on white panels.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `index.html`, `CHANGELOG.md`.
- **Commits:** [theme CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/24423a2613e340db3f33f04de86019c413e69bcd), [Services cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a6cd584dd98681477d23ad8e61dc9de1a8178713), [homepage cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/aed81577a173078a7142f2c1db46be18a3fb534d).
- **QA:** Committed to `main`; live browser verification pending.

## Homepage Services — Resting panel emphasis and saffron CTA (2026-11-13)

### Services illustration
- Added a pale blue-tinted illustration backdrop, Deep Atlantic border, rounded panel edge and soft persistent shadow so the panel reads clearly against the white section before hover.
- Preserved subtle hover elevation and existing service illustration animations.

### Explore Our Services CTA
- Changed the button on the Deep Atlantic information strip to Saffron with dark blue text; added lighter saffron hover/focus feedback.
- Kept the button inside the white browser illustration Deep Atlantic Blue, consistent with the rule that saffron accents appear only on blue surfaces.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [CSS styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/06b34a2f0f1bc5e9b656d23383dc42a50593e13f), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/3f48db6d1eeb1dd39aab0c3ebbe3ec513d384d1f).
- **QA:** Committed to `main`; live browser visual verification pending.

## Theme v2.1 — Digital Journey character and layout correction (2026-11-12)

### Homepage — illustrated character
- Refined the SVG character's bushy hair silhouette, face framing, hands, and phone interaction details; tightened its SVG viewBox to improve the proportions shown on screen.
- Changed the social-ad scene to a two-column layout so the phone and character each have dedicated space on desktop and mobile.
- Reduced and repositioned the website-click confirmation so it no longer dominates the phone screen; applied Deep Atlantic and Saffron styling.
- Preserved the 15-second browsing, ad discovery, curiosity lines, tap, and website redirect animations, along with reduced-motion handling.
- **Files:** `index.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [SVG refinement](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/12d0c6b671e01f7d634493f74f0f9da84ad6184e), [layout correction](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/b1811f886ef2a2e86b0390f32a80ff113b2ecc45).
- **QA:** Committed to `main`, but the revised browser rendering has not yet been visually verified. This is an incremental SVG refinement, not a full illustration-quality replacement of the approved character sheet.

## Theme v2.1 — Approved SVG character implementation (2026-11-12)

### Homepage Digital Journey — character replacement
- Replaced the previous box-based CSS character with an original, full-body inline SVG inspired by the approved character sheet: bushy hair, expressive eyes, saffron overshirt, white tee, dark jeans, white sneakers, and natural proportions.
- Added independent SVG animation for head tilt, eyes, arms, handset, and three saffron curiosity lines at the sponsored-ad discovery moment.
- Preserved the 15-second phone-feed, sponsored advertisement, tap, and client website redirect sequence; adjusted character scale for mobile and added reduced-motion styling.
- **Files:** `index.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [SVG markup](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/bb47ad462086c93509e7ccd75aed4d8391569bf5), [character animation](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/44ea04998c03c5f096e896b0daecc77af64b646f).
- **Verification:** Committed to `main`; browser playback and responsive composition require visual QA. The illustration is an SVG recreation of the approved concept, not a pixel-identical conversion of the generated design sheet.

## Theme v2.1 — Cartoon viewer redesign (2026-11-12)

### Homepage Digital Journey character
- Redesigned the animated viewer as an original flat 2-D cartoon character, with an oversized rounded head, expressive eyes and smile, playful hair silhouette, simplified arms, and a saffron top with deep-blue outlines.
- Preserved the existing handset, scrolling, sponsored-ad discovery, tap, and website-redirect animation choreography.
- Retained mobile sizing and reduced-motion behavior; visual playback still requires browser review.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [cartoon styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/33369bddf7dcb3fce8570c8550e342ab2691c3fc), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/01d618236d48fbaadf4934eab31d3ae8998b8ab2).

## Theme v2.1 — Viewer scrolls to sponsored advertisement (2026-11-12)

### Homepage Digital Journey — advertising interaction
- Updated the animated character to hold a phone while browsing and scrolling through ordinary social posts.
- The client's sponsored post slides into view after the scrolling sequence; the viewer taps it and the phone transitions to the client website.
- Synchronized the figure's scrolling/tapping arm, miniature handset, enlarged phone display, sponsored-post reveal and existing website redirect within the 15-second loop.
- Kept Deep Atlantic, White and Saffron, and included reduced-motion fallbacks.
- **Files:** `index.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [markup and cache update](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/d62a5b56fc9c0a1ff0aa345cd6f1ea7396487472), [animation styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/2e0d3a0a05d603ac35b0f6669737f6a633635a53).
- **Verification:** Changes committed to `main`; browser playback and mobile overlap still require live visual review.

## Theme v2.1 — Animated viewer for Digital Journey (2026-11-12)

### Homepage advertising story
- Added a CSS-drawn human viewer beside the social-ad phone scene, with head movement, an animated reaching/tapping arm, and a tap pulse.
- Synchronized the viewer with the existing 15-second sponsored-ad click and website redirect stages.
- Used Deep Atlantic, White and Saffron; retained the saffron outer frame and existing scene copy.
- Added small-screen positioning and hides the figure when reduced motion is preferred.
- **Files:** `index.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [figure markup and cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/60ec93f650fc6efabc3ecb175bb4d79ab16883f3), [figure animation](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a185e2e2ad51ad5e46de118f915b6ffe7bc12daf).
- **Verification:** Committed to `main`; live browser playback and responsive layout not yet independently verified.

## Theme v2.1 — Faster, more elaborate Digital Journey (2026-11-12)

### Homepage animated snippet
- Shortened the six-stage Digital Journey loop from 21 seconds to **15 seconds**, with more tightly coordinated stage and caption transitions.
- Added staged website assembly, browser reveal, phone/feed arrival, animated ad CTA emphasis, click confirmation, redirect, and final visibility message.
- Retained the existing business journey, wording, saffron outer panel, blue inner stage, and white/saffron point tabs.
- Added explicit reduced-motion presentation with a static website scene.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [animation refinement](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/9aab04c99894b76922f7ef669174b2d1445ac0a7), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/9f3b8efc88726fabf89a457cf6f5b02a34a52a53).
- **Verification:** Committed to `main`; live animation playback and responsive layout not yet independently verified.

## Theme v2.1 — Saffron Digital Journey panel (2026-11-12)

### Homepage animation frame
- Changed the outer Digital Journey panel fill from White to Saffron `#F4B544` and retained Deep Atlantic text for legibility.
- Kept the inner animation stage blue and its browser mockups white; animation timing and behavior unchanged.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [panel fill](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/720bc4ebdbc904c5b830948468287a5f0b5d8f5d), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a8a59c3e31280bca4c75933244bf69836d71d806).
- **Verification:** Committed to `main`; live visual verification pending.

## Theme v2.1 — Saffron Digital Journey frame (2026-11-12)

### Homepage animation border
- Changed the outer border around the white Digital Journey animation panel to Saffron `#F4B544`, against the Deep Atlantic hero background.
- Preserved the white panel, inner artwork, animation sequence, and behavior.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [border](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/e38db36a4406a40efebb023e8867b75174142dad), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/4fbfe7d21efd719551b411612c4c30b5112664cd).
- **Verification:** Committed to `main`; live visual verification pending.

## Theme v2.1 — Homepage Digital Journey refinement (2026-11-12)

### Animated snippet and point tabs
- Recolored the Digital Journey's outer frame, inner blue stage, white browser/phone mockups, and blue UI controls using the three-color palette.
- Changed animated point/caption tabs to **white body text and saffron labels on blue**, improving contrast in the screenshot's campaign step.
- Limited saffron to blue surfaces (including animated click and completion indicators); white mockup surfaces use blue controls instead.
- Preserved all existing animation timings, scenes, transitions, and content.
- **Files:** `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [journey styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a33e58de387a32b82a4566524faf93f3499b6db9), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/8ac9eba4bc13182236749d76f8a9022ba5c748cc).
- **Verification:** Committed to `main`; live browser rendering not yet verified.

# Akarshify Website — Changelog

All notable website changes will be documented here, newest first.

This file tracks changes merged into the website repository. A GitHub commit does not by itself confirm a successful Cloudflare deployment or live visual verification.

## Akarshify Theme Update v2.1 — Deep Atlantic, White & Saffron (2026-11-12)

### 01 — Global color and surface hierarchy
- Changed primary background to Deep Atlantic `#102A43`, foreground panels to White `#FFFFFF`, and accent to Saffron `#F4B544`.
- Defined the rule **Saffron only on blue surfaces**. On white surfaces, use blue for headings, icons, and buttons.
- Added `css/theme-v2-1.css` and switched Homepage, About Us, and Services to it in place of the v2.0 stylesheet.

### 02 — Homepage and animated UI
- Recolored hero artwork, digital-journey UI, services illustration, portfolio text panel, process promise, and contact panel using the new surface hierarchy.
- Kept existing scene transitions, animations, carousel behavior, and enquiry code.

### 03 — Services and About Us
- Recolored advertising pipeline cards, toolkit items, About Us values cards, and light editorial sections.
- Preserved page structure and copy.

### 04 — Shared navigation and footer
- Recolored shared navigation and footer using Blue and White, with Saffron reserved for blue-surface accents.

### 05 — Files, commits, and verification
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/about.html`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [theme stylesheet](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/bb3be598f965907bd84c54a4060c6b8e157a04a1), [homepage](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/cdaa8bab35e6b98f6701c4a0af43dcec1d8cff6f), [About Us](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a924fe7a40d4faf19d98863a0c4e1a72a74d3b72), [Services](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/bb55dfbf9347366cef633ea0c159fedaaedcfdd3).
- **Verification:** Committed to `main`; live Cloudflare rendering and mobile responsiveness not independently verified. Earlier hardcoded illustration colors may need further audit and refinement.

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
