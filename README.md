# CYDO Demo Sites — starter scaffold

## What's already working
- Next.js + Tailwind project skeleton
- One live pattern proven end-to-end: `config/clinic.json` → shared components → `app/clinic/page.tsx`
- Components built so far: Hero, TrustSignals, PriceList, BookingForm (with confirmation + reference number), WhatsAppFloat
- Run it: `npm install && npm run dev`, then open `localhost:3000/clinic`

## The rule for every component you add
A component must never contain a business name, a price, or a copy string
directly. It only reads `config.whatever`. If you catch yourself typing
"Sunshine Dental" inside a `.tsx` file outside of `config/clinic.json`,
stop — that content belongs in the config file.

## How to use an AI coding agent (Claude Code) to finish this in 2 days

1. **Install Claude Code** and open it inside this folder (`demo-sites/`).
   It can read your whole repo, run commands, and edit files directly —
   much faster than copy-pasting code from a chat window.

2. **Feed it context first, in one message**, before asking for any feature.
   Paste (or reference) this README and the build brief PDF. Something like:

   > "Read README.md and the build brief. I have a working clinic page
   > using shared components driven by config/clinic.json. I need to
   > replicate this pattern for a hotel and a restaurant site. Don't
   > change the architecture — follow the same config → component pattern."

3. **Work in small, verifiable steps — not one giant prompt.** Agents do
   much better broken into tasks you can check one at a time:
   - "Create `config/hotel.json` with realistic Sri Lankan hotel content:
     rooms, per-night LKR rates, amenities."
   - "Create `app/hotel/page.tsx` using the existing Hero, TrustSignals,
     and PriceList components with the hotel config — don't create new
     components unless a section genuinely doesn't fit the existing ones."
   - "Add a Gallery component that takes an array of image URLs from
     config and displays them in a responsive grid."

   After each step, run `npm run dev` and actually look at the page before
   asking for the next thing. Catching a problem after one small step is
   fast; catching it after ten stacked steps means untangling all of them.

4. **When something looks wrong, describe what you SEE, not what you
   guess is wrong.** "The price list text overflows on mobile at 375px"
   gets a better fix than "the pricing component is broken."

5. **Ask it to check its own work against the brief's rules.** e.g.:
   > "Check components/ for any hardcoded business names, prices, or
   > copy that should be coming from config instead."
   This is a good final pass before you submit — it's exactly what
   "swap, never rebuild" means and it's easy to slip up under time
   pressure.

6. **Have it write docs as it goes**, not at the end — the brief
   explicitly asks for `docs/` updated in the same PR as the code. Ask
   for a one-line doc update after each meaningful feature, not a
   scramble at midnight on day 2.

## What to build next, in order
1. `config/hotel.json` + `app/hotel/page.tsx` (reuse existing components)
2. `config/restaurant.json` + `app/restaurant/page.tsx` (reuse existing components)
3. Gallery component (shared, used by all three)
4. Dark/light mode toggle (CSS variables + a toggle button, applies to all sites)
5. Deploy to Vercel — connect this repo, it auto-detects Next.js, gives
   you 3 live URLs (or 1 URL with 3 routes) in a few minutes

## Deliberately left out (mention this in your submission)
Multilingual Sinhala/Tamil, PWA/offline, payment sandbox, PDF export,
full WCAG audit, third full site — see the conversation / your own
scope email for why.
