# personal-canvas

A full-page [tldraw](https://tldraw.dev) canvas, built with Vite and deployed to GitHub Pages at [caissonpoint.github.io](https://caissonpoint.github.io/).

## Local development

```bash
npm install
npm run dev
```

tldraw allows unlicensed use on localhost, so the canvas should load immediately.

## GitHub Pages

This is a user site (`username.github.io`), so Vite’s `base` is `/`. The Actions workflow builds `dist` and deploys it with `actions/deploy-pages`.

tldraw 5 requires a license key in production. Without one, the editor shows for about five seconds and then unmounts, which looks like a blank screen.

1. Get a free 100-day trial at [tldraw.dev/pricing](https://tldraw.dev/pricing), or apply for a hobby license at [tldraw.dev/get-a-license/hobby](https://tldraw.dev/get-a-license/hobby). Register the domain `caissonpoint.github.io`.
2. Add a repository secret named `VITE_TLDRAW_LICENSE_KEY`.
3. Re-run **Deploy to GitHub Pages** (or push to `main`).
