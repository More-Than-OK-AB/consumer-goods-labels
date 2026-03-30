# consumer-goods-labels

An informational website about the different consumer goods labels available in Sweden, published at [markningar.se](https://markningar.se).

## Stack

Astro 6 + Tailwind CSS 4 + React 19, deployed to GitHub Pages via GitHub Actions.

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

## Build and preview

```bash
npm run build    # builds to dist/
npm run preview  # serves the built dist/ locally
```

## Project structure

```
src/
  components/   React islands (LabelGrid, LabelCompare)
  data/         Label data (TypeScript)
  layouts/      Layout.astro
  pages/        index.astro, labels/[id].astro, jamfor.astro, om.astro
  styles/       global.css (Tailwind import)
public/
  images/       Label logos and favicon
```

## Adding or updating labels

Label data lives in `src/data/labels.ts`. All label content must conform to [label-spec.md](label-spec.md).
