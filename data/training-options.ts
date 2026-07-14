export type TrainingOption = {
  id: string;
  name: string;
  description: string;
  audience?: string;
  duration?: string;
  price?: string;
  location?: string;
  badge?: string;
  bookingHref: string;
};

export const trainingOptions: TrainingOption[] = [
  {
    id: "group-skills",
    name: "Youth Skills Training",
    description:
      "Group basketball training sessions focused on core fundamentals, confidence, and competitive habits in a supportive environment.",
    audience: "Grades K–12 (grouped by session)",
    duration: "1 hour",
    price: "$20 per session",
    location: "Capitol Sports, Plainfield, IN",
    badge: "Open Sessions",
    bookingHref: "/schedule",
  },
  {
    id: "younger-athletes",
    name: "Grades K–4 / Younger Groups",
    description:
      "Age-appropriate sessions for younger athletes learning fundamentals with positive encouragement and clear instruction.",
    audience: "Grades K–4 and younger groups",
    duration: "1 hour",
    price: "$20 per session",
    location: "Capitol Sports, Plainfield, IN",
    badge: "Youth Focused",
    bookingHref: "/schedule?age=8",
  },
  {
    id: "older-athletes",
    name: "Grades 5–12 / Older Groups",
    description:
      "Training blocks for older athletes ready to sharpen skills, compete hard, and grow as leaders on the court.",
    audience: "Grades 5–12",
    duration: "1 hour",
    price: "$20 per session",
    location: "Capitol Sports, Plainfield, IN",
    badge: "Game Ready",
    bookingHref: "/schedule?age=12",
  },
];
