"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export type DishDetail = {
  title: string;
  tag: string;
  fullDescription: string;
  price: string;
  image: string;
};

export default function DishModal({ dish, onClose }: { dish: DishDetail | null; onClose: () => void }) {
  const { lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  useEffect(() => {
    if (!dish) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={dish.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        lang={lang}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative aspect-[4/3] w-full">
          <Image src={dish.image} alt={dish.title} fill sizes="512px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          <span className={`absolute left-4 top-4 inline-block rounded-full bg-leaf px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ${ethiopic}`}>
            {dish.tag}
          </span>
        </div>

        <div className="p-6">
          <h3 className={`font-display text-2xl text-maroon-deep ${ethiopic}`}>{dish.title}</h3>
          <p className={`mt-3 text-sm leading-relaxed text-charcoal/80 ${ethiopic}`}>{dish.fullDescription}</p>
          <div className="mt-5 flex items-center justify-between border-t border-saffron/20 pt-4">
            <span className="font-display text-lg text-saffron-deep">{dish.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
