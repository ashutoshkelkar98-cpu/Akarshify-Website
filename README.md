# Akarshify Website

Static HTML, CSS and JavaScript website for Akarshify, an independent digital services studio.

## Project structure

- `index.html` — homepage and enquiry form
- `pages/about.html` — original About Us page
- `pages/about-new-theme.html` — isolated Charcoal / Pearl / Bright Teal About Us experiment
- `pages/services.html` — Services page
- `css/header.css` and `css/footer.css` — shared component styles
- `css/about-new-theme.css` — experimental About Us theme overrides
- `js/header.js` and `js/footer.js` — shared navigation and footer
- `assets/` — reserved for future logos, images and icons

## Preview and deployment

Deploy as a static site with `index.html` at the repository root. Page URLs are `/pages/about.html`, `/pages/about-new-theme.html`, and `/pages/services.html`. Legacy root-level About and Services URLs have intentionally been retired.

The enquiry form currently uses Web3Forms as a temporary testing integration. Replace it with a supported email submission solution when hosting is finalized.

## Theme experiment

The original About Us page has a **New Theme** button; the experimental version has an **Original Theme** return button. The experimental palette is Charcoal `#252B35`, Pearl `#F6F7F5`, and Bright Teal `#00A6A6`. Other pages retain their original theme.
