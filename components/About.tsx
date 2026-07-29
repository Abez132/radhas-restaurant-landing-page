import Reveal from "./Reveal";
import { Paisley, KalkaDivider } from "./Ornaments";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-maroon-deep sm:text-4xl">
            A taste of India, hosted with Ethiopian warmth
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-charcoal/85">
            Radha&rsquo;s brings together authentic Indian chefs, hand-ground
            spice blends, and recipes carried straight from home kitchens
            across India. Every dish — from a slow-simmered curry to a
            tandoor-fired kebab — is made the way it should be, without
            shortcuts.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/85">
            Set in Bole Japan, our dining room welcomes families,
            diplomats, business travelers, and old friends alike, with the
            same unhurried hospitality every time. Whether it&rsquo;s a
            quiet business lunch or a private celebration, you&rsquo;re
            hosted, not just served.
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-display text-3xl text-maroon">4.7★</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/60">
                189 Google Reviews
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-maroon">9AM–11PM</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-charcoal/60">
                Open Every Day
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center rounded-[2rem] border border-gold/30 bg-gradient-to-br from-maroon to-maroon-deep p-10 shadow-xl">
            <Paisley className="absolute -top-6 -left-6 h-24 w-20 text-gold/40" />
            <Paisley className="absolute -bottom-6 -right-6 h-28 w-24 rotate-180 text-gold/30" />
            <div className="text-center">
              <p className="font-display text-2xl italic text-gold-soft">
                &ldquo;Very hospitable staff, amazing ambiance.&rdquo;
              </p>
              <KalkaDivider className="mt-6" />
              <p className="mt-6 font-body text-sm tracking-wide text-cream/80">
                — a recurring theme in our guest reviews
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
