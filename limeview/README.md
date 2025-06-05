# LimeView

LimeView is a demo streaming site built with React and Vite. It uses Supabase for authentication and is configured to deploy on GitHub Pages.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and provide your Supabase project URL and anon key before starting the app.

## Deployment

1. The `homepage` field in `package.json` is already set to `https://view.limeshop.no/limeview`.
2. Install the `gh-pages` package.
3. Copy `.env.example` to `.env` and fill in your Supabase credentials.
4. Run `npm run deploy` to build and publish the `dist` folder to the `gh-pages` branch.
=======
## Deployment to GitHub Pages

1. Edit the existing `homepage` field in `package.json` so it points to `https://<your-username>.github.io/limeview`.
2. Install the `gh-pages` package.
3. Copy `.env.example` to `.env` and fill in your Supabase credentials.
4. Run `npm run deploy` to build and publish the `dist` folder to the `gh-pages` branch.
=======
## Deployment to GitHub Pages

1. Add a `homepage` field in `package.json` pointing to your GitHub Pages URL.
2. Install the `gh-pages` package.
3. Run `npm run deploy` to build and publish the `dist` folder to the `gh-pages` branch.

```bash
npm install --save-dev gh-pages
npm run deploy
```

The site uses `HashRouter` so client-side routing works correctly with the custom GitHub Pages domain.
=======
The site uses `HashRouter` to ensure client-side routing works on GitHub Pages.
