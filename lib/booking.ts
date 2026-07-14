/**
 * Central booking adapter.
 * Phase one: first-party Cornerstone scheduling (ported from DAWG).
 */
export type BookingProvider = "internal";

export type BookingTarget = {
  provider: BookingProvider;
  href: string;
  label: string;
};

export function getDefaultBookingTarget(): BookingTarget {
  return {
    provider: "internal",
    href: "/schedule",
    label: "Reserve Your Spot",
  };
}

export function getBookingHref(sessionId?: string): string {
  if (sessionId) return `/book/${sessionId}`;
  return "/schedule";
}

export function getScheduleHref(): string {
  return "/schedule";
}

export const bookingCopy = {
  paymentNote:
    "Payment is $20 per session at the facility via Venmo (@sara-corbin-3) or Zelle (317-490-3263).",
  arriveNote: "Athletes should arrive 10 minutes early.",
} as const;
