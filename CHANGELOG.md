## Homepage Digital Services — Responsive Heading Overlap Fix (2026-11-17)

- Fixed the Digital Services heading overlapping its supporting description at narrower viewport widths after the earlier editorial alignment change.
- Grouped the eyebrow and headline into a dedicated heading wrapper and the supporting paragraph into its own grid column, instead of assigning all three elements independent grid rows.
- Applied a responsive two-column layout with narrower headline sizing and a single-column switch at 1050px, ensuring text does not collide and preserving desktop visual balance.
- Preserved original wording, two-weight heading styling, services illustration, CTA, and animations.
- Bumped Homepage stylesheet cache reference to `v2.1.36`.
- **Files:** `index.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [Homepage markup](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/3cdcca7359e93a309d17a0f81e75a133e99ae78a), [responsive CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/8593b8a21c204fa23e920b320741157e962fdd43).
- **QA:** Committed to `main`; live desktop/mobile visual verification pending.

## About Values — Force White Card Descriptions (2026-11-17)

- Follow-up to a user screenshot showing the three value-card descriptions still rendered dark blue despite existing shared CSS white-color overrides.
- Set `color:#FFFFFF!important` directly on the three description paragraphs in `pages/about.html`, matching the direct markup approach that successfully made the card titles saffron.
- Preserved the saffron numbers and titles, blue backgrounds, and all card copy and layout.
- Updated About stylesheet cache reference to `v2.1.35`.
- **Files:** `pages/about.html`, `CHANGELOG.md`.
- **Commit:** [white card description fix](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/5d4475f415f62734d14fdd981ac36c065e23623e).
- **QA:** Committed to `main`; deployed visual verification pending.

## About Values — Reinforce Saffron Title Rendering (2026-11-17)

- Investigated reports that the saffron value-card title change was not visible. The shared stylesheet already specified saffron, but the About page includes legacy inline styles for value cards and multiple competing theme rules.
- Added a direct `color:#F4B544!important` style to each of the three card titles (Clarity, Collaboration, Accountability) so the intended saffron is explicit in the page markup.
- Kept description text soft white and card numbers saffron, with no copy or layout changes.
- Refreshed the About stylesheet query from `v2.1.33` to `v2.1.34`.
- **Files:** `pages/about.html`, `CHANGELOG.md`.
- **Commit:** [About values title color reinforcement](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/19d04aaf546aa048bc8a02d1997de5f64c166ece).
- **QA:** Source-level verification only; deployed page rendering not independently verified.

## About Values — Saffron and White Card Typography (2026-11-17)

- Updated the About Us Values cards to use saffron `#F4B544` for the three card titles (Clarity, Collaboration, Accountability), matching the existing saffron card numbers.
- Retained soft-white descriptions (`rgba(255,255,255,.85)`) for contrast and readability against the Atlantic Blue card backgrounds.
- No changes to card layout, content, animations, or other pages.
- Bumped About stylesheet reference to `v2.1.33`.
- **Files:** `css/theme-v2-1.css`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [card typography](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/27caf71ecac20adddde3d7f1d098466e8aeb1169), [About cache update](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/ded2d2bea7df1dab14505759a4a868d9ddae044f).
- **QA:** Changes committed to `main`; deployed visual verification pending.

## About Values — Text Contrast and Heading Size (2026-11-17)

- Fixed low-contrast text on the three blue Values cards: headings now white, descriptions soft white at 85% opacity; saffron numbering remains unchanged.
- Reduced the oversized **THE VALUES BEHIND OUR WORK.** heading to `clamp(2.2rem, 3.65vw, 3.9rem)`, with a smaller mobile rule, while retaining its bold/regular typographic split.
- Added high-specificity About Values selectors to override inherited legacy colors without affecting other sections.
- Bumped About stylesheet cache to `v2.1.32`.
- **Files:** `css/theme-v2-1.css`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [contrast and heading CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/10417811d3107781adb555127b9232da84d5f131), [About cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/c99f53679e7a6e7631bf40235d1fd507faec652f).
- **QA:** Source changes committed to `main`; live visual verification pending.

## Align Editorial Headings and Descriptions (2026-11-16)

- Vertically centered headings and supporting descriptions in two-column editorial layouts, following the Businesses & Projects reference screenshot.
- **Home:** Updated Businesses & Projects and How We Work heading rows; aligned Digital Services eyebrow/heading against its description.
- **Services:** Grouped What We Do heading and paragraph into a responsive `editorial-intro-row` for the same centered arrangement. Existing services cards and copy unchanged.
- **About:** Centered Who We Are heading and description columns.
- Added a responsive single-column layout at 850px and below, retaining natural reading order and existing content.
- Bumped theme stylesheet references to `v2.1.31` on all three pages.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [Services markup](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/2fe84af406a7375cb8839c87a898c9f70ef30a14), [responsive alignment CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/d057e3db16ca9cd033645b6747bce8b2a0579b68), [Home cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/916c45debb017d2dd88135acc1125e5d703ee7ed), [About cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/b025e67321e884bdb3198e897c31bfaf91393c04).
- **QA:** Committed to `main`; live desktop/mobile visual verification pending.

## Fix Homepage and Services Two-Weight Headings (2026-11-16)

- Investigated the prior CSS-only heading update. Home and Services headings still used legacy `<em>` elements and inherited page-specific heading styling, making the intended weight contrast less dependable.
- Replaced emphasized text with explicit `<strong>` and `<span>` segments on five selected light-background headings: Home Services, Work and Process; Services What We Do and Benefits.
- Added targeted `.editorial-weight-heading` CSS with `700` weight for the first segment and `400` for the second, preserving uppercase Google Sans, original copy and line breaks.
- Left dark-background headings, the About Us heading, other sections, animations and interactions untouched. Updated Home and Services stylesheet cache references to `v2.1.30`.
- **Files:** `index.html`, `pages/services.html`, `css/theme-v2-1.css`, `CHANGELOG.md`.
- **Commits:** [Home markup](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/5660340b393bf960f10f3e31ba1887a41d7ecb10), [Services markup](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/88c4237032092861ee4fd75c16977b05d6ef4118), [explicit CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/cb2417f538cddd4bad63e4975a79d9f49d7c90b0).
- **QA:** Source changes committed to `main`; live visual verification pending.

## Editorial Two-Weight Headings Across Light Sections (2026-11-16)

- Reduced the About Us **THOUGHTFUL WORK. / CLEAR PURPOSE.** heading size slightly, including a mobile-specific adjustment.
- Applied a consistent uppercase Google Sans heading treatment: bold main text (`700`) and regular-weight emphasized text (`400`) to light-background sections on About, Home and Services pages.
- Kept existing copy, line breaks, content, animations, and dark-background hero/panel heading treatments unchanged.
- Scoped the shared styling to About intro/values, Home services/work/process, and Services what-we-do/tools/benefits sections. Headings without an emphasized span remain a single weight.
- Bumped stylesheet references to `v2.1.29` on all three pages.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [CSS typography](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/40aece11719975531cb32d08c8ca164186202d61), [Home](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/3e3f00f643ce2de6aa61ed8a86f2a227dac0d5a7), [Services](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/fb3ca6a786744b759f5b5eb4e889a09dc38ba109), [About](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/05a89739ecdc266522147eb130472ed7583d8bf3).
- **QA:** Committed to `main`; live desktop/mobile visual verification pending.

## About Hero — Fix Hidden Atmospheric Background (2026-11-16)

- Diagnosed the About hero's atmospheric `::before` artwork as being placed at `z-index:-1` behind the opaque hero surface; older theme CSS also supplied an independent circular `::after` overlay.
- Moved the background artwork to stacking level `0`, placed hero content at `1`, removed the old `::after` overlay, and explicitly reset inherited background geometry and styling so Option 21B renders consistently.
- Bumped About stylesheet cache from `v2.1.27` to `v2.1.28`; preserved all hero content and other pages.
- **Files:** `css/theme-v2-1.css`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [stacking fix](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/ff93837a3298a4a8199e840e24deb8924a444c9b), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/94ce6771d53dcf6a08b30f89bea9f4fe5002c561).
- **QA:** Source-level diagnosis and fix committed; deployed desktop/mobile rendering not yet visually verified.

## About Hero — Match Homepage Atmospheric Flow (2026-11-16)

### Background consistency
- Matched the About hero's Option 21B Asymmetric Flow artwork to the homepage's exact SVG positioning, sizing and full-opacity rendering on desktop and mobile (previously reduced to 75% desktop and 50% mobile).
- Preserved About hero copy, typography, layout and all shared components; no changes to homepage or Services page.
- **Files:** `css/theme-v2-1.css`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [About hero styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/1715cb66895913a35ba62283435532856c00cb29), [About stylesheet cache v2.1.27](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/c7603eae7c22600757e64b7ddc4b6d4afdefc552).
- **QA:** Committed to `main`; deployed desktop/mobile visual verification pending.

## About Us — Theme v2.1 Editorial Refresh (2026-11-16)

### Hero and typography
- Applied Deep Atlantic Blue `#102A43` to the About hero, with the same subtle asymmetric atmospheric band artwork as the homepage, and saffron `#F4B544` emphasis on the headline and eyebrow.
- Replaced the legacy serif display headings with uppercase Google Sans styling, retaining all existing About page text and layout.

### Who We Are and Values
- Retained the white editorial introduction with Atlantic Blue headings and readable muted-blue body copy.
- Introduced a soft off-white Values section and lighter Atlantic Blue `#173955` value cards, with white text and saffron numbering. Added restrained hover lift and reduced-motion support.
- Scoped changes to `body.about-page` to avoid affecting the homepage or Services page. Existing shared header/footer and interactions remain intact.

### Implementation and QA
- **Files:** `css/theme-v2-1.css`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [About theme styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/274aeff0a8d028c4b4bd6488f49d23bff7069319), [About page activation](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/4de4d353a75d54ce34fd4c90a3ea32061405e6ec).
- About page stylesheet cache bumped to `v2.1.26`; other pages retain `v2.1.25` because these rules are About-scoped.
- **QA:** Source changes committed to `main`; deployed desktop/mobile visual verification pending.

## Shared Footer — Complementary Atmospheric Flow (2026-11-16)

### Layered footer background
- Replaced the footer's twelve fine sweeping contour strokes with three broad translucent bands flowing from the upper-left toward the lower center, complementing (not duplicating) the homepage hero's Option 21B Asymmetric Flow.
- Preserved the Deep Atlantic Blue footer background, existing layout, navigation, branding, links, and saffron **BUILT WITH PURPOSE.** signoff.
- Updated the footer SVG asset cache reference to `footer-contours.svg?v=2` and the shared theme stylesheet to `v2.1.25` on the homepage, Services and About pages.
- **Files:** `assets/footer-contours.svg`, `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [footer artwork](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/6a009a3066cb1cd1bae99d18ab4e7bd3ef8b4c49), [theme reference](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/593c333eed180e6ae0374a9923500a92689d3455), [homepage](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/1c95078226a570c7c81092be4374a418a427cb2d), [Services](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/0b23d04c30734ec83711717fa17cb801088b1233), [About](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/f2ef198d6f6073368d100fe5a07185805fea79a6).
- **QA:** Committed to `main`; live desktop/mobile visual review pending.

## Homepage Hero — Option 21B Asymmetric Flow (2026-11-16)

### Atmospheric layered background
- Replaced the homepage's eight elliptical contour strokes with three broad, overlapping asymmetric SVG bands that rise toward the right.
- Kept the Deep Atlantic Blue `#102A43` hero base and used translucent lighter blues and a very faint white layer to create depth without bright hotspots or visible contour-line pixelation.
- Preserved the existing hero headline, buttons, Digital Journey panel and all of its animation timings and markup. Footer's separate contour artwork remains unchanged.
- Reused the existing `assets/hero-contours.svg` asset path with new Option 21B artwork to avoid unnecessary file dependencies; cache-busted the asset and homepage stylesheet to `v2.1.24`.
- **Files:** `assets/hero-contours.svg`, `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [asymmetric bands artwork](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/33f9356ef717878f8401e26c1dffd238286cdcfc), [CSS asset refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/78e6fe367e536b3ec10212f6a7e23fee0c91ced1), [homepage stylesheet refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/cf11d28c62dc9365d174bcc017cde540eb102edb).
- **QA:** Code committed to `main`; deployed desktop/mobile visual verification pending.

## Footer — Saffron Built with Purpose sign-off (2026-11-16)

- Updated the shared footer's **BUILT WITH PURPOSE.** sign-off to Saffron `#F4B544` against Deep Atlantic Blue.
- Preserved the sign-off wording, placement, and typography across Homepage, Services, and About Us.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commit:** [footer sign-off styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/a8cf49f5ea880d25852784a6f5bbe713ba997bed).
- **QA:** Committed to `main`; live visual verification pending.

## Homepage — Subtle hero contour refinement (2026-11-16)

### Hero background artwork
- Reduced the vector contour count from 18 to 8, increased spacing, and reduced white stroke opacity from 15% to 7.5%.
- Moved the curve center slightly further right so the decoration stays peripheral rather than competing with hero copy and the Digital Journey animation.
- Left the footer's separate curved-line composition, hero content, palette and animations unchanged.
- **Files:** `assets/hero-contours.svg`, `css/theme-v2-1.css`, `index.html`, `CHANGELOG.md`.
- **Commits:** [vector refinement](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/806a4d8c37441e3994753e9da9f8729d751eb6b6), [asset cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/574590ae539b0000b1b0c5cde6eba90e2e832249), [homepage cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/ef1be580da28fa0cb81d0f67ff95162d04ffcfe1).
- **QA:** Committed to `main`; live visual verification pending.

## Theme v2.1 — Smooth hero and footer contour artwork (2026-11-14)

### Homepage hero
- Replaced transformed CSS repeating-radial gradients with a standalone vector SVG (`assets/hero-contours.svg`) to reduce contour edge aliasing.
- Removed the translucent radial glow pseudo-element responsible for the washed-out bright area near the bottom-right of the hero.
- Retained the right-side curved contour concept, Deep Atlantic Blue surface, hero content and Digital Journey animation.

### Shared footer
- Added distinct `assets/footer-contours.svg`: sweeping, restrained lines rising from the lower-left rather than copying the hero's right-centered elliptical rings.
- Removed the footer glow and the previous duplicated CSS contour background; retained existing footer content and stacking order.
- **Files:** `assets/hero-contours.svg`, `assets/footer-contours.svg`, `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [hero SVG](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/0e16bde18b5afa1b2d4acb99676da1576be6e1a8), [footer SVG](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/0d7041c1c41d4fe984467be937bf1dcaf6c88ba3), [theme CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/765073fdf98ec8a106fe2b3b4503998ae29b19cd).
- **QA:** Committed to `main`; deployed desktop/mobile visual verification pending.

## Homepage ticker and shared footer motif correction (2026-11-14)

### Shared footer — match homepage hero contours
- Replaced the previously introduced straight diagonal linework with the homepage hero's offset, curved contour-line pattern (same repeating-radial gradient, angle, opacity, and masking).
- Ensured the decoration renders behind footer content using an isolated stacking context; kept the Deep Atlantic Blue background and existing footer navigation.

### Homepage — service capability ticker
- Restored clear white lettering for **STRATEGY · DESIGN · DEVELOPMENT · DIGITAL ADVERTISING · ONGOING SUPPORT** on a Deep Atlantic Blue ticker band immediately beneath the hero.
- Kept the saffron separator dots and adjusted spacing and wrapping for narrow screens.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [footer and ticker CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/e1f548e90910ea3b2b1aae8add7250819cc2a402), [homepage refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/8845f06ee4dd293d64cfaa530dc7111d3baed48d), [Services refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/b45c23a83563ea4b70c74ce0acb69f463cbf008c), [About refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/b7d0790be8a8209778f34363e198955c66d0ea0c).
- **QA:** Committed to `main`; deployed desktop/mobile rendering has not yet been visually verified.

## Services — Preserve original animated illustration colors (2026-11-14)

### Website Development and Digital Advertising overview cards
- Restored the original animated image-area backgrounds, website mockup colors, ad creative, audience icons, and connecting-line colors by removing the illustration-specific overrides added in the previous theme update.
- Kept only the updated **card text-panel backgrounds**: Deep Atlantic Blue `#102A43` and lighter Atlantic Blue `#173955`, plus readable white copy and saffron category labels.
- Retained the updated footer diagonal-line motif from the preceding change.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [restore illustration styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/d8c5773b2a534128847172d4e05f4a54d6b52732), [Services cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/4069b544600477be898e8ec5b10c18e6d93f7086).
- **QA:** Committed to `main`; live browser verification pending.

## Theme v2.1 — Footer geometry and Services card palette (2026-11-14)

### Shared Footer — Hero-aligned background detail
- Removed the legacy Cornflower Blue concentric-ring pseudo-element from the footer and replaced it with subtle diagonal geometric lines over Deep Atlantic Blue, echoing the homepage hero's linework.
- Added a very faint saffron-toned glow on the blue footer, with no changes to navigation, content, or the saffron wordmark dot.

### Services — Website Development and Digital Advertising cards
- Recolored the two overview cards to Deep Atlantic Blue `#102A43` and lighter Atlantic Blue `#173955`, replacing the older midnight/cobalt backgrounds.
- Reworked both illustrated header panels to use Atlantic blues with white website/ad mockups, blue elements inside white mockups, and saffron connecting lines on the blue advertising background.
- Set service category labels to saffron and kept white headings, near-white descriptions, and high-contrast service lists. Preserved existing illustration animations, hover lift, and disabled CTA states.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [theme styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/004e3ccdce6ff539913fc6f3cf8ad9574ee92167), [homepage cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/de7f58e1cd5ba8e5c0cd4eecde8dd0b037b43fcf), [Services cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/d21cd258519f6623d7cc3f01be7d4e18c4f58487), [About cache](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/64f9e5a79a8348aad063f9c139deab40f8f31acf).
- **QA:** Committed to `main`; live desktop/mobile visual verification remains pending. About Us content and layout have not been revised in this update.

## Services — Toolkit cards use Advertisement Pipeline blue (2026-11-13)

### Tools & Technologies
- Changed all four toolkit card backgrounds from Deep Atlantic Blue `#102A43` to the lighter blue `#173955` already used on the five Advertisement Pipeline step panels.
- Preserved white text, saffron icon tiles, and the lift-and-shadow hover treatment; the cards remain the same blue on hover.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [background adjustment](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/34486bfc3d289be2ebd9b7f4372d07e267e81dcc), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/cdb1ab996e5a678655bd0704a12e1cd2e20b6ec1).
- **QA:** Committed to `main`; live browser verification pending.

## Shared footer — Deep Atlantic Blue background (2026-11-13)

### Footer theme consistency
- Replaced the footer's legacy Midnight Navy `#0B1426` background with Deep Atlantic Blue `#102A43` across Homepage, Services, and About Us.
- Preserved footer structure, links, typography, white content, and saffron wordmark dot.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commit:** [footer background update](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/daaccc41a7d4f4639baea8c0982889f60f95395c).
- **QA:** Committed to `main`; live browser verification pending.

## Branding — Saffron wordmark dot (2026-11-13)

### Shared header and footer
- Set the terminal dot in the `akarshify.` wordmark to Saffron `#F4B544` on all three pages, including both shared header and footer variants.
- Left wordmark lettering, typography, tagline and layout unchanged. This explicit branding accent applies even where the header or footer background is white.
- **Files:** `css/theme-v2-1.css`, `index.html`, `pages/services.html`, `pages/about.html`, `CHANGELOG.md`.
- **Commits:** [wordmark styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/28597b388af3f25fb034285002bd1d5f8f9f3619).
- **QA:** Committed to `main`; browser verification pending.

## Services — Toolkit card hover and icon redesign (2026-11-13)

### Tools & Technologies
- Removed the white-background hover transition from all four toolkit cards; they remain Deep Atlantic Blue at rest and on hover.
- Added a gentle six-pixel hover lift, shadow and subtle saffron border emphasis; motion is disabled for reduced-motion preferences.
- Updated icon tiles to Saffron `#F4B544` with white SVG icon strokes, preserving existing icon artwork and copy.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [toolkit styling](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/c541be3191bcd975b0f5bf53abbe611a943eaae8), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/2d49ac2b2f4f0888610619ca4647a67ec84bfe8f).
- **QA:** Committed to `main`; live visual verification pending.

## Services — Saffron advertisement pipeline labels (2026-11-13)

### Advertisement Pipeline
- Updated the five step labels (Discover, Plan, Connect, Launch, Learn) to Saffron `#F4B544` against their Deep Atlantic Blue cards, preserving the remaining typography and layout.
- **Files:** `css/theme-v2-1.css`, `pages/services.html`, `CHANGELOG.md`.
- **Commits:** [CSS](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/f14ae6bdb5c1d491057f4460aca05d7fe352ca96), [cache refresh](https://github.com/ashutoshkelkar98-cpu/Akarshify-Website/commit/275f31c165f8717a677082fe862393e53b966016).
- **QA:** Committed to `main`; browser rendering not verified.

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
