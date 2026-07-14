/**
 * Cornerstone Hoops table names in the shared Dugout Intel Supabase project.
 * Prefixed with choops_ to avoid collisions with existing tables.
 */
export const CHOOPS_TABLES = {
  profiles: "choops_profiles",
  trainers: "choops_trainers",
  programs: "choops_programs",
  sessionTypes: "choops_session_types",
  sessions: "choops_sessions",
  parents: "choops_parents",
  athletes: "choops_athletes",
  bookings: "choops_bookings",
  waitlistEntries: "choops_waitlist_entries",
  reviews: "choops_reviews",
  businessSettings: "choops_business_settings",
  blockedTimes: "choops_blocked_times",
} as const;
