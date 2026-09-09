# SBSpots landing page

A static coming-soon page for SBSpots, built with HTML, CSS, and minimal vanilla JavaScript. No dependencies, backend, or build process are required.

## Run locally

Open `index.html` directly in a browser. All styles, scripts, and images use relative paths.

For an optional HTTP preview, run this command from the repository directory if Python 3 is available:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open [localhost:8000](http://localhost:8000). Stop the server with Ctrl+C.

## Files

```text
index.html                      Page markup, SEO/Open Graph metadata, and favicon
styles.css                      Layout, themes, and accessibility styles
script.js                       Theme selection and persistence
assets/
  sbspots_logo.png               Logo and favicon
  sbspots_background.png         Light background
  sbspots_background_dark.png    Dark background
  sbspots_name.png               Light wordmark
  sbspots_name_dark.png          Dark wordmark
.nojekyll                       Publish static files without Jekyll processing
.gitignore                      Ignore Windows Zone.Identifier metadata files
mvp_mockup.png                  Visual reference
sbspots_landing_mvp_spec.md      Original MVP specification
```

## Themes and layout

The page follows the system's light/dark preference until a visitor uses the upper-right toggle. A manual choice is saved as `light` or `dark` under the `sbspots-theme` localStorage key and takes precedence on later visits. Without a manual choice, the page also follows system-theme changes while open.

Theme changes update the background, wordmark, colors, toggle icon and accessible label, and browser theme-color metadata. The initial theme is applied before the stylesheet loads.

If browser storage is unavailable, switching still works for the current visit, but the choice cannot persist. Storage behavior for directly opened files varies by browser; use the HTTP preview when checking persistence. To restore system-following behavior, remove the `sbspots-theme` key through the browser's developer tools and reload. With JavaScript disabled, the light page remains visible and the toggle stays disabled.

The content remains vertically stacked on mobile and desktop. At widths of 768px and above, one background image covers the page without repeating; its edges may be cropped to preserve proportions. Smaller screens retain the patterned background. Short screens can scroll vertically, and supporting text can grow without overlapping the CTA. The `COMING SOON` button is an unavailable action with no navigation or submission behavior.

## Publish on GitHub Pages

The intended publishing branch is `main`. Development changes must reach that branch before they can appear on the public site.

1. Commit the site files, including `assets/` and `.nojekyll`, and push the approved version to `main`.
2. In the repository's **Settings → Pages**, select **Deploy from a branch** under **Build and deployment → Source**.
3. Select **main** and **/(root)**, then save.
4. Check the Pages deployment in the **Actions** tab, then open the published URL shown in Pages settings.

Future pushes to the selected publishing branch trigger deployment. No custom workflow or deployment script is needed. See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Relative asset paths support both a repository subpath and a custom-domain root. No custom domain is configured by these files: add `CNAME` only after the domain is confirmed and configure the corresponding Pages and DNS settings. A dedicated social preview image (`og:image`) is deferred until an asset exists.

## Review before release

The completed [MVP acceptance review](docs/qa/README.md) includes the 21-point checklist, browser coverage, screenshots, and remaining verification limits.

- Check both themes at 320, 375, 390, 430, 768, 1024, and 1440px widths, plus landscape and short screens.
- Check enlarged text, horizontal overflow, image loading, and branding readability.
- Use Tab to reach the controls; verify focus indicators and theme switching with Enter and Space.
- Check initial system preference, manual switching, and persistence after reload.
- Check the browser console and confirm the title, description, favicon, and Open Graph metadata.
- Validate the published site after deployment; local checks do not confirm GitHub Pages configuration.

The MVP excludes authentication, maps, forms, analytics, and backend features. The original spec and mockup describe the design; the current page includes the approved arrow-free CTA and non-repeating desktop background.
