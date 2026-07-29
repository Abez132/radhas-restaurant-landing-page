import Reveal from "./Reveal";
import { PaisleyField } from "./Ornaments";
import { business } from "@/lib/data";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20">
      <PaisleyField />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Your Table Is Waiting
        </h2>
        <p className="mt-4 max-w-lg text-cream/85">
          For business lunches, family dinners, or a private room for your
          next celebration — we&rsquo;ll take care of the rest.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={business.phoneHref}
            className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-maroon-deep transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-soft sm:w-auto"
          >
            Call {business.phone}
          </a>
          <a
            href="#visit"
            className="w-full rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-gold hover:text-gold-soft sm:w-auto"
          >
            Get Directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}
