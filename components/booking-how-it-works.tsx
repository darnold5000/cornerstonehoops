import { CalendarCheck, CreditCard, ShieldCheck } from "lucide-react";
import { bookingCopy } from "@/lib/booking";
import { BookingLink } from "@/components/booking-link";

export function BookingHowItWorks() {
  return (
    <section className="px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border-2 border-brand-dark bg-brand-charcoal text-brand-secondary">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-label text-brand-accent">Secure Registration</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Reserve Online. Pay at the Facility.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-secondary/80">
              Browse open sessions, reserve your athlete&apos;s spot on this
              website, and complete payment when you arrive.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-brand-secondary/85">
              <li className="flex items-start gap-2">
                <CalendarCheck className="mt-0.5 size-4 text-brand-accent" aria-hidden />
                Choose the exact date and time that fits your athlete.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 size-4 text-brand-accent" aria-hidden />
                Include your child&apos;s name and grade when you book.
              </li>
              <li className="flex items-start gap-2">
                <CreditCard className="mt-0.5 size-4 text-brand-accent" aria-hidden />
                {bookingCopy.paymentNote}
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-5">
            <p className="font-display text-sm tracking-[0.12em] text-brand-accent">
              Booking
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Cornerstone Schedule
            </p>
            <p className="mt-2 text-sm text-brand-secondary/70">
              {bookingCopy.arriveNote} Spots update as families reserve online.
            </p>
            <BookingLink className="btn-primary mt-5 w-full" eventName="booking_panel_click">
              View Schedule
            </BookingLink>
          </div>
        </div>
      </div>
    </section>
  );
}
