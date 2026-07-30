# Radha's Indian Restaurant & Bar — Landing Page

A bilingual (English + Amharic) landing page built with **Next.js 14 (App Router)** and **Tailwind CSS**, built on spec for Radha's Indian Restaurant & Bar in Bole Japan, Addis Ababa, per Possible Technology's Speculative Landing Page Program.

This is a **sample built speculatively**, using Radha's real public name, logo, and reviews — it has not been commissioned by the restaurant. See `Radhas_Brand_Snapshot.docx` (delivered alongside this project) for the research this build is based on.

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

## What's real vs. placeholder

| Element | Status |
|---|---|
| Logo | Real — cropped from the restaurant's own Instagram (`@radhasres2025`) |
| Brand colors | Sampled directly from the logo's actual pixels (saffron, leaf green, deep maroon) |
| Address, phone, email, hours | Real — confirmed via the restaurant's Tripadvisor listing |
| Menu items & prices | Real — sourced from a public TikTok menu post |
| Review quotes | Real — lightly excerpted from public Tripadvisor reviews, each attributed to its actual author |
| "Insider tips" ticker | Real details pulled from guest reviews (Monday game night, jazz bar, staff-recommended dishes, valet parking) |
| Gallery photos | **Placeholder** — no stock or lifted photos are bundled; see note below |
| Amharic translations | AI-drafted, not yet reviewed by a native speaker — see note below |

## ⚠️ Before this goes out as a pitch

Two things the program's own workflow guide calls out as required, which an AI pass cannot finish on its own:

1. **Amharic review** — every Amharic string lives in `lib/i18n.tsx` under the `am` key. A native speaker needs to read it live on the site (not just in the file) and correct anything stiff or off before outreach.
2. **Real photography** — the Gallery section currently uses decorative placeholder tiles. Drop the restaurant's own public photos into `public/images/gallery/` and swap them in per the instructions in `components/Gallery.tsx`.

## Project structure

```
app/
  layout.tsx          Fonts, metadata, wraps the app in LanguageProvider
  page.tsx             Assembles all sections
  globals.css          Base styles, scroll-reveal animation, Amharic line-height rule
components/
  Navbar.tsx            Sticky nav with real logo, scroll-aware styling, language toggle
  Hero.tsx               Full-height hero, bilingual headline
  InsiderTips.tsx         Scrolling ticker of real, review-sourced details (sector-specific touch)
  About.tsx               Story section with real rating/hours stats
  SignatureDishes.tsx     Real menu items + prices, steam-rise animation
  WhyChooseUs.tsx         8-point USP grid sourced from Tripadvisor's feature list
  Reviews.tsx             Real, attributed guest quotes
  Gallery.tsx             Placeholder gallery grid — swap in real photos before pitching
  ReservationCTA.tsx      Full-width maroon CTA band
  LocationSection.tsx     Address/phone/email/hours + embedded Google Map
  Footer.tsx              Real logo, real contact details, Instagram link
  FloatingReserveButton.tsx  Persistent floating reserve CTA
  LanguageToggle.tsx       EN/AM toggle button used in the nav
  Ornaments.tsx            The signature gold "kalka" (paisley) motif system
  Reveal.tsx               IntersectionObserver-based fade-in-on-scroll wrapper
lib/
  i18n.tsx                 Bilingual content dictionary (en/am) + LanguageProvider/useLanguage hook — the single source of truth for all copy
public/images/logo.png     The real, cropped restaurant logo
```

## How the language toggle works

Per the program's bilingual implementation note, all copy lives in one dictionary (`lib/i18n.tsx`) keyed `en`/`am` per text block, rather than being hardcoded twice into the HTML. `LanguageProvider` (wrapping the whole app in `app/layout.tsx`) holds the active language in React state; `useLanguage()` gives any component `{ lang, toggle, t }`, where `t` is the current language's content object. Toggling is instant — no page reload, no routing.

Amharic text gets the `font-ethiopic` class (Noto Sans Ethiopic) and a `lang="am"` attribute wherever it appears, and `globals.css` sets a taller line-height under `:lang(am)` since Ethiopic glyphs run denser than Latin ones and look cramped at normal leading.

## Customizing content

Everything text-based — nav labels, hero copy, dish descriptions, USPs, review quotes, gallery captions, contact info — lives in **`lib/i18n.tsx`**. Business facts that don't change between languages (address, phone, email, rating) are in the `business` object at the top of that file; translated copy is in the `content.en` / `content.am` objects below it.

## Design tokens

Colors, fonts, and animation keyframes are defined in `tailwind.config.ts`, sampled from the real logo:

- **Saffron** `#EB6E0F`, **Leaf Green** `#157A22`, **Deep Maroon** `#AF3A0F` (from the logo's script text), **Cream** `#FBF6EC`
- **Playfair Display** for headings, **Poppins** for body/UI, **Noto Sans Ethiopic** for all Amharic text
- Signature visual elements: the gold paisley/"kalka" motif (`components/Ornaments.tsx`), a steam-rise animation on the menu cards, and the insider-tips ticker

## Map

`components/LocationSection.tsx` embeds a Google Maps iframe. `business.mapEmbedSrc` in `lib/i18n.tsx` currently points to a name-based search query — swap it for the exact Google Maps place embed URL once available, for pinpoint accuracy.
