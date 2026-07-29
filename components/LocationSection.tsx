import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { business } from "@/lib/data";

export default function LocationSection() {
  return (
    <section id="visit" className="bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 font-display text-3xl text-maroon-deep sm:text-4xl">
            Find Us in Bole Japan
          </h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-8 overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-lg md:grid-cols-5">
          <Reveal className="flex flex-col justify-center gap-6 p-8 md:col-span-2 md:p-10" delay={1}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Address
              </p>
              <p className="mt-1 text-base text-charcoal">{business.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Phone
              </p>
              <a href={business.phoneHref} className="mt-1 block text-base text-charcoal hover:text-maroon">
                {business.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                Hours
              </p>
              <p className="mt-1 text-base text-charcoal">{business.hours}</p>
            </div>
            <a
              href={business.phoneHref}
              className="mt-2 inline-block w-fit rounded-full bg-maroon px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-maroon-deep"
            >
              Reserve a Table
            </a>
          </Reveal>

          <Reveal className="min-h-[320px] md:col-span-3" delay={2}>
            <iframe
              title="Radha's Indian Restaurant & Bar location map"
              src={business.mapEmbedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
