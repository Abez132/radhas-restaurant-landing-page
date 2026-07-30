"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function FloatingReserveButton() {
  const [show, setShow] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#visit"
      lang={lang}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-saffron px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-5px_rgba(235,110,15,0.55)] transition-all duration-500 hover:scale-105 hover:bg-saffron-deep animate-float ${
        lang === "am" ? "font-ethiopic" : ""
      } ${show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-flicker">
        <path
          d="M8 1.5c1.6 2 2.7 3.6 2.7 5.4A2.7 2.7 0 0 1 8 9.6a2.7 2.7 0 0 1-2.7-2.7C5.3 5.1 6.4 3.5 8 1.5Z"
          fill="currentColor"
        />
        <path d="M4.5 10.5h7v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3Z" fill="currentColor" opacity="0.6" />
      </svg>
      {t.nav.reserve}
    </a>
  );
}
