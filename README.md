# personal-canvas

A full-page [tldraw](https://tldraw.dev) canvas, built with Vite and deployed to GitHub Pages at [caissonpoint.github.io](https://caissonpoint.github.io/).

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

This is a user site (`username.github.io`), so Vite’s `base` is `/`. The Actions workflow builds `dist` and deploys it with `actions/deploy-pages`.

tldraw 5 requires a license key in production. A trial key is bundled in the app (expires 2026-12-12). To use a different key later, set the `VITE_TLDRAW_LICENSE_KEY` repository secret and re-run the deploy workflow.
