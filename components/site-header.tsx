"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {siteContent.announcement.active ? (
        <a
          href={siteContent.announcement.href}
          className="block bg-brand-primary px-4 py-2 text-center font-display text-[0.7rem] font-bold tracking-[0.14em] text-white sm:text-xs"
        >
          {siteContent.announcement.text}
        </a>
      ) : null}

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 bg-brand-dark text-brand-secondary transition-shadow duration-300",
          scrolled || open ? "shadow-lg shadow-black/30" : "shadow-none",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="relative flex items-center gap-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/cornerstone-logo.png"
              alt="Cornerstone Hoops logo"
              width={52}
              height={52}
              className="size-11 rounded-sm object-cover sm:size-[52px]"
              priority
            />
            <span className="hidden font-display text-lg font-bold leading-none tracking-wide text-white sm:block">
              Cornerstone
              <span className="block text-xs tracking-[0.18em] text-brand-accent">
                Hoops
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm font-semibold tracking-[0.08em] text-white/90 transition hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BookingLink
              className="btn-primary !px-3 !text-xs sm:!px-5 sm:!text-sm"
              eventName="header_booking_click"
            >
              Book Training
            </BookingLink>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded border border-white/30 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "border-t border-white/10 bg-brand-dark lg:hidden",
            open ? "block" : "hidden",
          )}
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3 font-display text-base font-semibold tracking-[0.1em] text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <BookingLink
              className="btn-primary mt-4 w-full"
              eventName="mobile_nav_booking_click"
            >
              Book Training
            </BookingLink>
          </nav>
        </div>
      </header>
    </>
  );
}
