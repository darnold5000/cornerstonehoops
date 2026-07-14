import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: `Contact | ${siteContent.city}, ${siteContent.state}`,
  description:
    "Contact Cornerstone Hoops in Plainfield, IN about youth basketball training, scheduling, and session questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-12 text-brand-secondary sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="section-label text-brand-accent">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Reach Cornerstone Hoops
          </h1>
          <p className="mt-3 max-w-2xl text-brand-secondary/80">
            Send a message, call, or reserve a session online. We’re excited to
            invest in your athlete and help them grow both on and off the court.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
