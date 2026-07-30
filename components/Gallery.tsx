"use client";

import Reveal from "./Reveal";
import { KalkaDivider, Paisley } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

/**
 * Gallery tiles are decorative placeholders (no stock photography is bundled
 * to avoid licensing issues, and Radha's own photos should be dropped in
 * before this goes to pitch). Swap each <PlaceholderTile> for a real photo:
 *
 *   import Image from "next/image";
 *   <Image src="/images/gallery/food-1.jpg" alt="..." fill className="object-cover" />
 */
const gradients = [
  "from-maroon via-maroon-deep to-charcoal",
  "from-saffron-deep via-maroon to-charcoal",
  "from-leaf-deep via-charcoal to-charcoal",
  "from-maroon-deep via-saffron-deep to-charcoal",
];

function PlaceholderTile({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradient}`}>
      <Paisley className="h-16 w-14 text-saffron/50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
      <span className="absolute bottom-4 left-4 font-display text-sm text-saffron-soft/80">{label}</span>
    </div>
  );
}

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.gallery.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-maroon-deep sm:text-4xl ${ethiopic}`}>{t.gallery.title}</h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {t.gallery.items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-saffron/20">
                <PlaceholderTile label={item.label} gradient={gradients[i % gradients.length]} />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className={`text-xs text-white/90 ${ethiopic}`}>{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
