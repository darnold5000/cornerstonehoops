/**
 * CH table names in the shared Dugout Intel Supabase project.
 * Prefixed to avoid collisions with existing tables.
 */
export const CH_TABLES = {
  profiles: "ch_profiles",
  trainers: "ch_trainers",
  programs: "ch_programs",
  sessionTypes: "ch_session_types",
  sessions: "ch_sessions",
  parents: "ch_parents",
  athletes: "ch_athletes",
  bookings: "ch_bookings",
  waitlistEntries: "ch_waitlist_entries",
  reviews: "ch_reviews",
  businessSettings: "ch_business_settings",
  blockedTimes: "ch_blocked_times",
} as const;
