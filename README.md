# LimeView

LimeView is a demo streaming site built with React and Vite. It mimics a Netflix-style layout and uses Supabase for authentication. The app is configured for deployment to GitHub Pages with `HashRouter` for client-side routing.

## Features

- Authentication with Supabase (login, register, logout)
- Admin-protected dashboard using user metadata
- Dark theme with responsive design
- Language switcher (Norwegian and English)
- Pages: Home, Browse, Categories, Watch, Account, Contact, Settings, Admin Dashboard, Watchlist, Trending, Help/Support

## Development

```
cd limeview
npm install
cp .env.example .env # add your Supabase credentials
npm run dev
```

## Deployment to GitHub Pages

1. Edit the existing `homepage` field in `limeview/package.json` so it points to `https://<your-username>.github.io/limeview`.
2. Install the `gh-pages` package if not already installed.
3. Run `npm run deploy` from the `limeview` directory to build and publish the `dist` folder to the `gh-pages` branch.

```bash
npm install --save-dev gh-pages
npm run deploy
```

The project should then be available on your GitHub Pages site.
