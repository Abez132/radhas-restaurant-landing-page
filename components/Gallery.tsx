import Reveal from "./Reveal";
import { KalkaDivider, Paisley } from "./Ornaments";
import { galleryItems } from "@/lib/data";

/**
 * Gallery tiles are decorative placeholders (no stock photography is bundled
 * to avoid licensing issues). Swap each <PlaceholderTile> for a real photo:
 *
 *   import Image from "next/image";
 *   <Image src="/images/gallery/food-1.jpg" alt="..." fill className="object-cover" />
 */
function PlaceholderTile({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-maroon via-maroon-deep to-charcoal">
      <Paisley className="h-16 w-14 text-gold/50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
      <span className="absolute bottom-4 left-4 font-display text-sm text-gold-soft/80">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 font-display text-3xl text-maroon-deep sm:text-4xl">
            A Glimpse Inside Radha&rsquo;s
          </h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-gold/20">
                <PlaceholderTile label={item.label} />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs text-white/90">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
