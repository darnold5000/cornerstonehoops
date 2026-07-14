import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { philosophyPillars, siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";

export const metadata: Metadata = {
  title: `Meet the Coach | Sara Corbin`,
  description:
    "Learn about Cornerstone Hoops training with Sara Corbin in Plainfield, IN — fundamentals, character, confidence, and a love for the game.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark px-4 pb-16 pt-12 text-brand-secondary sm:px-6">
        <div className="absolute inset-0 court-lines opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-label text-brand-accent">About</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-none text-white sm:text-6xl">
              Who Will Train My Child?
            </h1>
            <p className="mt-4 max-w-xl text-brand-secondary/80">
              {siteContent.coach.name} leads Cornerstone Hoops with a clear
              focus: strong fundamentals, positive encouragement, and a
              competitive but supportive environment.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/images/cornerstone-logo.png"
              alt="Cornerstone Hoops logo"
              width={720}
              height={720}
              className="rounded-xl border-2 border-white/15 object-cover"
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            Coaching Philosophy
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            {siteContent.description}
          </p>
          <p className="mt-4 text-brand-muted leading-relaxed">
            {siteContent.coach.verifiedIntro}
          </p>
          {/* TODO: Replace with coach-approved biography. */}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            What Sessions Feel Like
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {philosophyPillars.map((pillar) => (
              <article key={pillar.number} className="athletic-card p-6">
                <p className="font-display text-sm tracking-[0.14em] text-brand-accent">
                  {pillar.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-brand-dark">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-brand-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-brand-dark">
            Training Environment
          </h2>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Sessions are held at {siteContent.fullLocation}. Athletes should
            arrive 10 minutes early. Reserve a specific time slot online and
            include your child’s name and grade when you book.
          </p>
          <p className="mt-4 text-brand-muted leading-relaxed">
            Current offerings are group training sessions, often organized by
            grade or age so athletes can develop alongside peers at a similar
            stage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="btn-primary">Book a Session</BookingLink>
            <Link href="/schedule" className="btn-secondary btn-secondary-dark">
              <span>View Schedule</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
