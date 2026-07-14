"use client";

import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import { siteContent } from "@/data/site-content";

type FormState = "idle" | "submitting" | "success" | "error";

const interests = [
  "Grades K–4 / younger group",
  "Grades 5–12 / older group",
  "General skills training",
  "Not sure — need guidance",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setState("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const parentName = String(data.get("parentName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!parentName || !email || !message) {
      setError("Please complete the required fields.");
      setState("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setState("error");
      return;
    }

    const phone = String(data.get("phone") || "").trim();
    const athleteName = String(data.get("athleteName") || "").trim();
    const athleteAge = String(data.get("athleteAge") || "").trim();
    const interest = String(data.get("interest") || "").trim();

    const subject = encodeURIComponent(
      `Cornerstone Hoops inquiry from ${parentName}`,
    );
    const body = encodeURIComponent(
      [
        `Parent/Guardian: ${parentName}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Athlete: ${athleteName || "—"}`,
        `Age/Grade: ${athleteAge || "—"}`,
        `Interest: ${interest || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    // Mailto when a public email exists; otherwise open the phone dialer.
    const destination = siteContent.email
      ? `mailto:${siteContent.email}?subject=${subject}&body=${body}`
      : `tel:${siteContent.phone}`;

    track("contact_submit");

    if (siteContent.email) {
      window.location.href = destination;
      setState("success");
      form.reset();
      return;
    }

    // No public email yet — open phone dialer with a clear success message.
    window.location.href = `tel:${siteContent.phone}`;
    setState("success");
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="athletic-card space-y-4 p-5 sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent or guardian name" name="parentName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Athlete name" name="athleteName" />
        <Field label="Athlete age or grade" name="athleteAge" />
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-brand-dark">
            Training interest
          </span>
          <select
            name="interest"
            className="min-h-11 w-full rounded border-2 border-brand-dark/15 bg-white px-3 py-2 text-brand-dark focus:border-brand-primary focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-brand-dark">
          Message <span className="text-brand-primary">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded border-2 border-brand-dark/15 bg-white px-3 py-2 text-brand-dark focus:border-brand-primary focus:outline-none"
        />
      </label>

      {error ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {state === "success" ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          {siteContent.email
            ? "Thanks — your message draft is opening in your email app."
            : "Thanks — your phone dialer is opening so you can reach Sara Corbin directly."}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={state === "submitting"}
      >
        <span>{state === "submitting" ? "Sending…" : "Send Message"}</span>
      </button>

      <p className="text-xs text-brand-muted">
        Expect a response within 1–2 business days. For the fastest path to a
        session, reserve directly on the schedule page.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-brand-dark">
        {label}
        {required ? <span className="text-brand-primary"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 w-full rounded border-2 border-brand-dark/15 bg-white px-3 py-2 text-brand-dark focus:border-brand-primary focus:outline-none"
      />
    </label>
  );
}
