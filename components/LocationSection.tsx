"use client";

import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function LocationSection() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="visit" className="bg-cream-dark py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.visit.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-maroon-deep sm:text-4xl ${ethiopic}`}>{t.visit.title}</h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-10 grid gap-8 overflow-hidden rounded-2xl border border-saffron/20 bg-white shadow-lg md:grid-cols-5">
          <Reveal className="flex flex-col justify-center gap-5 p-8 md:col-span-2 md:p-10" delay={1}>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider text-saffron-deep ${ethiopic}`}>{t.visit.addressLabel}</p>
              <p className="mt-1 text-base text-charcoal">{business.address}</p>
            </div>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider text-saffron-deep ${ethiopic}`}>{t.visit.phoneLabel}</p>
              <a href={business.phoneHref} className="mt-1 block text-base text-charcoal hover:text-maroon">
                {business.phone}
              </a>
            </div>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider text-saffron-deep ${ethiopic}`}>{t.visit.emailLabel}</p>
              <a href={`mailto:${business.email}`} className="mt-1 block break-all text-base text-charcoal hover:text-maroon">
                {business.email}
              </a>
            </div>
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider text-saffron-deep ${ethiopic}`}>{t.visit.hoursLabel}</p>
              <p className={`mt-1 text-base text-charcoal ${ethiopic}`}>{t.visit.hoursValue}</p>
            </div>
            <a
              href={business.phoneHref}
              className={`mt-2 inline-block w-fit rounded-full bg-maroon px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-maroon-deep ${ethiopic}`}
            >
              {t.visit.reserve}
            </a>
          </Reveal>

          <Reveal className="min-h-[320px] md:col-span-3" delay={2}>
            <iframe
              title="Radha's Indian Restaurant & Bar location map"
              src={business.mapEmbedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
