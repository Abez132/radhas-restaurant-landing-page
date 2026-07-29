import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { reviews, business } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-maroon-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow text-gold-soft">In Our Guests&rsquo; Words</p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            What Addis Ababa Is Saying
          </h2>
          <KalkaDivider className="mt-6" />
          <p className="mt-5 text-sm text-cream/70">
            {business.rating} average from {business.reviewCount} Google
            reviews
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <figure className="h-full rounded-2xl border border-gold/20 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold/50">
                <span className="font-display text-4xl leading-none text-gold/60">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-cream/90">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-xs uppercase tracking-wider text-gold-soft/80">
                  <span className="text-gold">★★★★★</span>
                  {r.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
