import { ScheduleBrowser } from "@/components/public/schedule-browser";
import { BookingHowItWorks } from "@/components/booking-how-it-works";
import { getFilteredSessions, getSessionTypes } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Training Schedule",
  description:
    "Browse and book youth basketball training sessions with Cornerstone Hoops in Plainfield, Indiana.",
  path: "/schedule",
});

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; age?: string; date?: string }>;
}) {
  const params = await searchParams;
  const [sessions, sessionTypes] = await Promise.all([
    getFilteredSessions({
      type: params.type,
      age: params.age,
      date: params.date,
    }),
    getSessionTypes(),
  ]);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark px-4 pb-12 pt-12 text-brand-secondary sm:px-6">
        <div className="absolute inset-0 court-lines opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <p className="section-label text-brand-accent">Schedule</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-none text-white sm:text-6xl">
            Find Your Next Training Session
          </h1>
          <p className="mt-4 max-w-2xl text-brand-secondary/80">
            Filter by session type, age, or date. Reserve online — payment at
            the facility via Venmo or Zelle.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <ScheduleBrowser
            sessions={sessions}
            sessionTypes={sessionTypes}
            initialType={params.type}
            initialAge={params.age}
            initialDate={params.date}
          />
        </div>
      </section>

      <BookingHowItWorks />
    </>
  );
}
