import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";
import { telHref } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-brand-primary bg-brand-dark px-4 py-12 text-brand-secondary sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/cornerstone-logo.png"
              alt="Cornerstone Hoops logo"
              width={56}
              height={56}
              className="rounded-sm object-cover"
            />
            <div>
              <p className="font-display text-xl font-bold text-white">
                Cornerstone Hoops
              </p>
              <p className="text-xs tracking-[0.12em] text-brand-accent">
                {siteContent.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-secondary/75">
            Youth basketball training in {siteContent.city}, {siteContent.state} —
            building fundamentals, character, confidence, and a genuine love for
            the game.
          </p>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.14em] text-brand-accent">
            Visit
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/schedule" className="hover:text-white">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                Meet the Coach
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <BookingLink
                className="inline-flex items-center gap-1 hover:text-white"
                eventName="footer_schedule_click"
              >
                Book Training
              </BookingLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.14em] text-brand-accent">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-secondary/85">
            <li>{siteContent.fullLocation}</li>
            <li>
              <a
                href={telHref(siteContent.phone)}
                className="hover:text-white"
                data-analytics="phone_click"
              >
                {siteContent.phoneDisplay}
              </a>
            </li>
            {siteContent.email ? (
              <li>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="hover:text-white"
                  data-analytics="email_click"
                >
                  {siteContent.email}
                </a>
              </li>
            ) : null}
            {siteContent.socialLinks.instagram ? (
              <li>
                <a
                  href={siteContent.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {siteContent.socialLinks.facebook ? (
              <li>
                <a
                  href={siteContent.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-brand-secondary/60">
        <p>{siteContent.notAffiliatedNote}</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteContent.businessName}. All rights
            reserved.
          </p>
          <a
            href={siteContent.websiteCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent"
          >
            {siteContent.websiteCredit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
