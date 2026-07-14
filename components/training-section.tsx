import Link from "next/link";
import { philosophyPillars, siteContent } from "@/data/site-content";
import { trainingOptions } from "@/data/training-options";
import { BookingLink } from "@/components/booking-link";

export function TrainingPhilosophySection() {
  return (
    <section id="training" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Training Philosophy</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
          Grow the Player. Shape the Leader.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
          {siteContent.description}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {philosophyPillars.map((pillar) => (
            <article
              key={pillar.number}
              className="athletic-card relative overflow-hidden p-6"
            >
              <span
                className="font-display text-6xl font-bold leading-none text-brand-primary/15"
                aria-hidden
              >
                {pillar.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-dark">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/schedule" className="btn-primary">
            <span>Find a Session</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrainingOptionsSection() {
  return (
    <section className="bg-brand-dark px-4 py-16 text-brand-secondary sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-brand-accent">Training Options</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-none text-white sm:text-5xl">
          Sessions Built for Young Athletes
        </h2>
        <p className="mt-4 max-w-2xl text-brand-secondary/80">
          Choose the group that fits your athlete, then reserve online.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trainingOptions.map((option) => (
            <article
              key={option.id}
              className="flex flex-col rounded-lg border-2 border-white/15 bg-white/5 p-6 backdrop-blur-sm transition hover:border-brand-primary/60"
            >
              {option.badge ? (
                <span className="mb-3 inline-flex w-fit bg-brand-primary px-2 py-1 font-display text-[0.65rem] font-bold tracking-[0.12em] text-white">
                  {option.badge}
                </span>
              ) : null}
              <h3 className="font-display text-2xl font-bold text-white">
                {option.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-secondary/80">
                {option.description}
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-brand-secondary/90">
                {option.audience ? <li>Who: {option.audience}</li> : null}
                {option.duration ? <li>Duration: {option.duration}</li> : null}
                {option.price ? <li>Price: {option.price}</li> : null}
                {option.location ? <li>Location: {option.location}</li> : null}
              </ul>
              <BookingLink
                href={option.bookingHref}
                className="btn-primary mt-6 w-full"
                eventName="training_option_booking_click"
              >
                Reserve Your Spot
              </BookingLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
