# Teach For All — Fullstack Template

Next.js 14 frontend + Express/TypeScript backend, structured as an npm workspace monorepo.

---

## Prerequisites

- Node.js 18+
- npm 9+

---

## Quick Start

```bash
# 1. Install all dependencies (both workspaces)
npm install

# 2. Set up environment files
cp frontend/.env.example frontend/.env.local
cp backend/.env.example  backend/.env

# 3. Run both apps in parallel
npm run dev
```

| App      | URL                      |
|----------|--------------------------|
| Frontend | http://localhost:3000    |
| Backend  | http://localhost:4000    |
| Health   | http://localhost:4000/health |

All `/api/*` requests from the frontend are automatically proxied to the backend via `next.config.js`.

---

## Project Structure

```
teachforall/
├── package.json                  ← monorepo root
│
├── frontend/                     ← Next.js 14 App Router
│   └── src/
│       ├── app/                  ← pages & layouts (file-based routing)
│       │   ├── layout.tsx        ← root layout: fonts, metadata, Header+Footer
│       │   ├── page.tsx          ← homepage
│       │   ├── not-found.tsx     ← 404 page
│       │   └── our-purpose/     ← example inner page
│       ├── components/
│       │   ├── layout/           ← Header, Footer
│       │   ├── sections/         ← page-level section components
│       │   ├── ui/               ← reusable primitives (Button, etc.)
│       │   └── icons/            ← LogoSvg and other SVG components
│       ├── lib/
│       │   ├── constants.ts      ← ALL nav, footer, card config — edit here first
│       │   └── api.ts            ← typed fetch helpers for every API endpoint
│       ├── styles/globals.css    ← design tokens (CSS variables) + reset
│       └── types/index.ts        ← shared TypeScript types
│
└── backend/                      ← Express + TypeScript
    └── src/
        ├── index.ts              ← app entry: middleware, routes, error handler
        ├── config/index.ts       ← env-based config
        ├── routes/               ← one file per resource
        │   ├── news.ts
        │   ├── newsletter.ts
        │   └── contact.ts
        ├── controllers/          ← business logic, one file per resource
        │   ├── newsController.ts
        │   ├── newsletterController.ts
        │   └── contactController.ts
        └── middleware/index.ts   ← requestId, asyncHandler helpers
```

---

## API Reference

### News
| Method | Path              | Description                                          |
|--------|-------------------|------------------------------------------------------|
| GET    | /api/news         | Paginated list. Query: `?limit=4&page=1&category=Blog` |
| GET    | /api/news/:id     | Single article by ID                                 |

### Newsletter
| Method | Path                         | Body              | Description        |
|--------|------------------------------|-------------------|--------------------|
| POST   | /api/newsletter/subscribe    | `{ email }`       | Add subscriber     |
| DELETE | /api/newsletter/unsubscribe  | `{ email }`       | Remove subscriber  |

### Contact
| Method | Path          | Body                              | Description         |
|--------|---------------|-----------------------------------|---------------------|
| POST   | /api/contact  | `{ name, email, message, subject? }` | Submit contact form |

---

## Adding a New Page

1. Create `frontend/src/app/<slug>/page.tsx`
2. Export a default React component and a `metadata` export
3. Add the route to `MAIN_NAV` or `UTILITY_NAV` in `frontend/src/lib/constants.ts`

```tsx
// frontend/src/app/our-network/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Our Network' };

export default function OurNetworkPage() {
  return <main>...</main>;
}
```

---

## Adding a New API Route

1. Create `backend/src/controllers/myController.ts`
2. Create `backend/src/routes/my.ts`
3. Register in `backend/src/index.ts`:

```ts
import myRouter from './routes/my';
app.use('/api/my', myRouter);
```

---

## Connecting a Database

The controllers use in-memory seed data as placeholders. To wire up a real DB:

1. Install your driver: `npm install pg` (Postgres) or `npm install mongoose` (MongoDB) — inside the `backend` workspace
2. Add `DATABASE_URL` to `backend/.env`
3. Replace the seed arrays in each controller with DB queries

---

## Design Tokens

All colours, fonts, spacing, and shadows are defined as CSS variables in `frontend/src/styles/globals.css`. Edit there to reskin the entire site:

```css
:root {
  --tfa-red:    #CE4652;
  --tfa-teal:   #2AAFA7;
  --ff-heading: 'Montserrat', sans-serif;
  --ff-body:    'Lato', sans-serif;
  /* ... */
}
```

---

## Map Integration

`NetworkSection` includes a clearly marked placeholder. To add the interactive world map:

```tsx
// Replace the <div className={styles.mapPlaceholder}> block with:
import dynamic from 'next/dynamic';
const WorldMap = dynamic(() => import('@/components/sections/WorldMap'), { ssr: false });
<WorldMap partnerCountries={countries} />
```

Recommended libraries: **react-simple-maps** (lightweight) or **amCharts 5** (feature-rich).

---

## Deployment

### Frontend (Vercel — recommended)
```bash
cd frontend && npm run build
# Deploy the frontend/ directory to Vercel
# Set NEXT_PUBLIC_API_URL to your production API URL in Vercel environment variables
```

### Backend (Railway / Render / Fly.io)
```bash
cd backend && npm run build
# Start: node dist/index.js
# Set NODE_ENV=production and ALLOWED_ORIGINS=https://yourdomain.com
```
