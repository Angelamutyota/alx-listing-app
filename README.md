# ALX Listing App

A scaffold of an Airbnb-like listing app built with Next.js (Pages Router), TypeScript, TailwindCSS, and ESLint.

## Project goals
- Scaffold a production-ready Next.js project with TypeScript and Tailwind.
- Build reusable UI components (Card, Button).
- Establish a clean folder structure for scalability.
- Provide baseline assets and sample data.

## Folder structure
- `components/` - Reusable React components (e.g. `components/common/Card.tsx`).
- `interfaces/` - TypeScript interfaces and props definitions.
- `constants/` - Reusable constants and sample data (e.g. `SAMPLE_LISTINGS`).
- `public/assets/` - Static assets (images, svgs).
- `pages/` - Next.js Pages Router routes (`index.tsx`, `_app.tsx`).
- `styles/` - Global CSS (Tailwind directives).

## Getting started (local)
Prereqs: Node.js v16+ (or later), npm.

1. Clone / create project:
   ```bash
   npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
   cd alx-listing-app
