# SBSpots Landing Page MVP — Implementation Specification

## 1. Objective

Build the first public landing page for **SBSpots**.

The site should visually establish the SBSpots brand while the full application is still under development.

The landing page should take visual inspiration from the existing SBSpots login mockup:

- centered branding
- strong vertical hierarchy
- black / white / red visual identity
- skate-inspired background artwork
- graffiti / hand-drawn branding
- pixel-influenced UI elements
- support for both light and dark themes

The MVP should remain a fully static website suitable for **GitHub Pages**.

## 2. Technology

The MVP should use only:

- HTML
- CSS
- Minimal vanilla JavaScript

Do not use:

- React
- Vue
- Angular
- Next.js
- Node backend
- Database
- Authentication
- Build tools
- npm dependencies

The site should work by opening `index.html` directly.

JavaScript should only be used where necessary, primarily for theme switching.

## 3. Asset Structure

Use the existing assets:

```text
/assets/
    sbspots_logo.png
    sbspots_background.png
    sbspots_background_dark.png
    sbspots_name.png
    sbspots_name_dark.png
```

If the current light name asset is actually named `spspots_name.png`, rename it to `sbspots_name.png` before implementation so asset naming remains consistent.

## 4. Page Structure

The landing page should consist of a single main viewport.

Conceptually:

```text
┌─────────────────────────────────────┐
│                                 ☾   │
│                                     │
│             SBSPOTS LOGO            │
│                                     │
│             SBSPOTS NAME            │
│                                     │
│         SKATE • EXPLORE • SHARE     │
│                                     │
│          [ COMING SOON → ]          │
│                                     │
│          skate background           │
│                                     │
└─────────────────────────────────────┘
```

The page should feel more like the opening screen of the SBSpots application than a traditional company website.

## 5. Main Layout

Use a full viewport container:

```css
min-height: 100vh;
```

Main content should be:

- horizontally centered
- approximately vertically centered
- displayed above the background artwork
- constrained to a reasonable width

Suggested structure:

```html
<body>
    <button class="theme-toggle">
        theme icon
    </button>

    <main class="landing">
        <div class="brand">
            <img class="logo">
            <img class="brand-name">

            <p class="tagline">
                SKATE • EXPLORE • SHARE
            </p>

            <button class="coming-soon">
                COMING SOON
            </button>
        </div>
    </main>
</body>
```

## 6. Logo

Use:

```text
sbspots_logo.png
```

The logo should be the primary visual anchor of the page and should appear above the SBSpots name.

Target approximate desktop size:

```text
240–320 px wide
```

Target approximate mobile size:

```text
150–220 px wide
```

The exact size should respond to screen width.

Do not stretch or distort the image.

Use:

```css
height: auto;
object-fit: contain;
```

## 7. SBSpots Name

The SBSpots name should use the image asset rather than recreating the logo typography in HTML.

Light theme:

```text
sbspots_name.png
```

Dark theme:

```text
sbspots_name_dark.png
```

The correct version should automatically change when the theme changes.

Recommended width:

Desktop:

```text
300–420 px
```

Mobile:

```text
220–300 px
```

## 8. Tagline

Use:

```text
SKATE • EXPLORE • SHARE
```

The tagline should appear immediately below the SBSpots name.

Styling should resemble the login mockup.

Characteristics:

- uppercase
- bold
- slightly loose letter spacing
- compact
- centered

Example:

```css
font-weight: 700;
letter-spacing: 0.12em;
```

Do not make it visually stronger than the SBSpots name.

## 9. Primary CTA

The landing page should contain one main button:

```text
COMING SOON
```

Optionally include the right-arrow visual used in the login design:

```text
COMING SOON        →
```

The button does not need to navigate anywhere in the MVP.

It should visually resemble the **LOG IN** button from the login mockup.

Light theme:

- red background
- white text
- dark outline / shadow

Dark theme:

- red background
- white text
- light or dark outline depending on contrast

Suggested button characteristics:

- large width
- rectangular
- slightly rough / pixel-inspired border
- bold uppercase text

Target width:

```text
280–360 px desktop
80–90% of main content width mobile
```

## 10. Background

Light mode uses:

```text
sbspots_background.png
```

Dark mode uses:

```text
sbspots_background_dark.png
```

The background should fill the viewport.

Preferred visual behavior:

- objects remain relatively small
- plenty of empty space remains
- background does not dominate the logo
- pattern remains visible across the entire viewport

Suggested CSS starting point:

```css
background-position: center;
background-repeat: repeat;
background-size: 1200px auto;
```

Desktop and mobile values may differ.

## 11. Content Readability Layer

The main branding must remain readable over the illustrated background.

The preferred solution is **not** a giant card around the content.

Instead, use a subtle central fading layer.

For light mode:

- transparent white radial gradient

For dark mode:

- transparent black radial gradient

Conceptually:

```css
background:
radial-gradient(
    circle at center,
    rgba(..., 0.95) 0%,
    rgba(..., 0.80) 35%,
    rgba(..., 0) 70%
);
```

This creates a quiet visual area around the branding while preserving the skate artwork around the edges.

## 12. Theme System

The site must support:

- Light Mode
- Dark Mode

Themes affect:

- page background color
- background artwork
- SBSpots name image
- text colors
- theme control
- borders / shadows

## 13. Default Theme

On first visit, detect the user's operating system preference using:

```css
prefers-color-scheme
```

Example:

```javascript
window.matchMedia('(prefers-color-scheme: dark)')
```

If the user has never chosen a theme manually:

```text
system dark → Dark theme
system light → Light theme
```

## 14. Theme Toggle

A small theme toggle should appear in the upper-right corner.

The control should be intentionally simple and visually consistent with the SBSpots interface.

It may use:

- simple Unicode icon
- CSS-created icon
- small SVG icon

Avoid installing an icon library.

Suggested location:

```text
top: 20–24 px
right: 20–24 px
```

Mobile:

```text
top: 16 px
right: 16 px
```

## 15. Theme Persistence

When the visitor manually changes the theme, save the selection using:

```javascript
localStorage
```

Suggested key:

```text
sbspots-theme
```

Possible values:

```text
light
dark
```

On later visits, the manually selected theme takes priority over the operating system preference.

## 16. Theme Switching Behavior

Theme switching should happen without refreshing the page.

Recommended implementation:

```html
<html data-theme="light">
```

CSS example:

```css
[data-theme="light"] {
    --background: #ffffff;
    --foreground: #000000;
}

[data-theme="dark"] {
    --background: #000000;
    --foreground: #ffffff;
}
```

Prefer CSS variables instead of duplicating large portions of the stylesheet.

## 17. Background Theme Behavior

Light:

```text
background image:
sbspots_background.png

background color:
white
```

Dark:

```text
background image:
sbspots_background_dark.png

background color:
black
```

Theme changes should swap the background image immediately.

## 18. Brand Name Theme Behavior

Light mode:

```text
sbspots_name.png
```

Dark mode:

```text
sbspots_name_dark.png
```

Prefer CSS-controlled image switching if practical.

Example:

```html
<img class="brand-name brand-name-light">
<img class="brand-name brand-name-dark">
```

```css
[data-theme="light"] .brand-name-dark {
    display: none;
}

[data-theme="dark"] .brand-name-light {
    display: none;
}
```

## 19. Color Palette

Primary colors:

```text
Black
#000000

White
#FFFFFF
```

SBSpots Red:

```text
#E3262E
```

This is an initial value and may later be replaced by an official brand color sampled from the logo.

Avoid adding additional colors to the landing-page MVP.

## 20. Typography

The logo/name assets already carry the strongest brand typography.

Supporting UI should remain simple.

For:

```text
SKATE • EXPLORE • SHARE
COMING SOON
```

use a free/open-source handwritten or skate-inspired font only if it remains highly readable.

Otherwise prefer system sans-serif for the first implementation.

Do not introduce paid fonts.

## 21. Responsive Design

Mobile-first implementation is required.

Primary test widths:

```text
320 px
375 px
390 px
430 px
768 px
1024 px
1440 px
```

## 22. Mobile Layout

On mobile:

```text
Logo
↓
SBSpots name
↓
Tagline
↓
Coming Soon
```

Everything remains vertically stacked and centered.

Main content should occupy approximately:

```text
85–90% viewport width
```

There must be no horizontal scrolling.

Background artwork can extend beyond viewport boundaries.

## 23. Desktop Layout

Desktop should retain the same vertical structure.

Do not transform the page into a horizontal desktop marketing layout.

This consistency is intentional because the landing page should resemble an app entry screen.

The central content area should remain relatively narrow.

Suggested:

```css
max-width: 520px;
```

## 24. Vertical Spacing

Visual hierarchy should resemble the login mockup.

Approximate order:

```text
Logo

small gap

SBSpots Name

very small gap

SKATE • EXPLORE • SHARE

medium gap

COMING SOON
```

Do not add excessive vertical gaps.

## 25. Animation

Animation is optional.

If implemented, keep it extremely subtle.

Allowed examples:

- logo fade-in
- slight upward entrance
- button hover
- theme transition

Avoid:

- background movement
- parallax
- floating icons
- continuous animation
- large JavaScript animation libraries

## 26. Hover States

Desktop CTA hover may use:

```css
transform: translateY(-2px);
```

The theme toggle should also provide a simple hover/focus state.

## 27. Accessibility

Logo:

```html
alt="SBSpots"
```

Brand-name image may either use:

```html
alt="SBSpots"
```

or be marked decorative if the name already exists elsewhere in accessible markup.

Theme button should dynamically use:

```html
aria-label="Switch to dark mode"
```

or:

```html
aria-label="Switch to light mode"
```

The page must remain keyboard navigable.

## 28. SEO

Required `<title>`:

```text
SBSpots — Skate. Explore. Share.
```

Meta description:

```text
Discover skateparks, street spots, DIY spots and skate shops with SBSpots.
```

Include:

- viewport
- charset
- description
- theme-color

## 29. Favicon

Use the SBSpots logo as the favicon if possible.

Example:

```html
<link rel="icon" href="assets/sbspots_logo.png">
```

A dedicated simplified favicon may be created later.

## 30. Social Metadata

Include basic Open Graph metadata.

```text
og:title
SBSpots — Skate. Explore. Share.

og:description
Discover skateparks, street spots, DIY spots and skate shops.

og:type
website
```

`og:image` can be added later once a dedicated social preview asset exists.

## 31. Suggested Repository Structure

```text
sbspots_landing/
│
├── index.html
├── styles.css
├── script.js
├── CNAME
├── README.md
│
└── assets/
    ├── sbspots_logo.png
    ├── sbspots_background.png
    ├── sbspots_background_dark.png
    ├── sbspots_name.png
    └── sbspots_name_dark.png
```

## 32. GitHub Pages

The site must be compatible with GitHub Pages without compilation.

Deployment should simply publish the repository contents.

Expected workflow:

```text
commit
↓
push main
↓
GitHub Pages deploys
↓
SBSpots domain
```

No deployment script is necessary.

## 33. Out of Scope for MVP

Do not implement:

- Login
- Register
- Authentication
- User database
- Map
- Spot listings
- Spot search
- Geolocation
- Newsletter
- Contact forms
- Social feed
- App download links
- Admin features
- Backend API
- Analytics
- Cookie banners

These belong to later phases.

## 34. Acceptance Criteria

The landing page is complete when:

1. Opening the site displays the SBSpots logo.
2. The SBSpots name appears directly below the logo.
3. `SKATE • EXPLORE • SHARE` appears below the name.
4. A prominent red `COMING SOON` button is displayed.
5. The skate illustration pattern fills the page background.
6. Light mode uses `sbspots_background.png`.
7. Dark mode uses `sbspots_background_dark.png`.
8. Light mode uses `sbspots_name.png`.
9. Dark mode uses `sbspots_name_dark.png`.
10. The theme follows the system preference on first visit.
11. Visitors can manually switch between light and dark mode.
12. Manual theme preference persists after page reload.
13. Theme changes occur without page reload.
14. The page works at 320 px width.
15. The page works on desktop resolutions.
16. No horizontal scrolling occurs.
17. Central branding remains readable over the background.
18. The site runs without a backend.
19. The site works without a build process.
20. The site can be deployed directly to GitHub Pages.
21. No console errors appear in normal use.

## 35. Design Reference

The existing **SBSpots login mockup should be considered the primary visual reference** for:

- branding hierarchy
- button appearance
- red accent
- spacing
- graffiti/skate aesthetic
- UI weight
- overall personality

The landing page should not reproduce the login form itself.

Instead, it should feel like a simplified public-facing version of that same screen.

## 36. MVP Visual Target

The final page should roughly communicate:

```text
              [ theme ]



            SBSPOTS
              LOGO

            SBSPOTS

       SKATE • EXPLORE • SHARE


        ┌─────────────────┐
        │   COMING SOON → │
        └─────────────────┘



     skate / street artwork
     distributed around page
```

The center remains clean and recognizable while the skate background provides personality around it.

## Development Principle

When the implementation agent must choose between something more sophisticated and something simpler:

**choose the simpler solution.**

For this MVP the priorities are:

**visual identity → responsiveness → performance → simplicity → functionality.**
