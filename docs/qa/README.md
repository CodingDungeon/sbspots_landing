# MVP acceptance review

Reviewed on 2026-09-09 against [the MVP specification](../../sbspots_landing_mvp_spec.md) and [the mockup](../../mvp_mockup.png), including the approved arrow-free CTA, supplied white dark-mode wordmark, and non-repeating desktop background.

**Result: all local acceptance checks passed.** The site is ready for user review and deployment. Live GitHub Pages deployment was not performed or verified. No application changes were needed during this final review.

## Validation environment

- Chromium Headless Shell 140.0.7339.16 on Linux, driven by temporary Playwright tooling outside the repository.
- Three loading modes: directly opened `index.html`, localhost HTTP at `/`, and localhost HTTP at `/sbspots_landing/`.
- Light and dark themes at normal text size and an enlarged 32px root font size (200% of the default). This tests enlarged text; it is not a substitute for physical-device or browser-zoom testing.
- Twelve viewport sizes in each mode/theme/text-size combination: **144 layout checks** in total.

| Coverage | Viewports (CSS pixels) |
| --- | --- |
| Required widths | 320×568, 375×812, 390×844, 430×932, 768×1024, 1024×768, 1440×900 |
| Large screens | 1920×1080, 2560×1440 |
| Landscape and short screens | 812×375, 1024×500, 320×256 |

Each layout check verified content ordering, absence of horizontal overflow, CTA containment, theme-control clearance, a minimum 44×44px toggle target, and the desktop background's non-repeating cover behavior. Short screens may scroll vertically so content remains reachable.

## Specification acceptance checklist

| # | Criterion | Result and evidence |
| --- | --- | --- |
| 1 | SBSpots logo displays | Pass — image loads in all three loading modes. |
| 2 | Name appears directly below logo | Pass — visible wordmark and element bounds checked. |
| 3 | Tagline appears below name | Pass — exact copy and vertical order confirmed. |
| 4 | Prominent red COMING SOON button | Pass — screenshots reviewed; arrow removed as requested. |
| 5 | Skate artwork fills page background | Pass — mobile pattern and single desktop image reviewed. |
| 6 | Correct light background | Pass — computed background uses `sbspots_background.png`. |
| 7 | Correct dark background | Pass — computed background uses `sbspots_background_dark.png`. |
| 8 | Correct light wordmark | Pass — `sbspots_name.png` is visible in light mode. |
| 9 | Correct dark wordmark | Pass — `sbspots_name_dark.png` is visible in dark mode. |
| 10 | System preference on first visit | Pass — fresh contexts tested with each system theme. |
| 11 | Manual theme switching | Pass — pointer, Enter, and Space activation tested. |
| 12 | Manual preference persists after reload | Pass — saved key and reloaded theme checked in all loading modes. |
| 13 | Switching does not reload page | Pass — a temporary page-state marker survives switching. |
| 14 | Works at 320px | Pass — normal, enlarged-text, and short-screen checks. |
| 15 | Works on desktop | Pass — desktop coverage extends to 2560px. |
| 16 | No horizontal scrolling | Pass — no overflow in all 144 combinations. |
| 17 | Branding remains readable | Pass — mobile and desktop screenshots visually reviewed. |
| 18 | No backend required | Pass — direct files and a basic static HTTP server work. |
| 19 | No build process required | Pass — source files served unchanged; no package dependencies. |
| 20 | Direct GitHub Pages compatibility | Pass locally — repository-subpath loading and `.nojekyll` checked. Actual Pages configuration and deployment remain unverified. |
| 21 | No normal-use console errors | Pass — zero page/console errors, failed requests, or HTTP error responses in the browser checks. |

## Additional checks

- System preference changes are followed until a manual selection is made. Saved light/dark choices override the system. Invalid saved values fall back to the system.
- Denied storage access and failed writes do not break switching; manual selections remain active for that visit.
- The toggle label and browser theme-color update with the active theme.
- Tab order and visible keyboard focus work. The accessibility tree exposes one named SBSpots heading/logo, the tagline, the named toggle, and the unavailable COMING SOON button. Decorative wordmarks and icons do not add duplicate accessible names.
- The CTA does not navigate when activated. Forced-colors mode retains a visible button border and focus outline.
- With JavaScript disabled, the light page and CTA remain visible and the toggle remains disabled.
- The title, description, Open Graph tags, and favicon match the specification. The favicon and `.nojekyll` return successfully over HTTP.
- The CTA's white text against `#E3262E` has an approximately 4.58:1 contrast ratio. Branding readability over artwork was assessed visually; this is not a full accessibility certification.

## Screenshots

Captured over localhost HTTP at normal text size. These are full-page screenshots of the actual implementation.

| Size | Light | Dark |
| --- | --- | --- |
| 320×568 | [Light](screenshots/light-320.png) | [Dark](screenshots/dark-320.png) |
| 375×812 | [Light](screenshots/light-375.png) | [Dark](screenshots/dark-375.png) |
| 1440×900 | [Light](screenshots/light-1440.png) | [Dark](screenshots/dark-1440.png) |

The implementation preserves the mockup's centered vertical hierarchy, red CTA, skate artwork, and compact entry-screen layout. It uses system supporting typography and CSS pixel edges rather than reproducing the mockup's handwritten text and distressed button texture. The supplied dark wordmark is white. The CTA has no arrow, and desktop artwork scales as one image, with proportional edge cropping, per the approved changes.

## Remaining verification and deferred items

- Confirm the actual GitHub Pages publishing branch, successful deployment, and published asset URLs after release. No push, deployment, DNS change, or domain configuration was performed during this review.
- Safari, Firefox, physical phones, screen readers, and real browser zoom were not tested. Safe-area and forced-color styles were checked in Chromium, but device-specific rendering still needs a device review.
- Direct-file storage behavior can differ between browsers. Persistence was confirmed in this Chromium environment; HTTP is the preferred preview for checking persistence elsewhere.
- A custom domain and dedicated social preview image remain deferred. The supplied PNG assets remain unoptimized; no performance budget or load-time audit was part of this acceptance run.

The temporary browser tools and static server are validation tools only; they are not site dependencies. The server was stopped after the checks.
