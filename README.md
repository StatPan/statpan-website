# statpan-website

StatPan company website built with [Quarto](https://quarto.org).

## Development

```bash
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
- `docs/` — Service documentation (Leginote, AssemblyMCP, ragpan)

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.
