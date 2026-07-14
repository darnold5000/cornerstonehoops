import { testimonials } from "@/data/testimonials";

/**
 * Hidden until approved parent testimonials are available.
 * Add quotes to data/testimonials.ts to enable this section.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-brand-dark px-4 py-16 text-brand-secondary sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-brand-accent">Parent Voices</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-white">
          What Families Are Saying
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.parentName + item.quote.slice(0, 24)}
              className="rounded-lg border border-white/15 bg-white/5 p-6"
            >
              <p className="text-lg leading-relaxed text-brand-secondary">
                “{item.quote}”
              </p>
              <footer className="mt-4 font-display text-sm tracking-[0.1em] text-brand-accent">
                {item.parentName}
                {item.athleteContext ? ` · ${item.athleteContext}` : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
