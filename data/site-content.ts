export const assetSources = {
  logo: {
    localPath: "/images/cornerstone-logo.png",
    sourceUrl:
      "https://s3.amazonaws.com/images.signupgenius.com/memberImages/412A3BC2E3F9E27016A7113677DDD2F8_72213909.png",
  },
  logoSmall: {
    localPath: "/images/cornerstone-logo-sm.png",
    sourceUrl:
      "https://s3.amazonaws.com/images.signupgenius.com/memberImages/C0A935443233D13CF0C87AA4F76551A9_72213909.png",
  },
} as const;

export const siteContent = {
  businessName: "Cornerstone Hoops",
  tagline: "Training the Heart & the Hustle",
  description:
    "These training sessions are designed to teach athletes the core fundamentals of basketball while building character, confidence, and mental toughness. The goal is not only to improve skills, but to help each athlete grow as a leader and develop a genuine love for the game. We'll focus on strong fundamentals, positive encouragement, and creating a competitive but supportive environment where players can thrive.",
  shortDescription:
    "Focused basketball instruction for young athletes in Plainfield, Indiana — fundamentals, confidence, and character.",
  city: "Plainfield",
  state: "IN",
  locationName: "Capitol Sports",
  address: "1915 Gladden Road",
  fullLocation: "Capitol Sports, 1915 Gladden Road, Plainfield, IN",
  phone: "317-490-3263",
  phoneDisplay: "(317) 490-3263",
  // TODO: Replace with owner-provided public email when available.
  email: "",
  venmo: "@sara-corbin-3",
  zelle: "317-490-3263",
  price: "$20",
  priceNote: "$20 per training session",
  paymentNote:
    "Payments can be made via Venmo (@sara-corbin-3) or Zelle (317-490-3263).",
  arrivalNote: "Athletes should arrive 10 minutes early to get ready so we can begin promptly.",
  registrationNote:
    "Please register for the specific time slot indicated in the signup, providing your child's name and grade level in the comments.",
  bookingPath: "/schedule",
  coach: {
    name: "Sara Corbin",
    role: "Trainer & Organizer",
    // TODO: Replace with coach-approved biography.
    biography: "",
    verifiedIntro:
      "Sara Corbin leads Cornerstone Hoops training sessions focused on strong fundamentals, positive encouragement, and a competitive but supportive environment where players can thrive.",
  },
  socialLinks: {
    // TODO: Add verified social URLs when provided by the owner.
    instagram: "",
    facebook: "",
  },
  announcement: {
    active: true,
    text: "NOW BOOKING • July 15 Training Sessions • Spots Available",
    href: "/schedule",
  },
  websiteCredit: {
    label: "Website by Signal Works",
    href: "https://hiresignalworks.com",
  },
  disclaimer:
    "Spots update as families reserve online. Confirm your booking on the session page.",
  notAffiliatedNote:
    "Cornerstone Hoops (Plainfield, IN) is an independent training program and is not affiliated with other organizations using a similar name.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#training", label: "Training" },
  { href: "/about", label: "Meet the Coach" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustPoints = [
  {
    title: "Strong Fundamentals",
    description: "Core basketball skills taught with clear, focused instruction.",
  },
  {
    title: "Character & Confidence",
    description: "Training that builds mental toughness and love for the game.",
  },
  {
    title: "Supportive Competition",
    description: "A competitive environment with positive encouragement.",
  },
  {
    title: "Easy Online Signup",
    description: "Reserve your athlete’s spot online in a few clicks.",
  },
] as const;

export const philosophyPillars = [
  {
    number: "01",
    title: "Strong Fundamentals",
    description:
      "Build the core skills that transfer to every game — handling, finishing, shooting habits, and defensive work.",
  },
  {
    number: "02",
    title: "Character & Leadership",
    description:
      "Help each athlete grow as a leader while developing confidence and mental toughness on and off the court.",
  },
  {
    number: "03",
    title: "Competitive Confidence",
    description:
      "Create a competitive but supportive environment where players can thrive through positive encouragement.",
  },
] as const;

export const parentBenefits = [
  {
    title: "Clear, focused instruction",
    description:
      "Sessions are built around core fundamentals so athletes know what they are working on.",
  },
  {
    title: "Age-appropriate groups",
    description:
      "Many sessions are organized by grade or age so athletes can train with peers at a similar stage.",
  },
  {
    title: "Positive coaching",
    description:
      "Encouragement and character development sit alongside skill work.",
  },
  {
    title: "Convenient scheduling",
    description:
      "Browse open slots online and reserve your athlete’s spot in a few clicks.",
  },
] as const;
