# statpan-website target

## Purpose
- Quarto publishing target for `https://statpan.com`.
- This target is a high-trust, semi-automatic surface for career, technical, project, and architecture writing.

## Source Of Truth
- Execution lives in GitHub issues and PRs in `StatPan/autocon`.
- Long-lived positioning context should link back to `statpan_docs`.
- The old standalone `StatPan/statpan-website` repository is legacy after this target is verified.

## Publishing Contract
- Keep `site-url: https://statpan.com` in `_quarto.yml`.
- Keep `CNAME` set to `statpan.com` for GitHub Pages custom-domain deployment.
- Render from this directory with `quarto render`.
- Publishing remains manual PR reviewed; do not auto-publish generated career or technical positioning content without human review.

## Content Boundaries
- `index.qmd`, `about.qmd`, `technology.qmd`: positioning pages.
- `blog/posts/**/index.qmd`: technical blog posts.
- `docs/**`: service and project documentation.
- `macro/**` plus `data/macro/**`: macro dashboard source data.
- `_archive/**`: migrated reference material only; do not treat as publishable source.
