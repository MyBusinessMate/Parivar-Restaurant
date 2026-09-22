# SEO / AEO / GEO Content & Implementation: Parivar Restaurant

> **Central source of truth for all SEO, AEO, GEO, search-engine discoverability, indexing, metadata, structured data, and machine-readable content across the Parivar Restaurant web platform.**
> 
> *Generated via strict codebase inspection of the active repository.*

---

## 1. Project Overview

| Property | Value | Source Verification |
| :--- | :--- | :--- |
| **Application Name** | Parivar Restaurant (Web Platform & Parivar OS) | `package.json:2`, `src/routes/__root.tsx:82` |
| **Primary Framework** | TanStack Start v1.167.50 + TanStack Router v1.168.25 | `package.json:45-46` |
| **UI Library** | React v19.2.0 | `package.json:60` |
| **Language** | TypeScript v5.8.3 | `package.json:94`, `tsconfig.json` |
| **Bundler & Build Tool** | Vite v7.3.1 (`@lovable.dev/vite-tanstack-config`) | `vite.config.ts:7`, `package.json:78,96` |
| **Rendering Model** | Hybrid Server-Side Rendering (SSR) with Client Hydration | `src/server.ts`, `vite.config.ts:10-18` |
| **SSR / Server Engine** | Nitro v3.0 (configured with `"vercel"` preset) | `vite.config.ts:16-18`, `package.json:92` |
| **Deployment Platform** | Vercel (Frontend SSR & static assets) | `vercel.json`, `vite.config.ts:17` |
| **Backend API Framework** | FastAPI (Python 3.12) deployed on Render | `backend/app/main.py`, `render.yaml:4-7` |
| **Database** | Neon PostgreSQL (AWS `ap-southeast-2` direct connection) | `backend/app/database/database.py` |
| **Styling & Design System** | Tailwind CSS v4.2.1 + Custom OKLCH design tokens | `src/styles.css`, `package.json:69` |
| **State Management** | Zustand v5.0.14 (Cart Store) + TanStack Query v5.83.0 | `package.json:44,74`, `src/store/cart.ts` |
| **Motion Engineering** | Framer Motion v12.40.0 + GSAP v3.15.0 | `package.json:54-55` |

---

## 2. Website / Domain Configuration

### Canonical Production Domain
```
https://parivar-restaurant.com
```
* **Source:** `src/routes/__root.tsx:97`, `src/routes/index.tsx:29,42`, `public/robots.txt:50`, `public/sitemap.xml:5`, `public/llms.txt:15`.

### Deployment & Host Mappings
* **Canonical Domain:** `https://parivar-restaurant.com` (Target production custom domain)
* **Live Frontend Staging/Deployment Host:** `https://parivar-restaurant-final.vercel.app`
* **Live Backend API Host:** `https://parivar-restaurant-final.onrender.com` (configured in `src/routes/menu.tsx:308`)
* **Authorized CORS Origins (`render.yaml:20`):**
  - `https://parivar-restaurant.com`
  - `https://www.parivar-restaurant.com`
  - `https://parivar-restaurant-final.vercel.app`
  - `https://parivar.restaurant`
  - `https://www.parivar.restaurant`
  - `https://parivar-restaurant-gamma.vercel.app`
  - `http://localhost:5173`

---

## 3. SEO Architecture

### Rendering Pipeline & Meta Tag Injection
1. **Server-Side Rendering (SSR):** TanStack Start runs on server entry (`src/server.ts`) which wraps `@tanstack/react-start/server-entry`. During server requests, route loaders execute server-side, pre-populating data before rendering HTML.
2. **Head Management:** TanStack Router `head()` functions on route definitions generate `<title>`, `<meta>`, `<link>`, and `<script type="application/ld+json">` elements directly into the SSR DOM stream inside `<head><HeadContent /></head>` (`src/routes/__root.tsx:158`).
3. **Route Structure:** File-based routing under `src/routes/` generates the typed route tree `src/routeTree.gen.ts`.
4. **Hydration:** Client hydrates using React 19 without layout shifts or client-side meta flickering.
5. **Security & Header Injection:** `src/server.ts` and `vercel.json` apply security headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and strict `Content-Security-Policy`).

---

## 4. Route Inventory

Total Routes Inspected: **21 routes** (5 customer-facing root pages, 8 dynamic menu category states, 2 transactional checkout/tracking pages, 1 admin layout, and 11 admin management sub-routes).

| Route | Route Type | File Location | SSR | Indexable | Robots Directive | Canonical URL | Sitemap Included | Structured Data |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Page (Home) | `src/routes/index.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com` | **Yes** (1.0) | `Restaurant`, `FAQPage`, `WebSite` |
| `/menu` | Page (Catalog) | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu` | **Yes** (0.9) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Naan%20Bread` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Naan%20Bread` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Savory%20Items` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Savory%20Items` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Chicken%20Curries` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Chicken%20Curries` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Mutton%20Curries` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Mutton%20Curries` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Vegetarian%20Curries`| Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Vegetarian%20Curries` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Desi%20Chinese` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Desi%20Chinese` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Desserts` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Desserts` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/menu?category=Drinks` | Filter State | `src/routes/menu.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/menu?category=Drinks` | **Yes** (0.8) | `ItemList`, `BreadcrumbList` |
| `/catering` | Page (Services) | `src/routes/catering.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/catering` | **Yes** (0.9) | `FoodService`, `BreadcrumbList` |
| `/privacy-policy` | Legal Page | `src/routes/privacy-policy.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/privacy-policy` | **Yes** (0.3) | `BreadcrumbList` |
| `/terms` | Legal Page | `src/routes/terms.tsx` | Yes | **Yes** | `index, follow` (default) | `https://parivar-restaurant.com/terms` | **Yes** (0.3) | `BreadcrumbList` |
| `/checkout` | Transactional | `src/routes/checkout.tsx` | Yes | **No** | `noindex, nofollow` | *None* | **No** (Disallowed) | *None* |
| `/order-tracking/$orderId` | Dynamic Tracking| `src/routes/order-tracking.$orderId.tsx` | Yes | **No** | `noindex, nofollow` | *None* | **No** (Disallowed) | *None* |
| `/admin` | Layout Portal | `src/routes/admin.tsx` | Yes | **No** | `noindex, nofollow` | *None* | **No** (Disallowed) | *None* |
| `/admin/login` | Admin Auth | `src/routes/admin/login.tsx` | Yes | **No** | `noindex, nofollow` | *None* | **No** (Disallowed) | *None* |
| `/admin/*` (10 sub-routes) | Operations | `src/routes/admin/*.tsx` | Yes | **No** | `noindex, nofollow` | *None* | **No** (Disallowed) | *None* |

---

## 5. Global SEO Configuration

Configured in `src/routes/__root.tsx:77-147`.

### Site Identity
* **Website Name:** `Parivar Restaurant`
* **Brand Tagline:** `Timeless Indian Flavours in Sydney`
* **Default Page Title:** `Parivar Restaurant`
* **Author:** `Parivar Restaurant`
* **Canonical Domain:** `https://parivar-restaurant.com`
* **Default Language:** `en` (`<html lang="en">` in `src/routes/__root.tsx:156`)
* **Theme Color:** `#042416` (Nizami royal deep forest green)

### Global Fallback Meta Properties
```typescript
// Source: src/routes/__root.tsx:79-108
meta: [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "Parivar Restaurant" },
  {
    name: "description",
    content: "Authentic Hyderabadi fine dining in Sydney - biryani, kebabs, and royal Nizami heritage served as family.",
  },
  { name: "author", content: "Parivar Restaurant" },
  { property: "og:title", content: "Parivar Restaurant" },
  {
    property: "og:description",
    content: "Authentic Hyderabadi fine dining in Sydney - biryani, kebabs, and royal Nizami heritage served as family.",
  },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "Parivar Restaurant" },
  { property: "og:url", content: "https://parivar-restaurant.com" },
  { property: "og:image", content: "https://parivar-restaurant.com/parivar-logo.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Parivar Restaurant" },
  {
    name: "twitter:description",
    content: "Authentic Hyderabadi fine dining in Sydney - biryani, kebabs, and royal Nizami heritage served as family.",
  },
  { name: "theme-color", content: "#042416" },
  { name: "twitter:image", content: "https://parivar-restaurant.com/parivar-logo.png" },
]
```

### Global Linked Resources
* **Web App Manifest:** `/manifest.json` (`src/routes/__root.tsx:112`)
* **Apple Touch Icon:** `/apple-touch-icon.png` (`sizes="180x180"`)
* **PWA Android Icon:** `/icon-192.png` (`sizes="192x192"`)
* **Favicon:** `/favicon.ico`
* **Font Preconnects:**
  - `https://fonts.googleapis.com`
  - `https://fonts.gstatic.com` (`crossOrigin="anonymous"`)
  - Stylesheet: Google Fonts `Cormorant Garamond` (display) and `Inter` (sans)

---

## 6. Page-by-Page SEO

---

### Page: Homepage (`/`)
* **Source File:** `src/routes/index.tsx`
* **Route Path:** `/`
* **Status:** `IMPLEMENTED`

#### Metadata
* **SEO Title:** `Parivar Restaurant - Timeless Indian Flavours in Sydney`
* **Meta Description:** `Parivar Restaurant brings authentic Hyderabadi fine dining to Sydney - biryani, kebabs, and royal Nizami heritage served as family.`
* **Canonical URL:** `https://parivar-restaurant.com`
* **Robots Directive:** `index, follow` (default)
* **Theme Color:** `#042416` (inherited from root)

#### Open Graph
* `og:title`: `Parivar Restaurant - Timeless Indian Flavours in Sydney`
* `og:description`: `Authentic Hyderabadi luxury dining in Sydney. Dine in, take away, or book catering.`
* `og:url`: `https://parivar-restaurant.com`
* `og:type`: `website` (inherited)
* `og:image`: `https://parivar-restaurant.com/parivar-logo.png`
* `og:site_name`: `Parivar Restaurant` (inherited)

#### Twitter / X
* `twitter:card`: `summary_large_image`
* `twitter:title`: `Parivar Restaurant - Timeless Indian Flavours in Sydney`
* `twitter:description`: `Authentic Hyderabadi luxury dining in Sydney. Dine in, take away, or book catering.`
* `twitter:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Heading Structure
* **H1:** `PARIVAR` (`src/components/Hero.tsx:81-84`)
* **H2 Structure:**
  - `A Royal Spread` (`src/components/Categories.tsx:25`)
  - `The Chef's Table` (`src/components/SignatureDishes.tsx:38-40`)
  - `A Family. A Heritage. A Feast.` (`src/components/About.tsx:33-37`)
  - `Bring Parivar to Your Table` (`src/components/Catering.tsx:70-72`)
  - `From Our Parivar` (`src/components/Testimonials.tsx:30-32`)
  - `Everything You Need to Know` (`src/components/FAQ.tsx:55-57`)
* **H3 Structure:** Category titles, dish names, event types, testimonial names, FAQ questions.

#### Structured Data (JSON-LD)
Three distinct schemas in `src/routes/index.tsx:45-150`:
1. `Schema.org/Restaurant` (with full NAP, GeoCoordinates, OpeningHours, Halal cuisine tags, sameAs authority links, AggregateRating 5.0/5, and 3 customer Reviews).
2. `Schema.org/FAQPage` (dynamic mainEntity from `faqData`).
3. `Schema.org/WebSite` (with `#website` ID and `SearchAction` deep-link into menu categories).

---

### Page: Menu Catalog (`/menu`)
* **Source File:** `src/routes/menu.tsx`
* **Route Path:** `/menu` (and dynamic query `?category={cat}`)
* **Status:** `IMPLEMENTED`

#### Metadata Generation Logic
Dynamic based on `search.category` (defaults to `"Entrée"`):
* **SEO Title:** `{Category} Menu - Parivar Restaurant Sydney`
  - *Default:* `Entrée Menu - Parivar Restaurant Sydney`
* **Meta Description:** `Explore our authentic {Category} selection at Parivar Restaurant in Wiley Park, Sydney. 100% Halal certified, crafted with royal Nizami spices, open until 3:00 AM.`
* **Canonical URL Logic:**
  ```typescript
  const canonicalUrl = `https://parivar-restaurant.com/menu${
    activeCat !== "Entrée" ? `?category=${encodeURIComponent(activeCat)}` : ""
  }`;
  ```
* **Robots Directive:** `index, follow` (default)

#### Open Graph
* `og:title`: `{Category} Menu - Parivar Restaurant Sydney`
* `og:description`: `Explore authentic {Category} at Parivar Restaurant in Sydney. Delicious biryani, curries, and tandoori served fresh until 3:00 AM.`
* `og:url`: `canonicalUrl`
* `og:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Twitter / X
* Inherits from `src/routes/__root.tsx` (card: `summary_large_image`, image: `/parivar-logo.png`).

#### Heading Structure
* **H1:** `{Category} Menu` (Visual menu header with breadcrumb navigation)
* **H2 / H3:** Dish item names (`Tandoori Chicken`, `Butter Chicken`, `Garlic Naan`, etc.)

#### Structured Data (JSON-LD)
1. `Schema.org/ItemList`: Contains all category items as `ListItem` entries containing `MenuItem` with AUD `Offer` specifications.
2. `Schema.org/BreadcrumbList`:
   - Position 1: `Home` (`https://parivar-restaurant.com/`)
   - Position 2: `Menu` (`https://parivar-restaurant.com/menu`)
   - Position 3: `{Category}` (`canonicalUrl`)

---

### Page: Catering & Events (`/catering`)
* **Source File:** `src/routes/catering.tsx`
* **Route Path:** `/catering`
* **Status:** `IMPLEMENTED`

#### Metadata
* **SEO Title:** `Royal Indian & Halal Catering Sydney - Parivar Restaurant`
* **Meta Description:** `Award-winning Halal Indian & Mughlai catering in Sydney. Authentic Hyderabadi Dum Biryani, live tandoor grills, and bespoke banquets for weddings, corporate events, and parties.`
* **Canonical URL:** `https://parivar-restaurant.com/catering`
* **Robots Directive:** `index, follow` (default)

#### Open Graph
* `og:title`: `Royal Indian & Halal Catering Sydney - Parivar Restaurant`
* `og:description`: `Experience royal Nizami banquets crafted for your special day. Authentic slow-cooked biryani, kebabs, and dessert spreads across Greater Sydney.`
* `og:url`: `https://parivar-restaurant.com/catering`
* `og:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Twitter / X
* `twitter:card`: `summary_large_image`
* `twitter:title`: `Royal Indian & Halal Catering Sydney - Parivar Restaurant`
* `twitter:description`: `Award-winning Halal Indian & Mughlai catering in Sydney. Live tandoor, authentic dum biryani, and dessert buffets.`
* `twitter:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Heading Structure
* **H1:** `Royal Feasts for Grand Occasions` (`src/routes/catering.tsx:140-142`)
* **H2 Structure:**
  - `Bespoke Catering` / `Bring Parivar to Your Table`
* **H3 Structure:** Event categories (`Weddings`, `Corporate Events`, `Family Gatherings`, `Community Events`).

#### Structured Data (JSON-LD)
1. `Schema.org/FoodService`:
   - `name`: `Parivar Royal Indian Catering Sydney`
   - `serviceType`: `Catering Service`
   - `provider`: References `https://parivar-restaurant.com/#restaurant`
   - `areaServed`: `Greater Sydney, New South Wales`
   - `hasOfferCatalog`: Lists 3 packages (`Royal Wedding Banquet`, `Corporate Event Hospitality`, `Family & Community Gatherings`).
2. `Schema.org/BreadcrumbList`:
   - Position 1: `Home` (`https://parivar-restaurant.com/`)
   - Position 2: `Catering` (`https://parivar-restaurant.com/catering`)

---

### Page: Privacy Policy (`/privacy-policy`)
* **Source File:** `src/routes/privacy-policy.tsx`
* **Route Path:** `/privacy-policy`
* **Status:** `IMPLEMENTED`

#### Metadata
* **SEO Title:** `Privacy Policy - Parivar Restaurant`
* **Meta Description:** `Privacy Policy for Parivar Restaurant in Wiley Park, Sydney. Learn how we handle and protect customer contact, ordering, and payment information.`
* **Canonical URL:** `https://parivar-restaurant.com/privacy-policy`
* **Robots Directive:** `index, follow` (default)

#### Open Graph & Twitter / X
* `og:title`: `Privacy Policy - Parivar Restaurant`
* `og:description`: `Learn how Parivar Restaurant protects your personal information.`
* `og:url`: `https://parivar-restaurant.com/privacy-policy`
* `og:image`: `https://parivar-restaurant.com/parivar-logo.png`
* `twitter:card`: `summary_large_image`
* `twitter:title`: `Privacy Policy - Parivar Restaurant`
* `twitter:description`: `Learn how Parivar Restaurant protects your personal information.`
* `twitter:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Heading Structure
* **H1:** `Privacy Policy` (`src/routes/privacy-policy.tsx:74`)
* **H2 Structure:** `1. Information We Collect`, `2. How We Use Your Information`, `3. Payment Information & Security`, `4. Contact Us`.

#### Structured Data (JSON-LD)
* `Schema.org/BreadcrumbList`:
  - Position 1: `Home` (`https://parivar-restaurant.com/`)
  - Position 2: `Privacy Policy` (`https://parivar-restaurant.com/privacy-policy`)

---

### Page: Terms of Service (`/terms`)
* **Source File:** `src/routes/terms.tsx`
* **Route Path:** `/terms`
* **Status:** `IMPLEMENTED`

#### Metadata
* **SEO Title:** `Terms of Service - Parivar Restaurant`
* **Meta Description:** `Terms and Conditions of Service for Parivar Restaurant. Information regarding pricing, orders, takeaway, dining, and catering policies in Wiley Park, Sydney.`
* **Canonical URL:** `https://parivar-restaurant.com/terms`
* **Robots Directive:** `index, follow` (default)

#### Open Graph & Twitter / X
* `og:title`: `Terms of Service - Parivar Restaurant`
* `og:description`: `Terms and conditions for dining, online ordering, and catering at Parivar Restaurant.`
* `og:url`: `https://parivar-restaurant.com/terms`
* `og:image`: `https://parivar-restaurant.com/parivar-logo.png`
* `twitter:card`: `summary_large_image`
* `twitter:title`: `Terms of Service - Parivar Restaurant`
* `twitter:description`: `Terms and conditions for dining, online ordering, and catering at Parivar Restaurant.`
* `twitter:image`: `https://parivar-restaurant.com/parivar-logo.png`

#### Heading Structure
* **H1:** `Terms of Service` (`src/routes/terms.tsx:74`)
* **H2 Structure:** `1. Ordering & Pricing`, `2. 100% Halal Guarantee`, `3. Cancellations & Refunds`, `4. Operating Hours & Service`.

#### Structured Data (JSON-LD)
* `Schema.org/BreadcrumbList`:
  - Position 1: `Home` (`https://parivar-restaurant.com/`)
  - Position 2: `Terms of Service` (`https://parivar-restaurant.com/terms`)

---

### Transactional & Non-Indexable Routes

#### `/checkout`
* **Source File:** `src/routes/checkout.tsx:11-19`
* **SEO Title:** `Checkout | Parivar Restaurant`
* **Meta Description:** `Complete your order at Parivar Restaurant.`
* **Robots Directive:** `noindex, nofollow`
* **Canonical URL:** *None* (Intentionally omitted)
* **Structured Data:** *None*

#### `/order-tracking/$orderId`
* **Source File:** `src/routes/order-tracking.$orderId.tsx:12-20`
* **SEO Title:** `Track Order | Parivar Restaurant`
* **Meta Description:** `Track the status of your Parivar Restaurant order.`
* **Robots Directive:** `noindex, nofollow`
* **Canonical URL:** *None* (Intentionally omitted)
* **Structured Data:** *None*

#### `/admin` (Layout) & `/admin/*` Sub-Routes
* **Source File:** `src/routes/admin.tsx:9-15`
* **SEO Title:** `Parivar OS - Administration` (child `/admin/login`: `Sign In - Parivar OS`)
* **Robots Directive:** `noindex, nofollow`
* **Canonical URL:** *None* (Intentionally omitted)
* **Structured Data:** *None*

---

## 7. Title Tags

| Route | Exact Title Tag | Character Count | Source Location |
| :--- | :--- | :--- | :--- |
| Global Fallback | `Parivar Restaurant` | 18 | `src/routes/__root.tsx:82` |
| `/` | `Parivar Restaurant - Timeless Indian Flavours in Sydney` | 55 | `src/routes/index.tsx:18` |
| `/menu` (Default) | `Entrée Menu - Parivar Restaurant Sydney` | 39 | `src/routes/menu.tsx:335` |
| `/menu?category={Cat}` | `{Category} Menu - Parivar Restaurant Sydney` | 35–48 | `src/routes/menu.tsx:335` |
| `/catering` | `Royal Indian & Halal Catering Sydney - Parivar Restaurant` | 56 | `src/routes/catering.tsx:11` |
| `/privacy-policy` | `Privacy Policy - Parivar Restaurant` | 35 | `src/routes/privacy-policy.tsx:8` |
| `/terms` | `Terms of Service - Parivar Restaurant` | 37 | `src/routes/terms.tsx:8` |
| `/checkout` | `Checkout \| Parivar Restaurant` | 30 | `src/routes/checkout.tsx:14` |
| `/order-tracking/*` | `Track Order \| Parivar Restaurant` | 33 | `src/routes/order-tracking.$orderId.tsx:15` |
| `/admin` | `Parivar OS - Administration` | 27 | `src/routes/admin.tsx:12` |
| `/admin/login` | `Sign In - Parivar OS` | 20 | `src/routes/admin/login.tsx:10` |

---

## 8. Meta Descriptions

| Route | Exact Meta Description | Character Count | Source Location |
| :--- | :--- | :--- | :--- |
| Global Fallback | `Authentic Hyderabadi fine dining in Sydney - biryani, kebabs, and royal Nizami heritage served as family.` | 104 | `src/routes/__root.tsx:84-87` |
| `/` | `Parivar Restaurant brings authentic Hyderabadi fine dining to Sydney - biryani, kebabs, and royal Nizami heritage served as family.` | 132 | `src/routes/index.tsx:20-23` |
| `/menu` | `Explore our authentic {Category} selection at Parivar Restaurant in Wiley Park, Sydney. 100% Halal certified, crafted with royal Nizami spices, open until 3:00 AM.` | 165 | `src/routes/menu.tsx:337-339` |
| `/catering` | `Award-winning Halal Indian & Mughlai catering in Sydney. Authentic Hyderabadi Dum Biryani, live tandoor grills, and bespoke banquets for weddings, corporate events, and parties.` | 179 | `src/routes/catering.tsx:13-16` |
| `/privacy-policy` | `Privacy Policy for Parivar Restaurant in Wiley Park, Sydney. Learn how we handle and protect customer contact, ordering, and payment information.` | 145 | `src/routes/privacy-policy.tsx:10-13` |
| `/terms` | `Terms and Conditions of Service for Parivar Restaurant. Information regarding pricing, orders, takeaway, dining, and catering policies in Wiley Park, Sydney.` | 158 | `src/routes/terms.tsx:10-13` |
| `/checkout` | `Complete your order at Parivar Restaurant.` | 43 | `src/routes/checkout.tsx:15` |
| `/order-tracking/*` | `Track the status of your Parivar Restaurant order.` | 51 | `src/routes/order-tracking.$orderId.tsx:16` |

---

## 9. Canonical URLs

### Canonical Configuration Strategy
* **Implementation Mode:** Self-referencing absolute URLs matching the canonical production domain (`https://parivar-restaurant.com`).
* **Trailing Slash Handling:** Standardized without trailing slash on sub-paths (`/menu`, `/catering`, `/privacy-policy`, `/terms`). Root domain includes trailing slash in sitemap (`https://parivar-restaurant.com/`) and naked domain in route (`https://parivar-restaurant.com`).
* **Query Parameter Policy:** Category search parameter is officially retained for indexable category states (`/menu?category=Chicken%20Curries`), matching sitemap URLs exactly.
* **Non-Indexable Routes:** Deliberately omit canonical tags to prevent duplicate indexing signals on noindex pages (`/checkout`, `/order-tracking`, `/admin`).

| Route / State | Canonical URL | Source File & Line |
| :--- | :--- | :--- |
| `/` | `https://parivar-restaurant.com` | `src/routes/index.tsx:42` |
| `/menu` (Default) | `https://parivar-restaurant.com/menu` | `src/routes/menu.tsx:332,351` |
| `/menu?category={Cat}` | `https://parivar-restaurant.com/menu?category={Cat}` | `src/routes/menu.tsx:332,351` |
| `/catering` | `https://parivar-restaurant.com/catering` | `src/routes/catering.tsx:37` |
| `/privacy-policy` | `https://parivar-restaurant.com/privacy-policy` | `src/routes/privacy-policy.tsx:32` |
| `/terms` | `https://parivar-restaurant.com/terms` | `src/routes/terms.tsx:32` |

---

## 10. Robots / Indexing Controls

### Indexing Matrix
1. **Public Crawlable Pages:** Allow indexing by omitting `noindex`. They receive standard search engine crawlability (`index, follow`).
2. **Private Transactional Pages (`/checkout`, `/order-tracking/$orderId`):** Explicitly inject `<meta name="robots" content="noindex, nofollow" />`.
3. **Internal Operational Portal (`/admin`, `/admin/*`):** Explicitly inject `<meta name="robots" content="noindex, nofollow" />`.
4. **Header Directives:** Controlled via `public/robots.txt` and `src/server.ts` security response headers.

---

## 11. robots.txt

* **File Location:** `public/robots.txt`
* **File Type:** Static text file served directly at `/robots.txt`
* **Status:** `IMPLEMENTED`

### Actual Content
```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

# AI Crawlers - Explicit allowances for search & generative answer discovery
User-agent: GPTBot
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: ChatGPT-User
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: ClaudeBot
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: PerplexityBot
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: CCBot
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: Google-Extended
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

User-agent: Applebot-Extended
Allow: /
Disallow: /admin
Disallow: /checkout
Disallow: /order-tracking

Sitemap: https://parivar-restaurant.com/sitemap.xml
```

---

## 12. Sitemap

* **File Location:** `public/sitemap.xml`
* **File Type:** Static XML sitemap with Google Image Sitemap extensions
* **Sitemap URL:** `https://parivar-restaurant.com/sitemap.xml`
* **Status:** `IMPLEMENTED`
* **Total URLs:** 13 unique canonical destinations

### Sitemap Entries

| # | URL | Priority | Changefreq | Lastmod | Image Attachments |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `https://parivar-restaurant.com/` | 1.0 | `weekly` | `2026-09-17` | `parivar-logo.png` |
| 2 | `https://parivar-restaurant.com/menu` | 0.9 | `daily` | `2026-09-17` | `butter chicken.png`, `chicken tikka.png` |
| 3 | `https://parivar-restaurant.com/catering` | 0.9 | `weekly` | `2026-09-17` | `parivar-logo.png` |
| 4 | `https://parivar-restaurant.com/privacy-policy` | 0.3 | `monthly` | `2026-09-17` | *None* |
| 5 | `https://parivar-restaurant.com/terms` | 0.3 | `monthly` | `2026-09-17` | *None* |
| 6 | `https://parivar-restaurant.com/menu?category=Naan%20Bread` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 7 | `https://parivar-restaurant.com/menu?category=Savory%20Items` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 8 | `https://parivar-restaurant.com/menu?category=Chicken%20Curries` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 9 | `https://parivar-restaurant.com/menu?category=Mutton%20Curries` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 10 | `https://parivar-restaurant.com/menu?category=Vegetarian%20Curries` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 11 | `https://parivar-restaurant.com/menu?category=Desi%20Chinese` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 12 | `https://parivar-restaurant.com/menu?category=Desserts` | 0.8 | `weekly` | `2026-09-17` | *None* |
| 13 | `https://parivar-restaurant.com/menu?category=Drinks` | 0.8 | `weekly` | `2026-09-17` | *None* |

---

## 13. Open Graph

Global defaults in `src/routes/__root.tsx:89-98`, overridden on specific routes.

| Open Graph Property | Global Default (`__root.tsx`) | Homepage (`/`) | Menu (`/menu`) | Catering (`/catering`) |
| :--- | :--- | :--- | :--- | :--- |
| `og:title` | `Parivar Restaurant` | `Parivar Restaurant - Timeless Indian Flavours in Sydney` | `{Category} Menu - Parivar Restaurant Sydney` | `Royal Indian & Halal Catering Sydney - Parivar Restaurant` |
| `og:description` | `Authentic Hyderabadi fine dining in Sydney - biryani, kebabs, and royal Nizami heritage served as family.` | `Authentic Hyderabadi luxury dining in Sydney. Dine in, take away, or book catering.` | `Explore authentic {Category} at Parivar Restaurant in Sydney. Delicious biryani, curries, and tandoori served fresh until 3:00 AM.` | `Experience royal Nizami banquets crafted for your special day. Authentic slow-cooked biryani, kebabs, and dessert spreads across Greater Sydney.` |
| `og:type` | `website` | *(Inherited)* | *(Inherited)* | *(Inherited)* |
| `og:site_name` | `Parivar Restaurant` | *(Inherited)* | *(Inherited)* | *(Inherited)* |
| `og:url` | `https://parivar-restaurant.com` | `https://parivar-restaurant.com` | Dynamic `canonicalUrl` | `https://parivar-restaurant.com/catering` |
| `og:image` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` |

---

## 14. Twitter / X Metadata

| Twitter Property | Global Default (`__root.tsx`) | Homepage (`/`) | Catering (`/catering`) | Legal Pages (`/privacy-policy`, `/terms`) |
| :--- | :--- | :--- | :--- | :--- |
| `twitter:card` | `summary_large_image` | `summary_large_image` | `summary_large_image` | `summary_large_image` |
| `twitter:title` | `Parivar Restaurant` | `Parivar Restaurant - Timeless Indian Flavours in Sydney` | `Royal Indian & Halal Catering Sydney - Parivar Restaurant` | `{Page Title} - Parivar Restaurant` |
| `twitter:description`| `Authentic Hyderabadi fine dining in Sydney...` | `Authentic Hyderabadi luxury dining in Sydney. Dine in, take away, or book catering.` | `Award-winning Halal Indian & Mughlai catering in Sydney. Live tandoor, authentic dum biryani, and dessert buffets.` | `Learn how Parivar Restaurant protects your personal information.` / `Terms and conditions for dining...` |
| `twitter:image` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` | `https://parivar-restaurant.com/parivar-logo.png` |

---

## 15. Image SEO

### Image Asset Optimization
1. **Homepage Hero Video & Poster:**
   - Poster: `src/assets/hero-restaurant.jpg`
   - Attributes: `width={1920} height={1080} playsInline autoPlay loop muted` (`src/components/Hero.tsx:26-27`).
2. **Category Cards (`src/components/Categories.tsx:47-54`):**
   - Alt attributes match category names (`alt={cat.name}`).
   - `loading="lazy"` enabled for offscreen category previews.
   - Served from `public/menu-images/` directory.
3. **Signature Dishes (`src/components/SignatureDishes.tsx:55-60`):**
   - Explicit dimensions: `width={1024} height={1280}`.
   - `loading="lazy"` enabled.
   - Descriptive alt text: `alt={dish.name}` (`Hyderabadi Dum Biryani`, `Royal Haleem`, `Shahi Mixed Grill`).
4. **Decorative Assets:**
   - Centered watermark background silenced for assistive technologies and web crawlers using `aria-hidden="true"` (`src/components/Footer.tsx:11-12`).
5. **XML Image Sitemap:**
   - Attached images in `public/sitemap.xml` include `<image:loc>`, `<image:title>`, and `<image:caption>`.

---

## 16. Structured Data / JSON-LD

Every structured data block is injected via TanStack Router route scripts (`type: "application/ld+json"`).

### 1. Restaurant Schema (`src/routes/index.tsx:48-115`)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Parivar Restaurant",
  "image": "https://parivar-restaurant.com/parivar-logo.png",
  "@id": "https://parivar-restaurant.com/#restaurant",
  "url": "https://parivar-restaurant.com",
  "telephone": "+61 405 635 423",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1/83 King Georges Rd",
    "addressLocality": "Wiley Park",
    "addressRegion": "NSW",
    "postalCode": "2195",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.9189,
    "longitude": 151.0667
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "15:00",
      "closes": "03:00"
    }
  ],
  "servesCuisine": ["Indian", "Hyderabadi", "Halal"],
  "priceRange": "$$",
  "hasMenu": "https://parivar-restaurant.com/menu",
  "acceptsReservations": true,
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, EFTPOS",
  "sameAs": [
    "https://www.instagram.com/parivar.restaurantnsw/",
    "https://www.facebook.com/people/Parivar-Restaurant/61565578144081/",
    "https://www.wikidata.org/wiki/Q1140924",
    "https://www.wikidata.org/wiki/Q2724036"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Hera Hafeez" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Mashallah Halal food!! Amazing food - fantastic!! We ordered chicken tandoori, biryani, seekh kebab and naan. The owner Saeed gave us free complimentary dessert!!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ibrahim Charniya" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Excellent Food & Good Service! Parivar is one of the best food places in the Wiley Park area. If you are looking for authenticity, rich flavours and high quality meals this is the place to go."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jameel Ahmed" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Had Hyderabadi Haleem, it was too delicious. Loved Mango Lassi. And the Rasmalai was just awesome, I highly recommend this restaurant. Most important thing it is HALAL, and it is opened till midnight. The BEST HYDERABADI FOOD I have ever had in Australia."
    }
  ]
}
```

### 2. FAQPage Schema (`src/routes/index.tsx:118-131`)
Generated dynamically from `faqData` in `src/components/FAQ.tsx`. Contains 6 questions and answers.

### 3. WebSite Schema with SearchAction (`src/routes/index.tsx:134-149`)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://parivar-restaurant.com/#website",
  "name": "Parivar Restaurant",
  "url": "https://parivar-restaurant.com",
  "publisher": {
    "@id": "https://parivar-restaurant.com/#restaurant"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://parivar-restaurant.com/menu?category={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4. FoodService Catering Schema (`src/routes/catering.tsx:43-89`)
```json
{
  "@context": "https://schema.org",
  "@type": "FoodService",
  "name": "Parivar Royal Indian Catering Sydney",
  "serviceType": "Catering Service",
  "provider": {
    "@type": "Restaurant",
    "@id": "https://parivar-restaurant.com/#restaurant",
    "name": "Parivar Restaurant",
    "telephone": "+61 405 635 423",
    "url": "https://parivar-restaurant.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1/83 King Georges Rd",
      "addressLocality": "Wiley Park",
      "addressRegion": "NSW",
      "postalCode": "2195",
      "addressCountry": "AU"
    }
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Greater Sydney, New South Wales"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Parivar Catering Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Royal Wedding Banquet",
        "description": "Full-service multi-course Nizami feast with live tandoor stations, royal dum biryani, curries, and dessert banquets."
      },
      {
        "@type": "Offer",
        "name": "Corporate Event Hospitality",
        "description": "Premium Indian buffets and individual executive lunch boxes for galas, conferences, and boardrooms."
      },
      {
        "@type": "Offer",
        "name": "Family & Community Gatherings",
        "description": "Sealed dum biryani handis, tandoori starters, and accompaniment spreads for celebrations of 20 to 500+ guests."
      }
    ]
  }
}
```

### 5. ItemList & MenuItem Schema (`src/routes/menu.tsx:356-379`)
Emits a dynamic `ItemList` containing `ListItem` entries for every dish in the active category, each with a Schema.org `MenuItem` and AUD `Offer` (`availability: "https://schema.org/InStock"`).

### 6. BreadcrumbList Schemas
- `/menu` (`src/routes/menu.tsx:382-406`): 3 levels (Home > Menu > Category)
- `/catering` (`src/routes/catering.tsx:92-110`): 2 levels (Home > Catering)
- `/privacy-policy` (`src/routes/privacy-policy.tsx:37-56`): 2 levels (Home > Privacy Policy)
- `/terms` (`src/routes/terms.tsx:37-56`): 2 levels (Home > Terms of Service)

---

## 17. Schema Inventory

| Schema Type | Entity ID (`@id`) | Route Injected | Generation Method | Properties Implemented |
| :--- | :--- | :--- | :--- | :--- |
| `Restaurant` | `https://parivar-restaurant.com/#restaurant` | `/` | Static JSON-LD | name, image, url, telephone, address, geo, openingHoursSpecification, servesCuisine, priceRange, hasMenu, acceptsReservations, currenciesAccepted, paymentAccepted, sameAs, aggregateRating, review |
| `FAQPage` | *None* | `/` | Dynamic JSON-LD (mapped from `faqData`) | mainEntity (`Question`, `acceptedAnswer`) |
| `WebSite` | `https://parivar-restaurant.com/#website` | `/` | Static JSON-LD | name, url, publisher, potentialAction (`SearchAction`) |
| `FoodService` | *None* | `/catering` | Static JSON-LD | name, serviceType, provider (`#restaurant`), areaServed, hasOfferCatalog (`OfferCatalog`, `Offer`) |
| `ItemList` | *None* | `/menu` | Dynamic JSON-LD (from loader data) | name, description, numberOfItems, itemListElement (`ListItem`, `MenuItem`, `Offer`) |
| `BreadcrumbList` | *None* | `/menu` | Dynamic JSON-LD (from active category) | itemListElement (`ListItem`, position, name, item) |
| `BreadcrumbList` | *None* | `/catering` | Static JSON-LD | itemListElement (`ListItem`, position, name, item) |
| `BreadcrumbList` | *None* | `/privacy-policy` | Static JSON-LD | itemListElement (`ListItem`, position, name, item) |
| `BreadcrumbList` | *None* | `/terms` | Static JSON-LD | itemListElement (`ListItem`, position, name, item) |

---

## 18. AEO Implementation

Answer Engine Optimization ensures AI engines (Perplexity, ChatGPT, Gemini, Copilot) can extract direct, authoritative answers to user questions.

### Verified AEO Assets
1. **Interactive FAQ Accordion with SSR pre-rendered content:** `src/components/FAQ.tsx` renders 6 core high-intent Q&As inside `<section id="faq">`.
2. **Identical Machine-Readable Mirror:** `FAQPage` JSON-LD schema mirrors DOM Q&As in `src/routes/index.tsx:118-131`.
3. **Core Answers Catalog:**
   * **Question 1: Halal Status:** "Is Parivar Restaurant 100% Halal certified?"
     - *Answer:* "Yes, Parivar Restaurant is strictly 100% Halal certified. All our meats (chicken, lamb, goat, and beef), ingredients, and traditional preparation methods comply fully with Islamic dietary laws."
   * **Question 2: Operating Hours:** "What are your opening hours in Wiley Park?"
     - *Answer:* "We are open 7 days a week, Monday through Sunday, from 3:00 PM in the afternoon until 3:00 AM late at night. We are proud to be one of Sydney's premier late-night dining destinations."
   * **Question 3: Location & Parking:** "Where is Parivar Restaurant located and what parking is available?"
     - *Answer:* "We are located at 1/83 King Georges Rd, Wiley Park NSW 2195, in South West Sydney. Street parking is available nearby on King Georges Road and adjacent side streets, and we are within walking distance from Wiley Park railway station."
   * **Question 4: Signature Dishes:** "What are your signature Hyderabadi specialties?"
     - *Answer:* "Our most celebrated dishes include authentic slow-cooked Hyderabadi Dum Biryani, royal Hyderabadi Haleem, flame-charred Tandoori Chicken, Sheekh Kebabs, spicy Chicken 65, rich curries, and traditional desserts like Rasmalai and Shahi Tukda."
   * **Question 5: Catering Services:** "Do you offer catering for weddings and corporate events across Sydney?"
     - *Answer:* "Yes, Parivar provides full-service Indian and Mughlai catering for weddings, receptions, corporate galas, and private celebrations across Greater Sydney. Packages include live tandoori grills, dum biryani handis, and dessert banquets."
   * **Question 6: Ordering Options:** "Can I order online for takeaway or dine-in table ordering?"
     - *Answer:* "Yes, our complete menu is available for online ordering directly on our website. You can select takeaway or specify your table number for direct table service with live status tracking."

---

## 19. GEO Implementation

Generative Engine Optimization structures knowledge graphs and entity connections so LLMs cite Parivar as the authoritative entity for relevant queries.

### Grounding & Entity Authority Signals
1. **Wikidata External Authority Links (`sameAs` in `src/routes/index.tsx:86-87`):**
   - Hyderabadi Cuisine: `https://www.wikidata.org/wiki/Q1140924`
   - Biryani: `https://www.wikidata.org/wiki/Q2724036`
2. **NAP Grounding:**
   - Legal Name: `Parivar Restaurant`
   - Exact Address: `1/83 King Georges Rd, Wiley Park NSW 2195, Australia`
   - Geographic Coordinates: Latitude `-33.9189`, Longitude `151.0667`
   - Telephone: `+61 405 635 423`
3. **Cuisine & Dietary Specialization:**
   - Primary Entity Tags: `Indian`, `Hyderabadi`, `Halal`
4. **Verified Social Footprint:**
   - Instagram: `https://www.instagram.com/parivar.restaurantnsw/`
   - Facebook: `https://www.facebook.com/people/Parivar-Restaurant/61565578144081/`
5. **Entity Graph Linkage:**
   - Canonical entity `#restaurant` acts as the root node.
   - `WebSite` links to `#restaurant` as `publisher`.
   - `FoodService` links to `#restaurant` as `provider`.

---

## 20. AI / LLM Discoverability

### Crawler Access Policy (`public/robots.txt`)
Explicit crawler permissions grant indexing access to major AI web crawlers:
* `GPTBot` (OpenAI training/search)
* `ChatGPT-User` (OpenAI browsing)
* `ClaudeBot` (Anthropic Claude search)
* `PerplexityBot` (Perplexity search)
* `CCBot` (Common Crawl foundation datasets)
* `Google-Extended` (Google Gemini training/grounding)
* `Applebot-Extended` (Apple Intelligence)

All AI agents are permitted on `/`, `/menu`, `/catering`, `/privacy-policy`, and `/terms`, while being blocked from internal endpoints (`/admin`, `/checkout`, `/order-tracking`).

---

## 21. llms.txt

* **File Location:** `public/llms.txt`
* **Status:** `IMPLEMENTED`
* **Size:** 2,269 bytes / 40 lines
* **Served At:** `https://parivar-restaurant.com/llms.txt`

### Content Overview
Delivers concise, Markdown-formatted business intelligence:
* Core value proposition: "Authentic Royal Nizami Indian & Mughlai Cuisine in Wiley Park, Sydney. 100% Halal Certified. Open late until 3:00 AM daily."
* Key facts, verified phone, address, and coordinates.
* Operating hours breakdown (Mon–Sun 3:00 PM – 3:00 AM).
* Itemized menu categories with dish names.
* Catering services and contact information.

---

## 22. llms-full.txt

* **Status:** `NOT IMPLEMENTED`
* **Observation:** The project implements `/llms.txt`, but does not have a separate `/llms-full.txt` file containing the complete ingredients, allergen matrix, or full terms.

---

## 23. Hreflang / International SEO

* **Status:** `NOT IMPLEMENTED / NOT APPLICABLE`
* **Explanation:** Parivar Restaurant operates as a single-location establishment in Sydney, Australia. The website is exclusively published in English (`<html lang="en">`). There are no alternative language versions, subdirectories (e.g. `/en-au/`), or alternate locale headers.

---

## 24. Internal Linking

### Primary Navigation Links (`src/components/Navbar.tsx:10-17`)
* `Home`: `/#home`
* `Today's Special`: `/#specials`
* `Menu`: `/#menu` (and standalone `/menu`)
* `Catering`: `/#catering` (and standalone `/catering`)
* `About`: `/#about`
* `Contact`: `/#contact`

### Footer Links (`src/components/Footer.tsx:71-89`)
* `Home` (`/#home`)
* `Menu` (`/menu`)
* `Catering` (`/catering`)
* `About` (`/#about`)
* `Privacy Policy` (`/privacy-policy`)
* `Terms of Service` (`/terms`)

### Breadcrumb Navigation
* Visual and structured breadcrumb bars on `/menu`, `/catering`, `/privacy-policy`, and `/terms`.

### Transactional & Contextual Links
* Homepage Hero CTA buttons: Order Now (jumps to `#menu`), Explore Menu (links to `/menu`).
* Homepage Categories: 9 category cards linking to `/menu?category={Category Name}` (`src/components/Categories.tsx:36-38`).

---

## 25. External / Authority Links

| Destination Platform | Target URL | Location in Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Instagram** | `https://www.instagram.com/parivar.restaurantnsw/` | `src/components/Footer.tsx:52`, `src/routes/index.tsx:84` | Brand verification & social trust |
| **Facebook** | `https://www.facebook.com/people/Parivar-Restaurant/61565578144081/` | `src/components/Footer.tsx:62`, `src/routes/index.tsx:85` | Local business authority & reviews |
| **Wikidata (Hyderabadi Cuisine)** | `https://www.wikidata.org/wiki/Q1140924` | `src/routes/index.tsx:86` | Schema `sameAs` entity grounding |
| **Wikidata (Biryani)** | `https://www.wikidata.org/wiki/Q2724036` | `src/routes/index.tsx:87` | Schema `sameAs` dish entity grounding |

---

## 26. Search Engine Verification & Tag Management

* **Google Tag Manager (GTM):** `IMPLEMENTED`
  - Container ID: `GTM-T482Q4Q4`
  - Implementation:
    - Head Script: Injected via `scripts` in `src/routes/__root.tsx` head config
    - Body Noscript: Injected via `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T482Q4Q4".../></noscript>` in `RootShell` (`src/routes/__root.tsx`)
* **Google Search Console (`google-site-verification`):** Verified via GTM container `GTM-T482Q4Q4` or DNS
* **Bing Webmaster Tools (`msvalidate.01`):** `NOT IMPLEMENTED`
* **Pinterest / Yandex Verification:** `NOT IMPLEMENTED`

---

## 27. Technical SEO Implementation

* **Semantic HTML:** Page layouts use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<blockquote>`, `<figcaption>`, and `<footer>`.
* **Single H1 per Page:**
  - Homepage: `PARIVAR` (`src/components/Hero.tsx:81-84`)
  - Menu: `{Category} Menu` (`src/routes/menu.tsx`)
  - Catering: `Royal Feasts for Grand Occasions` (`src/routes/catering.tsx:140`)
  - Privacy Policy: `Privacy Policy` (`src/routes/privacy-policy.tsx:74`)
  - Terms: `Terms of Service` (`src/routes/terms.tsx:74`)
* **Error Handling & 404 Pages:**
  - Custom `NotFoundComponent` (`src/routes/__root.tsx:17-37`) with status code 404.
  - Custom `ErrorComponent` (`src/routes/__root.tsx:39-75`) for runtime boundary recovery.
* **Performance & Asset Delivery:**
  - PWA Web App Manifest: `public/manifest.json` and `public/site.webmanifest`
  - High-resolution Favicon suite: `public/favicon.ico` (5.8 KB multi-resolution), `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (180x180).
  - Preconnect links for Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`).
  - Cache-Control headers configured in `vercel.json:38-54` for static assets (`max-age=31536000, immutable`).

---

## 28. Content Architecture

```
parivar-restaurant.com/
├── / (Homepage: Hero, Elements, Specials, 9 Menu Categories, Signature Dishes, About, Catering, Testimonials, FAQ, Footer)
├── /menu (Interactive Menu Catalog & Online Ordering with SSR Fallback Data)
│   ├── ?category=Entrée
│   ├── ?category=Naan Bread
│   ├── ?category=Savory Items
│   ├── ?category=Chicken Curries
│   ├── ?category=Mutton Curries
│   ├── ?category=Vegetarian Curries
│   ├── ?category=Desi Chinese
│   ├── ?category=Desserts
│   └── ?category=Drinks
├── /catering (Full-Service Wedding & Corporate Indian Catering, Inquiry Form, Offer Catalog)
├── /privacy-policy (Customer Data Handling, PCI Compliance, Management Contact)
├── /terms (Pricing in AUD, 100% Halal Guarantee, Cancellation Policy, Operating Hours)
├── /checkout (Transactional Cart & Table Order Submission - noindex)
├── /order-tracking/$orderId (Real-time WebSocket & Polling Order Tracker - noindex)
├── /admin (Parivar OS Operational Dashboard - noindex)
│   ├── /login
│   ├── /billing
│   ├── /categories
│   ├── /catering
│   ├── /floor
│   ├── /kitchen
│   ├── /menu
│   ├── /settings
│   ├── /users
│   ├── /addons
│   └── /specials
├── /robots.txt (Crawler Permissions & AI Bot Governance)
├── /sitemap.xml (13 Public Canonical URLs + Google Image Extensions)
└── /llms.txt (Machine-Readable Context for LLM Discoverability)
```

---

## 29. Entity Information

* **Primary Entity:** `Parivar Restaurant`
* **Entity Type:** `Restaurant` / `FoodEstablishment` / `LocalBusiness`
* **Permanent Entity ID:** `https://parivar-restaurant.com/#restaurant`
* **Parent Concept:** Authentic Royal Nizami & Hyderabadi Fine Dining
* **Physical Location:** `1/83 King Georges Rd, Wiley Park NSW 2195, Australia`
* **Jurisdiction / Region:** Canterbury-Bankstown, South West Sydney, New South Wales
* **Coordinates:** `-33.9189, 151.0667`
* **Telephone:** `+61 405 635 423`
* **Price Range:** `$$`
* **Accepted Currencies:** `AUD`
* **Payment Methods:** `Cash, Credit Card, EFTPOS`
* **Dietary Certification:** `100% Halal Certified`
* **Operating Hours:** `Monday through Sunday, 15:00 to 03:00 (3:00 PM – 3:00 AM)`
* **Associated Entities (`sameAs`):**
  - Hyderabadi Cuisine (`Q1140924`)
  - Biryani (`Q2724036`)
  - Instagram Profile (`parivar.restaurantnsw`)
  - Facebook Page (`Parivar-Restaurant`)

---

## 30. Source Map

| Area | Item | Current Value | Source File | Location / Export | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SEO** | Global HTML Language | `en` | `src/routes/__root.tsx` | Line 156 (`<html lang="en">`) | `IMPLEMENTED` |
| **SEO** | Global Default Title | `Parivar Restaurant` | `src/routes/__root.tsx` | Line 82 (`title`) | `IMPLEMENTED` |
| **SEO** | Global Description | `Authentic Hyderabadi fine dining...` | `src/routes/__root.tsx` | Lines 84–87 (`name: "description"`) | `IMPLEMENTED` |
| **SEO** | Global OG Image | `https://parivar-restaurant.com/parivar-logo.png` | `src/routes/__root.tsx` | Line 98 (`property: "og:image"`) | `IMPLEMENTED` |
| **SEO** | Web Manifest Link | `/manifest.json` | `src/routes/__root.tsx` | Lines 111–113 (`rel: "manifest"`) | `IMPLEMENTED` |
| **SEO** | Homepage Title | `Parivar Restaurant - Timeless Indian Flavours in Sydney` | `src/routes/index.tsx` | Line 18 (`title`) | `IMPLEMENTED` |
| **SEO** | Homepage Meta Description | `Parivar Restaurant brings authentic Hyderabadi...` | `src/routes/index.tsx` | Lines 20–23 (`name: "description"`) | `IMPLEMENTED` |
| **SEO** | Homepage Canonical | `https://parivar-restaurant.com` | `src/routes/index.tsx` | Lines 40–43 (`rel: "canonical"`) | `IMPLEMENTED` |
| **GEO** | Restaurant Schema | Schema.org/Restaurant with NAP, Geo, Reviews | `src/routes/index.tsx` | Lines 48–115 (JSON-LD script) | `IMPLEMENTED` |
| **AEO** | FAQPage Schema | Schema.org/FAQPage (6 questions) | `src/routes/index.tsx` | Lines 118–131 (JSON-LD script) | `IMPLEMENTED` |
| **SEO** | WebSite Schema | Schema.org/WebSite with SearchAction | `src/routes/index.tsx` | Lines 134–149 (JSON-LD script) | `IMPLEMENTED` |
| **AEO** | On-Page FAQ Content | 6 FAQ Questions & Answers | `src/components/FAQ.tsx` | Lines 4–35 (`faqData`) | `IMPLEMENTED` |
| **SEO** | Menu Dynamic Title | `{Category} Menu - Parivar Restaurant Sydney` | `src/routes/menu.tsx` | Line 335 (`title`) | `IMPLEMENTED` |
| **SEO** | Menu Dynamic Canonical | `https://parivar-restaurant.com/menu[?category=...]`| `src/routes/menu.tsx` | Lines 332, 350–352 | `IMPLEMENTED` |
| **SEO** | Menu ItemList Schema | Schema.org/ItemList with MenuItems & Offers | `src/routes/menu.tsx` | Lines 356–379 (JSON-LD script) | `IMPLEMENTED` |
| **SEO** | Menu BreadcrumbList | Schema.org/BreadcrumbList (Home > Menu > Cat) | `src/routes/menu.tsx` | Lines 381–406 (JSON-LD script) | `IMPLEMENTED` |
| **SEO** | Catering Title | `Royal Indian & Halal Catering Sydney - Parivar Restaurant` | `src/routes/catering.tsx`| Line 11 (`title`) | `IMPLEMENTED` |
| **SEO** | Catering Meta Description | `Award-winning Halal Indian & Mughlai catering...` | `src/routes/catering.tsx`| Lines 13–16 (`name: "description"`) | `IMPLEMENTED` |
| **SEO** | Catering Canonical | `https://parivar-restaurant.com/catering` | `src/routes/catering.tsx`| Lines 35–38 (`rel: "canonical"`) | `IMPLEMENTED` |
| **GEO** | Catering FoodService Schema | Schema.org/FoodService with OfferCatalog | `src/routes/catering.tsx`| Lines 43–89 (JSON-LD script) | `IMPLEMENTED` |
| **SEO** | Catering BreadcrumbList | Schema.org/BreadcrumbList (Home > Catering) | `src/routes/catering.tsx`| Lines 92–110 (JSON-LD script) | `IMPLEMENTED` |
| **SEO** | Privacy Policy Meta | Title, Description, Canonical | `src/routes/privacy-policy.tsx`| Lines 7–34 | `IMPLEMENTED` |
| **SEO** | Terms of Service Meta | Title, Description, Canonical | `src/routes/terms.tsx` | Lines 7–34 | `IMPLEMENTED` |
| **SEO** | Checkout Noindex | `noindex, nofollow` | `src/routes/checkout.tsx` | Line 16 (`name: "robots"`) | `IMPLEMENTED` |
| **SEO** | Order Tracking Noindex | `noindex, nofollow` | `src/routes/order-tracking.$orderId.tsx` | Line 17 (`name: "robots"`) | `IMPLEMENTED` |
| **SEO** | Admin Layout Noindex | `noindex, nofollow` | `src/routes/admin.tsx` | Line 13 (`name: "robots"`) | `IMPLEMENTED` |
| **SEO** | Admin Login Title & Robots | `Sign In - Parivar OS`, `noindex, nofollow` | `src/routes/admin/login.tsx` | Lines 9–12 (`meta`) | `IMPLEMENTED` |
| **SEO** | Robots Configuration | Full bot directives & AI permissions | `public/robots.txt` | Entire file (51 lines) | `IMPLEMENTED` |
| **SEO** | XML Sitemap | 13 Canonical URLs with Google Images | `public/sitemap.xml` | Entire file (103 lines) | `IMPLEMENTED` |
| **GEO** | Machine-Readable Facts | Structured business Markdown document | `public/llms.txt` | Entire file (40 lines) | `IMPLEMENTED` |
| **PWA** | Web App Manifest | JSON manifest with PWA categories | `public/manifest.json` | Entire file (31 lines) | `IMPLEMENTED` |
| **Analytics** | Google Tag Manager | Container `GTM-T482Q4Q4` (Head script & body noscript) | `src/routes/__root.tsx` | Head scripts & RootShell body | `IMPLEMENTED` |

---

## 31. Editable SEO/AEO/GEO Content

This section isolates the exact editable content for future maintenance. To change any value, locate its implementation path in the codebase and update accordingly.

### 1. Homepage SEO Title & Meta Description
* **Current Title:** `Parivar Restaurant - Timeless Indian Flavours in Sydney`
* **Current Description:** `Parivar Restaurant brings authentic Hyderabadi fine dining to Sydney - biryani, kebabs, and royal Nizami heritage served as family.`
* **Code Location:** `src/routes/index.tsx` (`meta` array in `head()`)

### 2. Catering SEO Title & Meta Description
* **Current Title:** `Royal Indian & Halal Catering Sydney - Parivar Restaurant`
* **Current Description:** `Award-winning Halal Indian & Mughlai catering in Sydney. Authentic Hyderabadi Dum Biryani, live tandoor grills, and bespoke banquets for weddings, corporate events, and parties.`
* **Code Location:** `src/routes/catering.tsx` (`meta` array in `head()`)

### 3. Operating Hours & Address (Schema & Text)
* **Current Operating Hours:** Monday through Sunday, 15:00 to 03:00 (3:00 PM – 3:00 AM)
* **Current Address:** 1/83 King Georges Rd, Wiley Park NSW 2195, Australia
* **Current Phone:** `+61 405 635 423`
* **Code Locations:**
  - `src/routes/index.tsx` (`openingHoursSpecification`, `address`, `telephone`)
  - `src/components/Footer.tsx` (Visible footer text)
  - `src/components/About.tsx` (Body copy)
  - `public/llms.txt` (Markdown facts)

### 4. FAQ Content & Answers (AEO)
* **Source:** `src/components/FAQ.tsx` (`faqData` array)
* **Dependent Schema:** `src/routes/index.tsx` (`FAQPage` JSON-LD automatically pulls from `faqData`)
* *Editing `faqData` in `src/components/FAQ.tsx` simultaneously updates both visible UI accordion and the JSON-LD schema.*

### 5. Robots.txt Directives
* **Source:** `public/robots.txt`
* *Edit this file directly to add new crawler user-agents or change disallowed paths.*

### 6. Sitemap URLs & Priorities
* **Source:** `public/sitemap.xml`
* *Edit this file directly to adjust `<priority>`, `<changefreq>`, or add new static pages.*

### 7. LLM Business Context (`/llms.txt`)
* **Source:** `public/llms.txt`
* *Edit this file directly to update dishes, descriptions, or contact details consumed by AI engines.*

---

## 32. Not Implemented

The following SEO/AEO/GEO features were inspected and confirmed as **NOT IMPLEMENTED**:

1. **`llms-full.txt`**: Standard extended crawler specification is missing (only `public/llms.txt` exists).
2. **Search Engine Verification Meta Tags**:
   - `google-site-verification` (Google Search Console — can now be verified via GTM container `GTM-T482Q4Q4`)
   - `msvalidate.01` (Bing Webmaster Tools)
   - Pinterest / Yandex verification
3. **Analytics / GTM Integration**: Google Tag Manager (`GTM-T482Q4Q4`) is **IMPLEMENTED** in `src/routes/__root.tsx`. GA4 tags can be configured directly inside this GTM container.
4. **Hreflang / Internationalization**: No alternate language declarations or `hreflang` tags exist (English-only single market).
5. **Article / BlogPosting Schema**: No blog, article, or news content system exists.
6. **Dynamic XML Sitemap Generator**: `public/sitemap.xml` is static rather than generated at runtime via Nitro/TanStack endpoint.
7. **Explicit Twitter Metadata on `/menu`**: While `/menu` implements `title`, `description`, and `og:*` tags, it does not declare `twitter:title` or `twitter:description`, falling back to root defaults.

---

## 33. Potential Issues

1. **Missing Twitter Card Metadata on `/menu`:**
   - *Detail:* `src/routes/menu.tsx` specifies `title`, `description`, `og:title`, and `og:description`, but omits `twitter:title` and `twitter:description`. Links shared on Twitter/X fall back to the root layout's default title (`"Parivar Restaurant"`).
2. **Hardcoded `<lastmod>` Dates in Sitemap:**
   - *Detail:* `public/sitemap.xml` contains hardcoded dates (`<lastmod>2026-09-17</lastmod>`). As menu prices or catering packages change in the database, sitemap modification timestamps remain static.
3. **Vercel Static Rewrites vs Nitro SSR:**
   - *Detail:* `vercel.json:5-10` specifies `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`. While Nitro SSR builds to `.vercel/output/functions/__server.func`, having a global rewrite rule in `vercel.json` can cause client-side fallback if not carefully handled by Vercel's build output API.
4. **External DNS Cutover (Non-Codebase Dependency):**
   - *Detail:* As noted in previous verification reports, `parivar-restaurant.com` DNS records resolve externally until pointed to Vercel (`76.76.21.21`), meaning live internet traffic to the canonical domain may not yet reach this codebase.

---

## 34. Update Workflow

Follow this procedure when modifying SEO, AEO, or GEO configurations:

```
Step 1: Identify Content or Configuration to Change
   │
Step 2: Check Source Map (Section 30) for Exact File & Line Number
   │
Step 3: Modify Codebase Implementation
   ├── If changing Page Title / Description -> Update Route `head()` in `src/routes/*.tsx`
   ├── If changing FAQ -> Update `faqData` in `src/components/FAQ.tsx` (auto-updates Schema)
   ├── If changing Operating Hours / Address -> Update `index.tsx`, `Footer.tsx`, and `llms.txt`
   ├── If changing Crawlers -> Update `public/robots.txt`
   └── If adding New Route -> Add route, update `public/sitemap.xml`, and add BreadcrumbList
   │
Step 4: Check Cross-Dependencies
   ├── Changing Domain Name affects: `__root.tsx`, `index.tsx`, `menu.tsx`, `catering.tsx`,
   │   `privacy-policy.tsx`, `terms.tsx`, `robots.txt`, `sitemap.xml`, and `llms.txt`.
   └── Changing Menu Categories affects: `Categories.tsx`, `menu.tsx`, `sitemap.xml`, `llms.txt`.
   │
Step 5: Verify Type Integrity & Build
   └── Run `npm run build` or `npx tsc --noEmit` to ensure no TypeScript or bundling regressions.
   │
Step 6: Update this Documentation File (`seo-aeo-geo-content.md`)
   └── Record the updated values and date in this document.
```

---

## 35. Validation Checklist

Use this checklist to verify production readiness after any change:

- [x] Every public customer route (`/`, `/menu`, `/catering`, `/privacy-policy`, `/terms`) emits a unique `<title>` tag.
- [x] Every public route has a descriptive `<meta name="description">` under 180 characters.
- [x] Every public route emits exactly one self-referencing absolute canonical tag matching `https://parivar-restaurant.com`.
- [x] Private routes (`/checkout`, `/order-tracking/*`, `/admin/*`) emit `<meta name="robots" content="noindex, nofollow">` and zero canonical tags.
- [x] `public/robots.txt` allows standard search bots and explicitly allows AI bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
- [x] `public/robots.txt` blocks `/admin`, `/checkout`, and `/order-tracking`.
- [x] `public/sitemap.xml` contains all 13 canonical URLs and includes valid Google Image tags.
- [x] `public/llms.txt` exists at web root and contains accurate business entity facts.
- [x] Schema.org `Restaurant` JSON-LD is valid, containing verified phone, address, coordinates, hours, ratings, and `sameAs` links.
- [x] Schema.org `FAQPage` JSON-LD is valid and matches visible on-page FAQ accordion.
- [x] Schema.org `WebSite` JSON-LD contains valid `SearchAction`.
- [x] Schema.org `FoodService` JSON-LD exists on `/catering` with valid `OfferCatalog`.
- [x] Schema.org `ItemList` and `MenuItem` schemas are emitted on `/menu`.
- [x] Valid `BreadcrumbList` schemas are present on `/menu`, `/catering`, `/privacy-policy`, and `/terms`.
- [x] All images have meaningful `alt` attributes or are explicitly silenced with `aria-hidden="true"`.
- [x] Single `<h1>` per page with semantic heading hierarchy (`h1` -> `h2` -> `h3`).
- [x] Web app manifest (`manifest.json`) and icon suite (`favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) are properly linked.
- [x] Zero API keys, private passwords, or secrets are exposed in client-side metadata or documentation.
