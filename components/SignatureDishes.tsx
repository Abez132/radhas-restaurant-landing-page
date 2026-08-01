"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

function Steam() {
  return (
    <span className="pointer-events-none absolute -top-1 left-1/2 z-10 flex -translate-x-1/2 gap-1" aria-hidden="true">
      <span className="h-4 w-1 rounded-full bg-white/70 animate-steam-rise" style={{ animationDelay: "0s" }} />
      <span className="h-4 w-1 rounded-full bg-white/70 animate-steam-rise" style={{ animationDelay: "0.9s" }} />
      <span className="h-4 w-1 rounded-full bg-white/70 animate-steam-rise" style={{ animationDelay: "1.8s" }} />
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.dishes.items.map((dish, i) => (
            <Reveal key={dish.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-saffron/20 bg-cream shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-saffron hover:shadow-[0_20px_40px_-15px_rgba(175,58,15,0.3)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Steam />
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <span className={`absolute left-3 top-3 inline-block rounded-full bg-leaf px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ${ethiopic}`}>
                    {dish.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`font-display text-lg text-maroon-deep ${ethiopic}`}>{dish.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-charcoal/75 ${ethiopic}`}>{dish.description}</p>
                  <div className="mt-4 h-px w-10 bg-saffron/50 transition-all duration-500 group-hover:w-16" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={4}>
          <p className={`mx-auto max-w-2xl text-sm text-charcoal/70 ${ethiopic}`}>{t.dishes.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
