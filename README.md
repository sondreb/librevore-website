# Librevore — website

Static marketing site for **Librevore**, a family village community for families who want to live
freer, more intentional lives — together.

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies.

## Structure

```
index.html                    Single-page site (all sections + inline SVG artwork)
assets/css/styles.css         Design system: tokens, components, sections, motion
assets/js/main.js             Progressive enhancement: nav, accordion, reveals, contact form
assets/img/                   Favicon and social share image
CNAME                         Custom domain: village.librevore.me
.github/workflows/deploy.yml  GitHub Pages deployment
```

## Design system — Botanical / Organic Serif

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#F9F8F4` | Warm alabaster page background |
| `--color-fg` | `#2D3A31` | Deep forest green text |
| `--color-sage` | `#8C9A84` | Primary accent, borders, icons |
| `--color-clay` | `#DCCFC2` | Soft clay surfaces |
| `--color-stone` | `#E6E2DA` | 1px delicate borders |
| `--color-terracotta` | `#C27B66` | Hover / call-to-action pops |

- **Type**: Playfair Display (headings, italic emphasis) + Source Sans 3 (body), loaded from Google Fonts.
- **Shape**: pill buttons, `24px` cards, `40px` panels, `200px` arch tops on imagery.
- **Texture**: a fixed SVG fractal-noise grain overlay at `opacity: 0.015` — the tactile signature of the style.
- **Motion**: slow `cubic-bezier(0.16, 1, 0.3, 1)` easing, 300/500/700ms tiers, scroll reveals, staggered grids.
- All tokens live in `:root` in `assets/css/styles.css` — change them there and everything follows.

Artwork is original inline SVG (`<symbol>` definitions at the top of `index.html`), so there are no
image downloads, no licensing questions, and everything scales crisply.

## Accessibility

- Semantic landmarks, skip link, visible focus rings, `aria-expanded` / `aria-controls` on the accordion
  and menu, descriptive `role="img"` labels on illustrations, and full `prefers-reduced-motion` support.
- The page is readable and navigable with JavaScript disabled.

## Local preview

```powershell
python -m http.server 8123
# then open http://localhost:8123/
```

## Deployment

Live at **https://village.librevore.me**.

Pushing to `main` triggers `.github/workflows/deploy.yml`, which uploads the repository root as the
Pages artifact and deploys it. Set **Settings → Pages → Source** to **GitHub Actions** once.

The `CNAME` file pins the custom domain. Point a DNS `CNAME` record for `village` on `librevore.me`
at `sondreb.github.io`, then tick **Enforce HTTPS** in the Pages settings once the certificate is issued.

`.nojekyll` is present so Jekyll never touches the files.

## Contact

The join form and footer link to `librevoreme@gmail.com`. The form composes a pre-filled `mailto:` draft
in the visitor's own email client — no backend, no tracking. Swap the address (in `index.html` and
`assets/js/main.js`) or point the form at a hosted form service if a real inbox pipeline is wanted.
