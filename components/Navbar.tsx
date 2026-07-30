"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/80 shadow-md md:h-12 md:w-12">
            <Image src="/images/logo.png" alt="Radha's Indian Restaurant and Bar logo" fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl tracking-wide transition-colors md:text-2xl ${
                scrolled ? "text-maroon" : "text-white text-shadow-soft"
              }`}
            >
              Radha&rsquo;s
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.3em] transition-colors md:text-[10px] ${
                scrolled ? "text-saffron-deep" : "text-saffron-soft"
              }`}
            >
              Indian Restaurant &amp; Bar
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex" lang={lang}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-saffron ${
                  scrolled ? "text-charcoal" : "text-white/90 text-shadow-soft"
                } ${lang === "am" ? "font-ethiopic" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle dark={!scrolled} />
          <a
            href="#visit"
            lang={lang}
            className={`rounded-full border px-5 py-2 text-sm font-semibold tracking-wide transition-colors ${lang === "am" ? "font-ethiopic" : ""} ${
              scrolled
                ? "border-maroon text-maroon hover:bg-maroon hover:text-white"
                : "border-saffron-soft text-white hover:bg-saffron hover:text-white"
            }`}
          >
            {t.nav.reserve}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle dark={!scrolled} />
          <button
            className={scrolled ? "text-maroon" : "text-white"}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-saffron/20 bg-cream px-6 py-5 lg:hidden" lang={lang}>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium text-charcoal hover:text-maroon ${lang === "am" ? "font-ethiopic" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className={`inline-block rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white ${lang === "am" ? "font-ethiopic" : ""}`}
              >
                {t.nav.reserve}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
