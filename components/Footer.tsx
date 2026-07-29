import { KalkaDivider } from "./Ornaments";
import { business, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-deep pb-8 pt-16 text-cream/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-2xl text-white">Radha&rsquo;s</p>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gold-soft">
            Indian Restaurant &amp; Bar
          </p>
          <KalkaDivider className="mt-6" />
          <p className="font-ethiopic mt-6 text-sm text-cream/70">
            እናመሰግናለን &mdash; Thank you for dining with us
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold text-gold-soft">Navigate</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gold-soft">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>{business.address}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-white">
                  {business.phone}
                </a>
              </li>
              <li>{business.hours}</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gold-soft">Services</p>
            <ul className="mt-3 space-y-2">
              <li>Private Dining</li>
              <li>Catering</li>
              <li>Business Lunches</li>
              <li>Takeaway</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Radha&rsquo;s Indian Restaurant &amp; Bar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
