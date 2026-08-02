"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { Paisley, KalkaDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 247, 233, 0.9), rgba(255, 247, 233, 0.95)), url("/images/dishes/all.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center"
        lang={lang}
      >
        <Reveal>
          <p className={`eyebrow ${ethiopic}`}>{t.about.eyebrow}</p>
          <h2
            className={`mt-4 font-display text-3xl leading-snug text-maroon-deep sm:text-4xl ${ethiopic}`}
          >
            {t.about.title}
          </h2>
          <div className="mt-6 h-px w-16 bg-saffron" />
          <p
            className={`mt-6 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}
          >
            {t.about.p1}
          </p>
          <p
            className={`mt-4 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}
          >
            {t.about.p2}
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-display text-3xl text-maroon">
                {t.about.statRatingValue}
              </p>
              <p
                className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}
              >
                {t.about.statRatingLabel}
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-maroon">
                {t.about.statHoursValue}
              </p>
              <p
                className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}
              >
                {t.about.statHoursLabel}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div
            className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center rounded-[2rem] border border-saffron/30 bg-gradient-to-br from-maroon to-maroon-deep p-10 shadow-xl"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.09), rgba(32, 5, 0, 0.09)), url("/images/dishes/all.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Paisley className="absolute -top-6 -left-6 h-24 w-20 text-saffron/40" />
            <Paisley className="absolute -bottom-6 -right-6 h-28 w-24 rotate-180 text-leaf/30" />
            <span className="absolute -top-5 right-6 h-16 w-16 overflow-hidden rounded-full ring-4 ring-cream shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Radha's logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
