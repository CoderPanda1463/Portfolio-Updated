# Fuad Al Hasan Portfolio

A static, data-driven portfolio and mobile photography gallery built with HTML, CSS, and vanilla JavaScript. No build step or package installation is required.

## Open the site

Open `index.html` in a browser. The photography gallery is available at `photography.html`. Google Fonts load when an internet connection is available; otherwise the pages use sans-serif fallback fonts.

## Update content

Edit `js/data.js` to change profile details, education, interests, social links, or photography. Each photo entry includes its web-safe image path, title, alt text, and caption. Place new optimized images in `assets/images/photography/` and add an entry to the `photos` array.

## Structure

- `index.html` - single-page portfolio
- `photography.html` - dedicated photo gallery with keyboard-accessible lightbox
- `css/` - shared theme, layout, responsive, and gallery styles
- `js/` - data, rendering, theme, contact, and gallery behavior
- `assets/images/` - copied profile and mobile photography images
- `assets/cv/` - Fuad's downloadable CV

Theme selection follows the system preference until a choice is saved in local storage, shared by both pages.