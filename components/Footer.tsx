"use client";

import Image from "next/image";
import { KalkaDivider } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#visit" },
  ];

  return (
    <footer className="border-t-4 border-leaf/70 bg-maroon-deep pb-8 pt-16 text-cream/80">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <div className="flex flex-col items-center text-center">
          <span className="relative mb-3 h-16 w-16 overflow-hidden rounded-full ring-2 ring-saffron-soft/60">
            <Image src="/images/logo.png" alt="Radha's Indian Restaurant and Bar logo" fill sizes="64px" className="object-cover" />
          </span>
          <p className="font-display text-2xl text-white">Radha&rsquo;s</p>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-saffron-soft">Indian Restaurant &amp; Bar</p>
          <KalkaDivider className="mt-6" />
          <p className={`mt-6 text-sm text-cream/70 ${ethiopic}`}>{t.footer.thanks}</p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 text-sm sm:grid-cols-3">
          <div>
            <p className={`font-semibold text-saffron-soft ${ethiopic}`}>{t.footer.navigate}</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`transition-colors hover:text-white ${ethiopic}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`font-semibold text-saffron-soft ${ethiopic}`}>{t.footer.contact}</p>
            <ul className="mt-3 space-y-2">
              <li>{business.address}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="break-all transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.instagramHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {business.instagram}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={`font-semibold text-saffron-soft ${ethiopic}`}>{t.footer.services}</p>
            <ul className={`mt-3 space-y-2 ${ethiopic}`}>
              {t.footer.serviceList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream/50 ${ethiopic}`}>
          © {new Date().getFullYear()} {business.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
