# Dew Skincare — Complete E-Commerce Platform

A premium, professional skincare e-commerce store built on the Dew Skincare brand identity (natural skincare aesthetic, forest green, cream, and soft neutral tones) with a Shopify-inspired admin dashboard, Supabase backend, Google SEO optimization, and Telegram order notifications.

## Repository Structure

```
dew-skincare/
├── public/                  # Storefront (static, GitHub Pages compatible)
├── admin/                   # Admin Dashboard (Shopify-inspired SPA)
├── backend/                 # Node.js + Supabase backend API
├── scripts/                 # Sitemap & build scripts
└── docs/                    # Setup, SEO, Telegram, and Deployment guides
```

## Quick Start

1. **Storefront** (`public/`) — static site, deploy directly to GitHub Pages.
2. **Admin** (`admin/`) — static SPA, served from `/admin/`.
3. **Backend** (`backend/`) — Node.js + Express + Supabase. Run with `npm install && node server.js`.
4. **Database** — Supabase PostgreSQL with Row Level Security.

See [docs/SETUP_GUIDE.md](docs/SETUP_GUIDE.md) for full setup instructions.

## Key Features

- Premium storefront with natural skincare aesthetic
- Shopify-inspired admin dashboard (products, orders, inventory, customers, discounts, analytics)
- Supabase authentication, database, and image storage
- Real-time admin-to-storefront sync
- Google SEO: dynamic meta tags, XML sitemap, robots.txt, Schema.org JSON-LD
- Telegram bot order notifications with retry and duplicate prevention
- Fully responsive mobile-first design