"use client";

import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function Reviews() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="reviews" className="bg-maroon-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow text-saffron-soft ${ethiopic}`}>{t.reviews.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-white sm:text-4xl ${ethiopic}`}>{t.reviews.title}</h2>
          <KalkaDivider className="mt-6" />
          <p className={`mt-5 text-sm text-cream/70 ${ethiopic}`}>{t.reviews.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <figure className="h-full rounded-2xl border border-saffron/20 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-saffron/50">
                <span className="font-display text-4xl leading-none text-saffron/60">&ldquo;</span>
                <blockquote className={`mt-2 text-[15px] leading-relaxed text-cream/90 ${ethiopic}`}>
                  {r.quote}
                </blockquote>
                <figcaption className={`mt-5 flex items-center gap-2 text-xs uppercase tracking-wider text-saffron-soft/80 ${ethiopic}`}>
                  <span className="text-saffron">{"★".repeat(r.stars)}</span>
                  {r.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={4}>
          <p className={`text-xs text-cream/50 ${ethiopic}`}>
            Real guest reviews, lightly excerpted from {business.reviewSource}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
