import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import {
  TrainingOptionsSection,
  TrainingPhilosophySection,
} from "@/components/training-section";
import { CoachSection } from "@/components/coach-section";
import { SchedulePreview } from "@/components/schedule-preview";
import { BookingHowItWorks } from "@/components/booking-how-it-works";
import { ParentsSection } from "@/components/parents-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TrainingPhilosophySection />
      <TrainingOptionsSection />
      <CoachSection />
      <SchedulePreview />
      <BookingHowItWorks />
      <ParentsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
