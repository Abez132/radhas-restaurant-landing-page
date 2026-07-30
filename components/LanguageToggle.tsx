"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, toggle, t } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      lang={lang === "en" ? "am" : "en"}
      className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
        dark
          ? "border-white/40 text-white hover:border-saffron hover:text-saffron-soft"
          : "border-maroon/30 text-maroon hover:bg-maroon hover:text-white"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M1 7h12M7 1c1.8 1.7 2.8 3.8 2.8 6s-1 4.3-2.8 6c-1.8-1.7-2.8-3.8-2.8-6S5.2 2.7 7 1Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      {t.langToggle}
    </button>
  );
}
