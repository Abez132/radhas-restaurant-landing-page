import Reveal from "./Reveal";
import { KalkaDivider } from "./Ornaments";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-4 font-display text-3xl text-maroon-deep sm:text-4xl">
            Hospitality First, Always
          </h2>
          <KalkaDivider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="text-center sm:text-left">
                <span className="mx-auto block h-8 w-px bg-gold sm:mx-0" />
                <h3 className="mt-3 font-display text-lg text-maroon-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
