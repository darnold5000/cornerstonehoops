import { addDays, format } from "date-fns";
import type {
  BusinessSettings,
  Program,
  SessionType,
  SessionWithRelations,
  Trainer,
  Review,
} from "@/lib/types/database";
import { SITE } from "@/lib/constants";

/** Local fallback when Supabase is not configured. Marked as SAMPLE in admin. */

export const FALLBACK_PROGRAMS: Program[] = [
  {
    id: "prog-k4",
    name: "Grades K–4 Training",
    slug: "grades-k-4",
    short_description:
      "Age-appropriate basketball skills training for younger athletes building fundamentals and confidence.",
    full_description:
      "Group sessions focused on core fundamentals, positive encouragement, and a competitive but supportive environment for Grades K–4.",
    minimum_age: 5,
    maximum_age: 10,
    default_duration_minutes: 60,
    default_capacity: 25,
    default_price: 20,
    image_url: "/images/cornerstone-logo.png",
    active: true,
    featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "prog-5-12",
    name: "Grades 5–12 Training",
    slug: "grades-5-12",
    short_description:
      "Skills training for older athletes ready to sharpen fundamentals and compete with confidence.",
    full_description:
      "Group sessions for Grades 5–12 focused on strong fundamentals, decision-making, and competitive habits.",
    minimum_age: 10,
    maximum_age: 18,
    default_duration_minutes: 60,
    default_capacity: 25,
    default_price: 20,
    image_url: "/images/cornerstone-logo.png",
    active: true,
    featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "prog-open",
    name: "Youth Skills Training",
    slug: "youth-skills",
    short_description:
      "Open group basketball training focused on fundamentals, character, and love for the game.",
    full_description:
      "Training sessions designed to teach core basketball fundamentals while building character, confidence, and mental toughness.",
    minimum_age: 5,
    maximum_age: 18,
    default_duration_minutes: 60,
    default_capacity: 20,
    default_price: 20,
    image_url: "/images/cornerstone-logo.png",
    active: true,
    featured: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const FALLBACK_SESSION_TYPES: SessionType[] = [
  { id: "st-group", name: "Group Training", slug: "group-training", active: true },
  { id: "st-clinic", name: "Clinic", slug: "clinic", active: true },
  { id: "st-camp", name: "Camp", slug: "camp", active: true },
];

export const FALLBACK_TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    profile_id: null,
    name: "Sara Corbin",
    title: "Trainer & Organizer",
    bio: "Sara leads Cornerstone Hoops sessions focused on strong fundamentals, positive encouragement, and a competitive but supportive environment.",
    photo_url: "/images/cornerstone-logo.png",
    specialties: ["Basketball Fundamentals", "Youth Development", "Confidence Building"],
    certifications: [],
    coaching_experience: "Youth basketball training in Plainfield, Indiana",
    sports_background: "Basketball training",
    active: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

function sampleDate(daysAhead: number): string {
  return format(addDays(new Date(), daysAhead), "yyyy-MM-dd");
}

const bringNote =
  "Arrive 10 minutes early. Athletic shoes, water bottle, and comfortable basketball clothes.";
const cancelNote =
  "Please contact Cornerstone Hoops if you need to change a registration.";

export const FALLBACK_SESSIONS: SessionWithRelations[] = [
  {
    id: "sess-1",
    program_id: "prog-k4",
    session_type_id: "st-group",
    trainer_id: "trainer-1",
    title: "Grades K–4 Training",
    description:
      "Core basketball fundamentals with positive encouragement for younger athletes.",
    session_date: sampleDate(1),
    start_time: "10:00:00",
    end_time: "11:00:00",
    timezone: SITE.timezone,
    minimum_age: 5,
    maximum_age: 10,
    skill_level: "Beginner",
    capacity: 25,
    price: 20,
    deposit_amount: null,
    payment_requirement: "pay_at_facility",
    location_name: "Capitol Sports",
    location_address: SITE.address.full,
    what_to_bring: bringNote,
    cancellation_policy: cancelNote,
    status: "published",
    featured: true,
    published_at: new Date().toISOString(),
    recurrence_group_id: null,
    created_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    program: FALLBACK_PROGRAMS[0],
    session_type: FALLBACK_SESSION_TYPES[0],
    trainer: FALLBACK_TRAINERS[0],
    booked_count: 5,
    spots_remaining: 20,
  },
  {
    id: "sess-2",
    program_id: "prog-5-12",
    session_type_id: "st-group",
    trainer_id: "trainer-1",
    title: "Grades 5–12 Training",
    description:
      "Skills training for older athletes ready to compete with confidence.",
    session_date: sampleDate(1),
    start_time: "11:00:00",
    end_time: "12:00:00",
    timezone: SITE.timezone,
    minimum_age: 10,
    maximum_age: 18,
    skill_level: "All levels",
    capacity: 25,
    price: 20,
    deposit_amount: null,
    payment_requirement: "pay_at_facility",
    location_name: "Capitol Sports",
    location_address: SITE.address.full,
    what_to_bring: bringNote,
    cancellation_policy: cancelNote,
    status: "published",
    featured: true,
    published_at: new Date().toISOString(),
    recurrence_group_id: null,
    created_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    program: FALLBACK_PROGRAMS[1],
    session_type: FALLBACK_SESSION_TYPES[0],
    trainer: FALLBACK_TRAINERS[0],
    booked_count: 2,
    spots_remaining: 23,
  },
  {
    id: "sess-3",
    program_id: "prog-open",
    session_type_id: "st-group",
    trainer_id: "trainer-1",
    title: "Youth Skills Training",
    description: "Open group basketball training focused on fundamentals.",
    session_date: sampleDate(8),
    start_time: "16:00:00",
    end_time: "17:00:00",
    timezone: SITE.timezone,
    minimum_age: 5,
    maximum_age: 18,
    skill_level: "All levels",
    capacity: 20,
    price: 20,
    deposit_amount: null,
    payment_requirement: "pay_at_facility",
    location_name: "Capitol Sports",
    location_address: SITE.address.full,
    what_to_bring: bringNote,
    cancellation_policy: cancelNote,
    status: "published",
    featured: false,
    published_at: new Date().toISOString(),
    recurrence_group_id: null,
    created_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    program: FALLBACK_PROGRAMS[2],
    session_type: FALLBACK_SESSION_TYPES[0],
    trainer: FALLBACK_TRAINERS[0],
    booked_count: 0,
    spots_remaining: 20,
  },
];

export const FALLBACK_REVIEWS: Review[] = [];

export const FALLBACK_SETTINGS: BusinessSettings = {
  id: "settings-1",
  business_name: SITE.name,
  phone: SITE.phone,
  email: SITE.email || null,
  address_line_1: SITE.address.line1,
  address_line_2: "Capitol Sports",
  city: SITE.address.city,
  state: SITE.address.state,
  postal_code: SITE.address.postalCode,
  map_embed_url: SITE.mapEmbedUrl,
  facebook_url: SITE.facebookUrl || null,
  business_hours: SITE.hoursPlaceholder,
  homepage_announcement: "NOW BOOKING • Upcoming training sessions available",
  cancellation_policy: cancelNote,
  booking_policy:
    "Reservations hold your athlete's spot. Payment is $20 per session via Venmo (@sara-corbin-3) or Zelle (317-490-3263). Parent or legal guardian must book for minors. Provide your child's name and grade when booking.",
  updated_at: new Date().toISOString(),
};
