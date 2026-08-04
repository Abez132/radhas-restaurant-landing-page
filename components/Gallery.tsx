"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="gallery" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.gallery.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-maroon-deep sm:text-4xl ${ethiopic}`}>{t.gallery.title}</h2>
          <KalkaDivider className="mt-6" />
          <p className={`mt-5 text-sm text-charcoal/60 ${ethiopic}`}>{t.gallery.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.gallery.items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <a
                href={business.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg border border-saffron/20"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className={`text-xs font-medium text-white ${ethiopic}`}>{item.label}</span>
                </div>
                <span className="absolute right-2 top-2 rounded-full bg-black/40 p-1.5 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.1" />
                    <circle cx="7" cy="7" r="2.6" stroke="white" strokeWidth="1.1" />
                    <circle cx="10.4" cy="3.6" r="0.7" fill="white" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={4}>
          <a
            href={business.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border border-maroon/30 px-6 py-2.5 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white ${ethiopic}`}
          >
            {t.gallery.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
