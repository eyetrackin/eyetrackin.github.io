# eyetrackin.github.io

Official website of **EyeTrackIn**: eye-tracking software for gaze recording, visualization, and analysis.
*From Gaze to Insights.*

The software is currently in development. This repository contains the static landing page only.

## Stack

Plain HTML5, CSS3 and vanilla JavaScript. No build step and no external dependencies.

```text
index.html        Page structure and SEO metadata
style.css         Styles (tokens, layout, components, motion)
script.js         CONFIG object + menu, social rendering, footer year
assets/images/    Logo variants (EyetrackIn.png, EyetrackIn_dark.png)
assets/icons/     Favicon / app icon (Icon.ico, Icon.png)
```

`EyetrackIn_dark.png` (light wordmark) is used on the dark header, hero and footer. `EyetrackIn.png` (navy wordmark) is for light backgrounds. Both are used unmodified.

## Run locally

Open `index.html` in a browser, or serve the folder to mimic GitHub Pages:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Configuration

Everything that is likely to change lives in the `CONFIG` object at the top of `script.js`:

| Key | Purpose |
| --- | --- |
| `projectName`, `domain` | Brand values |
| `status` | Development-status label shown in the hero (one text per language) |
| `contactEmail` | Shown as a button in Contact; leave `""` to hide it |
| `defaultLang` | Fallback language when the browser language is not supported |
| `social[]` | Social networks, shown in array order in Community and the footer |

Each `social[]` entry supports `enabled` (`false` = never rendered), `soon: true` (non-clickable "Coming soon" card, used for TikTok) and `footer: false` (hide from the footer icon row).

## Languages

The site is available in English and Spanish. The language is chosen from the saved preference, then the browser language, then `defaultLang`, and can be switched with the EN / ES buttons in the header. English text is also written in `index.html`, so the page reads correctly without JavaScript.

Translations live in the `I18N` object in `script.js`. Elements use `data-i18n="key"` (text) or `data-i18n-attr="attr:key"` (attributes). To add a language, add a block to `I18N` and a `data-lang` button in the header.

## Publish with GitHub Pages

1. Push the repository to the `eyetrackin` organization as `eyetrackin.github.io`.
2. In **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site will be live at https://eyetrackin.github.io.

All asset paths are relative, so the site works at both `eyetrackin.github.io` and the custom domain.

### Custom domain (https://eyetrackin.com)

1. Configure DNS at your registrar as described in the [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Add `eyetrackin.com` under **Settings → Pages → Custom domain** (GitHub creates a `CNAME` file), then enable **Enforce HTTPS**.

## Pending

- Open the TikTok account and replace its "Coming soon" entry with the real URL.
- Replace the temporary contact email with a corporate address when available.
- Provide a dedicated 1200×630 social-sharing image (the current Open Graph image is `Icon.png`).
- Future pages: documentation, downloads, news.
