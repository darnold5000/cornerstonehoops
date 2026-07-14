# Cornerstone Hoops — Content Audit

Source inspected: [SignupGenius — Cornerstone Hoops Training Sign Up](https://www.signupgenius.com/go/70A0F4FADAC22A2F49-62491007-cornerstone?useFullSite=true#/)

Extraction date: July 14, 2026  
Method: Playwright-rendered page + SignupGenius public API (`getSignupInfo`, `getSignUpThemeByUrlId`)

Participant names, emails, and registration comments were **not** scraped for site use.

---

## Verified Information

| Fact | Source detail |
| --- | --- |
| Business name | Cornerstone Hoops |
| Signup title | Cornerstone Hoops Training Sign Up |
| Organizer / contact name | Sara Corbin |
| Logo tagline | Training the Heart & the Hustle |
| Training description | Sessions teach core basketball fundamentals while building character, confidence, and mental toughness; help athletes grow as leaders and develop love for the game; focus on strong fundamentals, positive encouragement, and a competitive but supportive environment |
| Location | Capitol Sports, 1915 Gladden Road, Plainfield, IN |
| Session price | $20 per training session |
| Payment methods | Venmo `@sara-corbin-3` or Zelle `317-490-3263` |
| Phone (via Zelle) | 317-490-3263 |
| Arrival instruction | Athletes should arrive 10 minutes early |
| Registration notes | Register for a specific time slot; provide child’s name and grade level in comments |
| Session duration | Typically 1 hour (from slot start/end times) |
| Age / grade groups offered | Grades K–4; Grades 4 & Under; Grades 5 & Under; Ages 11 & up; Grades 5–12; Grades 6–12; some slots unlabeled (open signup) |
| Active registration URL | `https://www.signupgenius.com/go/70A0F4FADAC22A2F49-62491007-cornerstone?useFullSite=true#/` |
| Embed support | `ALLOWEMBED: false` — iframe embedding not permitted |
| Timezone display | EDT |
| Slot range in signup | First slot Feb 24, 2026; last slot July 15, 2026 |

### Upcoming sessions as of July 14, 2026

| Date | Day | Time | Group | Availability | Location |
| --- | --- | --- | --- | --- | --- |
| 2026-07-15 | Wednesday | 10:00 AM – 11:00 AM | Grades K–4 | 5 of 25 filled | Capitol Sports, 1915 Gladden Road |
| 2026-07-15 | Wednesday | 11:00 AM – 12:00 PM | Grades 5–12 | 2 of 25 filled | Capitol Sports, 1915 Gladden Road |

### Brand colors (from logo + SignupGenius theme)

| Role | Value | Notes |
| --- | --- | --- |
| Logo cream text | ~`#F5F0E1` | Display wordmark |
| Basketball orange | ~`#E85D04` | Primary energetic accent from logo ball |
| Accent gold | ~`#C9A227` | Small cross detail in logo |
| Near-black | `#0A0A0A` | Logo background |
| Theme charcoal | `#423F43` | SignupGenius text color |
| Theme peach | `#FDD4A6` | SignupGenius background (reference only) |
| Theme red | `#B53722` | SignupGenius header (stock theme) |

---

## Downloaded Assets

| Filename | Source URL | Dimensions | Used on site |
| --- | --- | --- | --- |
| `public/images/cornerstone-logo.png` | `https://s3.amazonaws.com/images.signupgenius.com/memberImages/412A3BC2E3F9E27016A7113677DDD2F8_72213909.png` | 1024×1024 PNG | Header, footer, hero, favicon source, OG |
| `public/images/cornerstone-logo-sm.png` | `https://s3.amazonaws.com/images.signupgenius.com/memberImages/C0A935443233D13CF0C87AA4F76551A9_72213909.png` | 325×325 PNG | Compact / fallback |
| `public/images/apple-touch-icon.png` | Derived from full logo | 180×180 | Apple touch icon |
| `public/images/favicon-32.png` | Derived from full logo | 32×32 | Favicon candidate |

### Assets inspected but **not** used as business photography

| Asset | Reason |
| --- | --- |
| SignupGenius stock theme `basketball_IV_header.jpg` / `basketball_IV_back.jpg` | Platform stock theme images, not Cornerstone-owned training photos |
| Facebook graph profile thumbnails | Participant avatars — private, not for marketing use |

No coach photograph or training action photographs were present on the SignupGenius page.

---

## Missing Information

- Complete coach biography / credentials
- Coach photograph
- Business-owned training / action photography
- Public email address
- Social media links (Instagram, Facebook, etc.)
- Cancellation / weather policy
- What athletes should bring (beyond arrive-early note)
- Testimonials
- Explicit “private training” vs “group only” product list (signup shows group slots)
- Preferred contact method beyond SignupGenius Contact + phone on Zelle
- Session renewal / next season schedule after July 15, 2026
- Formal business hours

---

## Owner Approval Needed

Rewritten marketing copy based on the verified SignupGenius description (philosophy pillars, parent benefits, FAQ answers that paraphrase arrival/payment/registration rules). These should be reviewed before launch.

Suggested headlines (not from source; brand voice only):

- “Build the Skills. Play with Confidence.”
- “Ready to Put in the Work?”
- “Coaching That Meets Players Where They Are”

---

## Potential Conflicts

- Location strings vary slightly across slots (`Capitol Sports 1915 Gladden Road Plainfield, IN` vs shorter `1915 Gladden Road Plainfield`). Normalized on site to: **Capitol Sports, 1915 Gladden Road, Plainfield, IN**.
- Some slots have no age/grade label; others use overlapping labels (e.g. “Grades 4 & Under” vs “Grades K–4”). Display each slot’s label as published.
- Price is stated in the description as $20; SignupGenius item `price` fields are `0` (payment collected offline via Venmo/Zelle).
- Phone appears only in the Zelle payment instruction; treat as verified contact number unless owner provides a different public line.
- No affiliation with unrelated `cornerstonehoops.com`.

---

## Implementation Notes

- Booking now uses the first-party scheduling platform (DAWG-pattern Supabase `ch_*` tables). SignupGenius is no longer the booking destination.
- Historical SignupGenius facts above remain the source for initial business copy and seed sessions.
- Testimonials section is prepared but hidden until real quotes are supplied.
- Coach biography uses a short verified blurb only; full bio marked `TODO` in data files and not fabricated on the page.
