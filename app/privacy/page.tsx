import type { Metadata } from "next";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Cornerstone Hoops website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="section-label">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-dark sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-muted">
          <p>
            {siteContent.businessName} (“we,” “us”) operates this website to
            share training information and accept session reservations.
          </p>
          <p>
            When you book a session, we collect parent/guardian contact details
            and athlete information needed to reserve a spot and communicate
            about training. Booking data is stored securely in our scheduling
            database.
          </p>
          <p>
            The contact form may open your phone or email so you can send a
            message directly. We may use privacy-friendly analytics (such as
            Vercel Analytics) to understand aggregate traffic and which booking
            buttons are used. We do not intentionally collect sensitive personal
            information through analytics events.
          </p>
          <p>
            For privacy questions, contact Sara Corbin at{" "}
            <a
              href={`tel:${siteContent.phone}`}
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              {siteContent.phoneDisplay}
            </a>
            .
          </p>
          <p className="text-xs">Last updated: July 14, 2026</p>
        </div>
      </div>
    </section>
  );
}
