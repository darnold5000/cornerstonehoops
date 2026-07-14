export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  needsOwnerReview?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    id: "ages",
    question: "What ages do you train?",
    answer:
      "Sessions are offered for youth athletes across elementary through high school age groups. Individual sessions may be labeled Grades K–4, Grades 5–12, or open signup. Always check the specific session details when you reserve.",
  },
  {
    id: "location",
    question: "Where are sessions held?",
    answer:
      "Training is held at Capitol Sports, 1915 Gladden Road, Plainfield, IN.",
  },
  {
    id: "arrive",
    question: "What should athletes know before arriving?",
    answer:
      "Athletes should arrive 10 minutes early to get ready so the session can begin promptly. When booking, provide your child's name and grade.",
  },
  {
    id: "reserve",
    question: "How do I reserve a spot?",
    answer:
      "Browse the schedule on this website, open the session you want, and complete the booking form online. You'll receive a confirmation number when your spot is reserved.",
  },
  {
    id: "payment",
    question: "How does payment work?",
    answer:
      "The cost is $20 per training session. Payments can be made at the facility via Venmo (@sara-corbin-3) or Zelle (317-490-3263).",
  },
  {
    id: "full",
    question: "What happens if a session is full?",
    answer:
      "If a session is full, you can join the waitlist from the booking page or choose another available session.",
  },
  {
    id: "format",
    question: "Are sessions private or group-based?",
    answer:
      "Current offerings are group training sessions with multiple athlete spots per time slot, often organized by grade or age.",
  },
  {
    id: "cancel",
    question: "What is the cancellation policy?",
    answer:
      "Please contact Sara Corbin by phone if you need to change a registration. A formal cancellation policy will be posted once confirmed.",
    needsOwnerReview: true,
  },
];
