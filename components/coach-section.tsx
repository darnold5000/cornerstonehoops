import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";

export function CoachSection() {
  const { coach } = siteContent;

  return (
    <section
      id="coach"
      className="scroll-mt-28 bg-brand-light px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -left-3 -top-3 h-full w-full border-2 border-brand-primary"
            aria-hidden
          />
          <div className="relative overflow-hidden border-2 border-brand-dark bg-brand-dark">
            <Image
              src="/images/cornerstone-logo.png"
              alt={`${coach.name}, ${coach.role} at Cornerstone Hoops`}
              width={640}
              height={640}
              sizes="(max-width: 768px) 80vw, 360px"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="section-label">Meet the Coach</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
            Coaching That Meets Players Where They Are
          </h2>
          <p className="mt-2 font-display text-lg tracking-[0.08em] text-brand-primary">
            {coach.name} · {coach.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted">
            {coach.verifiedIntro}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
            Sessions emphasize strong fundamentals, positive encouragement, and
            a competitive but supportive environment — helping athletes grow
            both on and off the court.
          </p>
          {/* TODO: Replace with coach-approved biography when provided. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="btn-primary" eventName="coach_booking_click">
              Book a Session
            </BookingLink>
            <Link href="/about" className="btn-secondary btn-secondary-dark">
              <span>About Cornerstone</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
