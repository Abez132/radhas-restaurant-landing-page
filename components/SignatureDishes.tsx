"use client";

import Reveal from "./Reveal";
import { CornerFlourish, KalkaDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

function Steam() {
  return (
    <span className="pointer-events-none absolute -top-3 left-1/2 flex -translate-x-1/2 gap-1" aria-hidden="true">
      <span className="h-4 w-1 rounded-full bg-saffron-soft/70 animate-steam-rise" style={{ animationDelay: "0s" }} />
      <span className="h-4 w-1 rounded-full bg-saffron-soft/70 animate-steam-rise" style={{ animationDelay: "0.9s" }} />
      <span className="h-4 w-1 rounded-full bg-saffron-soft/70 animate-steam-rise" style={{ animationDelay: "1.8s" }} />
    </span>
  );
}

export default function SignatureDishes() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.dishes.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-maroon-deep sm:text-4xl ${ethiopic}`}>{t.dishes.title}</h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.dishes.items.map((dish, i) => (
            <Reveal key={dish.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-saffron/20 bg-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:border-saffron hover:shadow-[0_20px_40px_-15px_rgba(175,58,15,0.25)]">
                <Steam />
                <CornerFlourish className="h-9 w-9 text-saffron transition-transform duration-500 group-hover:scale-110" />
                <span className={`mt-4 inline-block rounded-full bg-leaf/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-leaf-deep ${ethiopic}`}>
                  {dish.tag}
                </span>
                <h3 className={`mt-4 font-display text-xl text-maroon-deep ${ethiopic}`}>{dish.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed text-charcoal/75 ${ethiopic}`}>{dish.description}</p>
                <p className="mt-4 text-sm font-semibold text-saffron-deep">{dish.price}</p>
                <div className="mt-4 h-px w-10 bg-saffron/50 transition-all duration-500 group-hover:w-16" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={4}>
          <p className={`text-sm text-charcoal/70 ${ethiopic}`}>{t.dishes.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
