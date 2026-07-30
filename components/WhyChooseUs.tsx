"use client";

import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function WhyChooseUs() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="why-us" className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.whyUs.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl text-maroon-deep sm:text-4xl ${ethiopic}`}>{t.whyUs.title}</h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="text-center sm:text-left">
                <span className={`mx-auto block h-8 w-px sm:mx-0 ${i % 2 === 0 ? "bg-saffron" : "bg-leaf"}`} />
                <h3 className={`mt-3 font-display text-lg text-maroon-deep ${ethiopic}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed text-charcoal/70 ${ethiopic}`}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
