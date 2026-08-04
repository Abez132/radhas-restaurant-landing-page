"use client";

import { useLanguage } from "@/lib/i18n";
import { PaisleyField, KalkaDivider } from "./Ornaments";

export default function Hero() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-maroon-deep via-maroon to-maroon-deep"
    >
      <PaisleyField />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(235,110,15,0.18), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-28 text-center" lang={lang}>
        <p className={`text-sm tracking-wide text-saffron-soft animate-fade-in-up ${ethiopic}`}>
          {t.hero.eyebrow}
        </p>

        <h1
          className={`mt-5 font-display text-4xl leading-tight text-white text-shadow-soft animate-fade-in-up sm:text-5xl md:text-6xl ${ethiopic}`}
          style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
        >
          {t.hero.headline}
        </h1>

        <div
          className="mt-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
        >
          <KalkaDivider />
        </div>

        <p
          className={`mt-6 max-w-xl text-balance text-base text-white animate-fade-in-up sm:text-lg ${ethiopic}`}
          style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
        >
          {t.hero.sub}
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row"
          style={{ animationDelay: "0.55s", animationFillMode: "backwards" }}
        >
          <a
            href="#visit"
            className={`w-full rounded-full bg-saffron px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.09] hover:bg-saffron sm:w-auto ${ethiopic}`}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#menu"
            className={`w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-saffron hover:text-saffron-soft sm:w-auto ${ethiopic}`}
          >
            {t.hero.cta2}
          </a>
        </div>

        {/* <div
          className="mt-14 flex items-center gap-3 text-cream/80 animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
        >
          <span className="flex items-center gap-1 text-saffron">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </span>
          <span className={`text-sm ${ethiopic}`}>{t.hero.ratingLine}</span>
        </div> */}
      </div>

      {/* <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-saffron-soft/80"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="11" cy="10" r="2" fill="currentColor" />
        </svg>
      </a> */}
    </section>
  );
}
