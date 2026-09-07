# CYDO Demo Sites

One reusable Next.js system that powers three mobile-first customer demos:

- Clinic: /clinic
- Hotel/villa: /hotel
- Restaurant: /restaurant

The root route is an interviewer-facing showcase of the shared architecture and all three demos.

## Run locally

Install dependencies, then start the development server:

    npm install
    npm run dev

Open http://localhost:3000.

## Build

    npm run build
    npm start

The production build statically renders every demo route.

## Deployment setting

Set `NEXT_PUBLIC_SITE_URL` to the deployed public URL (for example,
`https://your-project.vercel.app`). This gives `robots.txt` and `sitemap.xml`
the correct canonical host.

## Architecture

Business data, brand tokens, prices, images, navigation and copy live under config/. The shared site shell, theme toggle, navigation, footer and WhatsApp control are reused across all demos. Domain-specific journeys remain purpose-built:

- Clinic appointment flow
- Hotel availability enquiry
- Restaurant menu/cart/reservation flow

See docs/architecture.md for more detail.

## Key demo features

- Light/dark mode with persisted preference
- Context-aware WhatsApp handoffs
- Print-ready booking confirmations and voucher
- Hotel multi-currency display
- Restaurant menu filtering and cart
- PWA manifest, service worker and offline fallback
- Responsive AVIF/WebP image delivery through Next.js
- Loading, route-error and global-error recovery states

## Honest scope

This is a sales-demo implementation, not a production booking platform. Availability is enquiry-based, forms create local demo references, and payments are intentionally not simulated without official sandbox credentials. Sinhala/Tamil content needs reviewed translations and font QA before it should be presented as complete.

See docs/feature-matrix.md for completed, simplified and deferred capabilities.

## Add another client

See docs/adding-a-client.md.
