# Dayfit

React + TypeScript application built with Vite and Tailwind CSS.

## Development

Use Node.js 22.12 or newer and npm.

```sh
npm install
npm run dev
```

Edit `src/App.tsx` for the application and `src/globals.css` for global styles.
Tailwind utilities are available through the Tailwind Vite plugin.

## Commands

- `npm run dev` — start the development server.
- `npm run build` — type-check and create the production build in `dist/`.
- `npm run lint` — run ESLint.
- `npm run lint:fix` — fix automatically correctable lint issues.
- `npm run format` — format source and configuration with Prettier.
- `npm run format:check` — check formatting without changing files.
- `npm run preview` — preview the production build locally.

The production output can be deployed to a static host. GitHub Pages must serve
`dist/` through a build workflow; it cannot serve the TypeScript source directly.
