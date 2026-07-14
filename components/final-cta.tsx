import Link from "next/link";
import { BookingLink } from "@/components/booking-link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 text-brand-secondary sm:px-6 sm:py-20">
      <div className="absolute inset-0 court-lines opacity-30" aria-hidden />
      <div className="absolute inset-0 court-arc" aria-hidden />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="section-label justify-center text-brand-accent">
          Next Step
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-none text-white sm:text-6xl">
          Ready to Put in the Work?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-secondary/80">
          Explore the current schedule and reserve a training session that fits
          your athlete.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookingLink className="btn-primary" eventName="final_cta_booking_click">
            View Available Sessions
          </BookingLink>
          <Link href="/contact" className="btn-secondary">
            <span>Ask a Question</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
