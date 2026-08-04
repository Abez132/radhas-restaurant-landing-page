"use client";

import Reveal from "./Reveal";
import { PaisleyField } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function ReservationCTA() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section className="relative overflow-hidden bg-maroon py-12 md:py-16">
      <PaisleyField />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center" as="div">
        <div lang={lang} className="flex flex-col items-center">
          <h2 className={`font-display text-3xl text-white sm:text-4xl ${ethiopic}`}>{t.cta.title}</h2>
          <p className={`mt-4 max-w-lg text-cream/85 ${ethiopic}`}>{t.cta.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={business.phoneHref}
              className="w-full rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-saffron-deep sm:w-auto"
            >
              {t.cta.call}
            </a>
            <a
              href="#visit"
              className={`w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-saffron hover:text-saffron-soft sm:w-auto ${ethiopic}`}
            >
              {t.cta.directions}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
