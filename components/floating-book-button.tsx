"use client";

import { useEffect, useState } from "react";
import { BookingLink } from "@/components/booking-link";
import { cn } from "@/lib/utils";

export function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-40 transition-all duration-300 sm:bottom-6 sm:right-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <BookingLink
        className="btn-primary shadow-xl shadow-black/30"
        eventName="floating_booking_click"
      >
        Book Training
      </BookingLink>
    </div>
  );
}
