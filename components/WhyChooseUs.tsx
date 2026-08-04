"use client";

import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function WhyChooseUs() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-cream-dark py-14 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(235,110,15,0.12), transparent 26%), radial-gradient(circle at 88% 24%, rgba(73,101,61,0.12), transparent 24%), linear-gradient(180deg, rgba(255,247,233,0.2), rgba(255,247,233,0.52))",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6" lang={lang}>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-24">
            <p className={`eyebrow ${ethiopic}`}>{t.whyUs.eyebrow}</p>
            <h2
              className={`mt-4 max-w-md font-display text-3xl leading-tight text-maroon-deep sm:text-4xl lg:text-5xl ${ethiopic}`}
            >
              {t.whyUs.title}
            </h2>
            <KalkaDivider className="mt-6" />
            <div className="mt-8 rounded-[1.75rem] border border-saffron/20 bg-white/55 p-6 shadow-[0_18px_50px_-30px_rgba(73,19,12,0.35)] backdrop-blur-sm lg:max-w-md">
              <p
                className={`text-sm leading-relaxed text-charcoal/80 ${ethiopic}`}
              >
                {t.simp.disc}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {t.whyUs.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-[1.75rem] border border-saffron/20 bg-white/65 p-6 shadow-[0_18px_50px_-34px_rgba(73,19,12,0.28)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-saffron/40 hover:bg-white/85 hover:shadow-[0_26px_70px_-32px_rgba(73,19,12,0.32)]">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm transition-transform duration-500 group-hover:scale-105 ${i % 2 === 0 ? "bg-saffron" : "bg-leaf"
                        }`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-lg text-maroon-deep ${ethiopic}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed text-charcoal/70 ${ethiopic}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
