import { Mail, MapPin, Phone } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { BookingLink } from "@/components/booking-link";
import { ContactForm } from "@/components/contact-form";
import { telHref } from "@/lib/utils";

export function ContactSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
            Let’s Get Your Athlete on the Court
          </h2>
          <p className="mt-4 text-brand-muted">
            Questions about sessions, groups, or payment? Reach out — or skip
            ahead and reserve a spot online.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 text-brand-primary" aria-hidden />
              <div>
                <p className="font-semibold text-brand-dark">Training location</p>
                <p className="text-brand-muted">{siteContent.fullLocation}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 text-brand-primary" aria-hidden />
              <div>
                <p className="font-semibold text-brand-dark">Phone / Zelle</p>
                <a
                  href={telHref(siteContent.phone)}
                  className="text-brand-primary underline-offset-2 hover:underline"
                  data-analytics="phone_click"
                >
                  {siteContent.phoneDisplay}
                </a>
              </div>
            </li>
            {siteContent.email ? (
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-brand-primary" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-dark">Email</p>
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="text-brand-primary underline-offset-2 hover:underline"
                    data-analytics="email_click"
                  >
                    {siteContent.email}
                  </a>
                </div>
              </li>
            ) : null}
          </ul>

          <BookingLink className="btn-primary mt-8" eventName="contact_booking_click">
            Book Training
          </BookingLink>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
