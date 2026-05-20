# statpan-website migration

Date: 2026-05-07

## Source

- Repository: `StatPan/statpan-website`
- Local source path at migration time: `/home/statpan/workspace/statpan-website`
- Target path: `contents/autocon/targets/statpan-website`

## Migrated

- Quarto website configuration with `site-url: https://statpan.com`.
- Google Analytics ID `G-T89ZMSEYS4`.
- Open Graph and Twitter Card settings.
- GitHub Pages custom domain file: `CNAME` with `statpan.com`.
- Landing, about, technology, blog, docs, macro dashboard, and macro JSON data.
- Current dirty landing-page redesign from the standalone repository.
- Preview variant source files preserved under `_archive/`.
- The old standalone GitHub Pages workflow preserved at `_archive/standalone-repo/publish.yml`.

## Excluded

- Rendered output: `_site/`.
- Quarto cache/state: `.quarto/`.
- Preview server output: `_preview_serve/`.
- Generated preview build caches.
- Local Quarto installer `.deb` files.

## Deploy Shape

Autocon owns the deploy workflow at `.github/workflows/statpan-website-pages.yml`.
The workflow renders `targets/statpan-website` and uploads `targets/statpan-website/_site` to GitHub Pages.

Before archiving `StatPan/statpan-website`, verify:

- `quarto render` succeeds from `targets/statpan-website`.
- `_site/CNAME` contains `statpan.com`.
- GitHub Pages for `StatPan/autocon` is configured to deploy from GitHub Actions.
- DNS for `statpan.com` points to GitHub Pages for the replacement repository.
