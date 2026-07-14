import Link from "next/link";
import { getUpcomingSessions } from "@/lib/data";
import { siteContent } from "@/data/site-content";
import { SessionCard } from "@/components/public/session-card";
import { BookingLink } from "@/components/booking-link";

export async function SchedulePreview() {
  const sessions = await getUpcomingSessions(4);

  return (
    <section
      id="schedule"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Current Schedule</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
              Upcoming Training Sessions
            </h2>
          </div>
          <Link
            href="/schedule"
            className="font-display text-sm font-bold tracking-[0.1em] text-brand-primary underline-offset-4 hover:underline"
          >
            View Full Schedule
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-sm text-brand-muted">
          {siteContent.disclaimer}
        </p>

        {sessions.length > 0 ? (
          <div className="mt-8 space-y-4">
            {sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ) : (
          <div className="athletic-card mt-8 p-8 text-center">
            <p className="font-display text-2xl font-bold text-brand-dark">
              New sessions are being planned.
            </p>
            <p className="mx-auto mt-3 max-w-md text-brand-muted">
              Contact Cornerstone Hoops or check back soon for the next
              opportunity.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                <span>Contact Us</span>
              </Link>
              <BookingLink className="btn-secondary btn-secondary-dark">
                View Schedule
              </BookingLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
