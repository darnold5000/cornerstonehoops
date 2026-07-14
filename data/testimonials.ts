export type Testimonial = {
  quote: string;
  parentName: string;
  athleteContext?: string;
};

/**
 * No legitimate testimonials were found on the SignupGenius source page.
 * Keep this array empty so the testimonials section stays hidden in production.
 * When approved quotes are available, add them here.
 */
export const testimonials: Testimonial[] = [];
