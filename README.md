# bun-express-react-starter

A monorepo starter template for building full-stack web apps with **Bun**, **Express**, and **React**. Ships with TypeScript, Tailwind CSS v4, shadcn/ui (Nova preset), and a proxy setup so your frontend and backend talk to each other out of the box.

---

## What's inside

```
.
├── index.ts                  # Root entry — starts both server and client concurrently
├── package.json              # Root workspace config
├── packages/
│   ├── client/               # React + Vite frontend
│   │   ├── src/
│   │   │   ├── App.tsx       # Root component (fetches /api/hello)
│   │   │   ├── main.tsx      # React entry point
│   │   │   ├── index.css     # Tailwind + shadcn theme tokens
│   │   │   ├── components/
│   │   │   │   └── ui/
│   │   │   │       └── button.tsx   # shadcn Button component
│   │   │   └── lib/
│   │   │       └── utils.ts  # cn() helper (clsx + tailwind-merge)
│   │   ├── vite.config.ts    # Vite config with /api proxy to :3000
│   │   └── components.json   # shadcn config (radix-nova style)
│   └── server/               # Express backend
│       └── index.ts          # Express app with /api/hello route
```

---

## Tech stack

| Layer         | Tech                                          |
| ------------- | --------------------------------------------- |
| Runtime       | [Bun](https://bun.sh)                         |
| Frontend      | React 19, Vite 8                              |
| Backend       | Express 5                                     |
| Language      | TypeScript (strict)                           |
| Styling       | Tailwind CSS v4, shadcn/ui (Nova), Geist font |
| UI primitives | Radix UI                                      |
| Icons         | Lucide React                                  |
| Dev tooling   | ESLint, Prettier, Husky, lint-staged          |
| Monorepo      | Bun workspaces                                |

---

## Prerequisites

- **Bun** v1.3+ — install from [bun.sh](https://bun.sh)

That's it. No Node.js required.

---

## Getting started

```bash
# 1. Clone or use this as a template
git clone <your-repo-url>
cd bun-express-react-starter

# 2. Install all dependencies (installs for root + both packages)
bun install

# 3. Start both frontend and backend in parallel
bun run dev
```

This runs:

- **Server** on `http://localhost:3000` (Express)
- **Client** on `http://localhost:5173` (Vite) — with `/api` proxied to the server

Open `http://localhost:5173` in your browser. You should see "Hello from the Server!" fetched from the Express API.

---

## How the proxy works

In `packages/client/vite.config.ts`, all requests starting with `/api` are forwarded to the Express server:

```ts
server: {
  proxy: {
    '/api': 'http://localhost:3000',
  },
},
```

So `fetch('/api/hello')` in your React code hits `http://localhost:3000/api/hello` — no CORS headaches in development.

---

## Adding API routes

Open `packages/server/index.ts` and add your routes:

```ts
app.get('/api/users', (req, res) => {
   res.json({ users: [] });
});
```

---

## Adding UI components (shadcn)

This template uses the **radix-nova** style preset. Add components from inside the `packages/client` directory:

```bash
cd packages/client
bunx shadcn add <component-name>

# Examples:
bunx shadcn add card
bunx shadcn add input
bunx shadcn add dialog
```

Components land in `packages/client/src/components/ui/`.

---

## Available scripts

### Root

| Command          | What it does                        |
| ---------------- | ----------------------------------- |
| `bun run dev`    | Starts server + client concurrently |
| `bun run format` | Formats all files with Prettier     |

### Client (`packages/client`)

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `bun run dev`     | Vite dev server                          |
| `bun run build`   | TypeScript check + Vite production build |
| `bun run lint`    | ESLint                                   |
| `bun run preview` | Preview production build locally         |

### Server (`packages/server`)

| Command         | What it does                                           |
| --------------- | ------------------------------------------------------ |
| `bun run dev`   | Express with `--watch` (auto-restarts on file changes) |
| `bun run start` | Express without watch                                  |

---

## Code style

Prettier is configured at the root with these settings (`.prettierrc`):

```json
{
   "singleQuote": true,
   "semi": true,
   "trailingComma": "es5",
   "printWidth": 80,
   "tabWidth": 3
}
```

Husky runs `prettier --write` on staged files automatically before every commit via `lint-staged`.

---

## Project structure decisions

**Why Bun?** Faster installs, built-in TypeScript support, and `bun --watch` for the server avoids needing nodemon.

**Why a monorepo?** Keeps the frontend and backend in one repo with shared tooling (Prettier, Husky) while keeping them independently runnable packages.

**Why Express 5?** Express 5 is the current stable release with better async error handling support.

**Why Tailwind v4 + shadcn Nova?** Tailwind v4 uses a CSS-first config (no `tailwind.config.js`) and the Nova preset gives shadcn components a cleaner look out of the box.

---

## Customising the theme

Theme tokens live in `packages/client/src/index.css` as CSS custom properties. Edit the `:root` block to change colors, radius, and fonts across the entire app:

```css
:root {
   --primary: oklch(0.205 0 0);
   --radius: 0.625rem;
   /* ... */
}
```

---

## Building for production

```bash
# Build the frontend
cd packages/client
bun run build
# Output goes to packages/client/dist/

# The server can be deployed as-is with Bun
cd packages/server
bun run start
```

For deployment you'll want to serve the built `dist/` folder as static files from Express, or deploy the client to a CDN and the server separately.
