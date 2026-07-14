import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Clock } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-brand-dark text-brand-secondary angled-edge">
      <Image
        src="/images/cornerstone-logo.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/55"
        aria-hidden
      />
      <div className="absolute inset-0 court-lines opacity-25" aria-hidden />
      <div className="absolute inset-0 court-arc" aria-hidden />
      <div
        className="absolute right-[-10%] top-[20%] size-[28rem] rounded-full bg-brand-primary/25 blur-3xl motion-pulse"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-28 pt-10 sm:px-6 lg:pb-32">
        <p className="section-label reveal text-brand-accent">
          {siteContent.businessName} · {siteContent.city}, {siteContent.state}
        </p>
        <h1 className="reveal reveal-delay-1 mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          Build the Skills.
          <span className="mt-2 block text-brand-primary">
            Play with Confidence.
          </span>
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-brand-secondary/90 sm:text-lg">
          Focused basketball instruction designed to help young athletes
          strengthen fundamentals, grow in character, and become more confident
          players.
        </p>

        <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookingLink className="btn-primary" eventName="hero_booking_click">
            View Available Sessions
          </BookingLink>
          <Link href="/about" className="btn-secondary">
            <span>Meet Your Coach</span>
          </Link>
        </div>

        <ul className="mt-8 flex flex-col gap-3 text-sm text-brand-secondary/85 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <li className="flex items-center gap-2">
            <Users className="size-4 text-brand-accent" aria-hidden />
            Grades K–12 sessions
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-brand-accent" aria-hidden />
            {siteContent.locationName}, Plainfield
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-brand-accent" aria-hidden />
            {siteContent.priceNote}
          </li>
        </ul>
      </div>
    </section>
  );
}
