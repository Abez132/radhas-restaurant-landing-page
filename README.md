# Radha's Indian Restaurant & Bar — Landing Page

A single-page marketing site built with **Next.js 14 (App Router)** and **Tailwind CSS**, based on the brand snapshot for Radha's Indian Restaurant & Bar in Bole Japan, Addis Ababa.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server needs internet access on first run to fetch the Google Fonts (Playfair Display, Poppins, Noto Sans Ethiopic).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Base styles, scroll-reveal animation, tokens
components/
  Navbar.tsx          Sticky nav, scroll-aware styling, mobile menu
  Hero.tsx            Full-height hero with paisley watermark
  About.tsx           Story section
  SignatureDishes.tsx Animated menu cards (Tandoori, Biryani, Curries, Veg)
  WhyChooseUs.tsx      8-point USP grid
  Reviews.tsx          Customer-voice quote cards
  Gallery.tsx          Placeholder gallery grid (see note below)
  ReservationCTA.tsx   Full-width maroon CTA band
  LocationSection.tsx  Address/phone/hours + embedded Google Map
  Footer.tsx           Footer with nav, contact, services
  FloatingReserveButton.tsx  Persistent floating reserve CTA
  Ornaments.tsx        The signature gold "kalka" (paisley) motif system
  Reveal.tsx           IntersectionObserver-based fade-in-on-scroll wrapper
lib/
  data.ts              All editable business content (single source of truth)
```

## Customizing content

Nearly everything text-based (address, phone, hours, dish descriptions, USPs, review quotes, gallery captions, nav links) lives in **`lib/data.ts`**. Edit that file rather than hunting through components.

## Adding real photography

The Gallery section currently uses decorative placeholder tiles (no stock photos are bundled, to avoid licensing issues). To use real photos:

1. Drop images into `public/images/gallery/`.
2. In `components/Gallery.tsx`, replace `<PlaceholderTile label={item.label} />` with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/gallery/food-1.jpg" alt={item.caption} fill className="object-cover" />
   ```
3. Consider doing the same for a hero background image in `components/Hero.tsx`.

## Design tokens

Colors, fonts, and animation keyframes are defined in `tailwind.config.ts`:

- **Maroon** `#7A1F1F` (primary), **Gold** `#D4AF37` (accent), **Charcoal** `#2E2E2E` (text), **Cream** `#F8F3EA` (background)
- **Playfair Display** for headings, **Poppins** for body/UI, **Noto Sans Ethiopic** for the bilingual touches (hero greeting, footer line)
- Signature visual element: a hand-drawn gold **paisley/kalka motif** (`components/Ornaments.tsx`) used as a watermark, section divider, and card corner flourish

## Map

`components/LocationSection.tsx` embeds a Google Maps iframe pointed at "Bole Japan, Addis Ababa, Ethiopia". Swap `business.mapEmbedSrc` in `lib/data.ts` for the exact Google Maps place embed URL once you have it, for pinpoint accuracy.
