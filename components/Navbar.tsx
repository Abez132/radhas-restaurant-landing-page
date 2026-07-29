"use client";

import { useEffect, useState } from "react";
import { navLinks, business } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-display text-2xl tracking-wide transition-colors ${
              scrolled ? "text-maroon" : "text-white text-shadow-soft"
            }`}
          >
            Radha&rsquo;s
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.35em] transition-colors ${
              scrolled ? "text-gold-deep" : "text-gold-soft"
            }`}
          >
            Indian Restaurant &amp; Bar
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white/90 text-shadow-soft"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className={`hidden rounded-full border px-5 py-2 text-sm font-semibold tracking-wide transition-colors md:inline-block ${
            scrolled
              ? "border-maroon text-maroon hover:bg-maroon hover:text-white"
              : "border-gold-soft text-white hover:bg-gold hover:text-maroon-deep"
          }`}
        >
          Reserve a Table
        </a>

        <button
          className={`md:hidden ${scrolled ? "text-maroon" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/20 bg-cream px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-charcoal hover:text-maroon"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
