"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { getBookingHref, getScheduleHref } from "@/lib/booking";
import { cn } from "@/lib/utils";

type BookingLinkProps = {
  href?: string;
  sessionId?: string;
  children: React.ReactNode;
  className?: string;
  eventName?: string;
};

export function BookingLink({
  href,
  sessionId,
  children,
  className,
  eventName = "schedule_booking_click",
}: BookingLinkProps) {
  const target =
    href ?? (sessionId ? getBookingHref(sessionId) : getScheduleHref());

  return (
    <Link
      href={target}
      className={cn(className)}
      data-analytics={eventName}
      onClick={() => {
        track(eventName);
      }}
    >
      <span>{children}</span>
    </Link>
  );
}
