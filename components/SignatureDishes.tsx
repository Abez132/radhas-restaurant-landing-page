import Reveal from "./Reveal";
import { CornerFlourish, KalkaDivider } from "./Ornaments";
import { dishes } from "@/lib/data";

export default function SignatureDishes() {
  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Signature Dishes</p>
          <h2 className="mt-4 font-display text-3xl text-maroon-deep sm:text-4xl">
            Flavors Worth the Table
          </h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <Reveal key={dish.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_40px_-15px_rgba(122,31,31,0.25)]">
                <CornerFlourish className="h-9 w-9 text-gold transition-transform duration-500 group-hover:scale-110" />
                <span className="mt-4 inline-block rounded-full bg-maroon/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-maroon">
                  {dish.tag}
                </span>
                <h3 className="mt-4 font-display text-xl text-maroon-deep">
                  {dish.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {dish.description}
                </p>
                <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={4}>
          <p className="text-sm text-charcoal/70">
            Full à la carte, catering, and private-dining menus available on
            request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
