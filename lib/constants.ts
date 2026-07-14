export const SITE = {
  name: "Cornerstone Hoops",
  shortName: "CH",
  tagline: "Training the Heart & the Hustle",
  description:
    "Cornerstone Hoops helps young athletes build basketball fundamentals, character, confidence, and mental toughness through positive, competitive training in Plainfield, Indiana.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "(317) 490-3263",
  phoneHref: "tel:+13174903263",
  email: "",
  address: {
    line1: "1915 Gladden Road",
    city: "Plainfield",
    state: "IN",
    postalCode: "46168",
    full: "Capitol Sports, 1915 Gladden Road, Plainfield, IN",
  },
  facebookUrl: "",
  timezone: "America/Indiana/Indianapolis",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068!2d-86.4!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5c0%3A0x0!2s1915%20Gladden%20Road%2C%20Plainfield%2C%20IN!5e0!3m2!1sen!2sus!4v1",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1915+Gladden+Road,+Plainfield,+IN",
  signalWorks: {
    name: "Signal Works",
    url: "https://hiresignalworks.com",
  },
  hoursPlaceholder: "Session times vary — check the schedule to reserve a spot",
  venmo: "@sara-corbin-3",
  zelle: "317-490-3263",
  priceDefault: 20,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#training", label: "Training" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "Meet the Coach" },
  { href: "/contact", label: "Contact" },
] as const;
