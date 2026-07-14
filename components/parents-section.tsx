import { parentBenefits } from "@/data/site-content";

export function ParentsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">For Parents</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
          Why Parents Choose Cornerstone
        </h2>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Practical benefits based on how Cornerstone Hoops training is set up
          today — clear instruction, age-aware grouping, and simple online
          signup.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {parentBenefits.map((item, index) => (
            <article
              key={item.title}
              className="border-l-4 border-brand-primary bg-brand-light px-5 py-5"
            >
              <p className="font-display text-sm tracking-[0.14em] text-brand-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-dark normal-case tracking-normal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
