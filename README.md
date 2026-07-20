# statpan-website target

StatPan company website target inside `contents/autocon`, built with [Quarto](https://quarto.org).

## Development

```bash
cd targets/statpan-website

# Preview locally
quarto preview

# Render site
quarto render
```

## Structure

- `index.qmd` — Landing page
- `about.qmd` — About StatPan
- `technology.qmd` — Technology stack
- `blog/` — Technical blog
- `macro/` — Macro regime dashboard (OJS)

## Deployment

Deployment is owned by autocon at `.github/workflows/statpan-website-pages.yml`.
The rendered site preserves the `statpan.com` custom domain through `CNAME`.

The old standalone repository workflow is preserved for reference at
`_archive/standalone-repo/publish.yml`.
