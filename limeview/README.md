# LimeView

LimeView is a demo streaming site built with React and Vite. It uses Supabase for authentication and is configured to deploy on GitHub Pages.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

1. Add a `homepage` field in `package.json` pointing to your GitHub Pages URL.
2. Install the `gh-pages` package.
3. Run `npm run deploy` to build and publish the `dist` folder to the `gh-pages` branch.

```bash
npm install --save-dev gh-pages
npm run deploy
```

The site uses `HashRouter` to ensure client-side routing works on GitHub Pages.
