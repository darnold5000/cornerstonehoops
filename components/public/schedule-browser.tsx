"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, ChevronDown } from "lucide-react";
import { SessionCard } from "@/components/public/session-card";
import { Label } from "@/components/ui/label";
import type { SessionType, SessionWithRelations } from "@/lib/types/database";
import {
  formatSessionDateShort,
  formatSessionTime,
} from "@/lib/format";
import { cn } from "@/lib/utils";

const AGE_OPTIONS = Array.from({ length: 14 }, (_, i) => String(i + 5));

const fieldClass =
  "h-11 w-full rounded-lg border-2 border-brand-dark/15 bg-white px-3 text-sm text-brand-dark shadow-none outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

function SelectField({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        className={cn(fieldClass, "appearance-none pr-10")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-brand-primary"
        aria-hidden
      />
    </div>
  );
}

export function ScheduleBrowser({
  sessions,
  sessionTypes,
  initialType,
  initialAge,
  initialDate,
}: {
  sessions: SessionWithRelations[];
  sessionTypes: SessionType[];
  initialType?: string;
  initialAge?: string;
  initialDate?: string;
}) {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [type, setType] = useState(initialType ?? "");
  const [age, setAge] = useState(initialAge ?? "");
  const [date, setDate] = useState(initialDate ?? "");

  const filtered = useMemo(() => {
    return sessions.filter((session) => {
      if (type && session.session_type?.slug !== type) return false;
      if (date && session.session_date !== date) return false;
      if (age) {
        const n = Number(age);
        if (
          Number.isFinite(n) &&
          ((session.minimum_age != null && n < session.minimum_age) ||
            (session.maximum_age != null && n > session.maximum_age))
        ) {
          return false;
        }
      }
      return true;
    });
  }, [sessions, type, age, date]);

  const byDate = useMemo(() => {
    const map = new Map<string, SessionWithRelations[]>();
    for (const session of filtered) {
      const list = map.get(session.session_date) ?? [];
      list.push(session);
      map.set(session.session_date, list);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const sessionDateBounds = useMemo(() => {
    const dates = [...new Set(sessions.map((s) => s.session_date))].sort();
    return {
      min: dates[0],
      max: dates[dates.length - 1],
    };
  }, [sessions]);

  return (
    <div className="space-y-6">
      <form
        className="grid items-end gap-4 rounded-xl border-2 border-brand-dark/10 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-1.5">
          <Label htmlFor="type" className="font-medium text-brand-dark">
            Session type
          </Label>
          <SelectField id="type" value={type} onChange={setType}>
            <option value="">All types</option>
            {sessionTypes.map((t) => (
              <option key={t.id} value={t.slug}>
                {t.name}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="age" className="font-medium text-brand-dark">
            Athlete age
          </Label>
          <SelectField id="age" value={age} onChange={setAge}>
            <option value="">Any age</option>
            {AGE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </SelectField>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="date" className="font-medium text-brand-dark">
            Date
          </Label>
          <div className="relative">
            <CalendarDays
              className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-brand-primary"
              aria-hidden
            />
            <input
              id="date"
              type="date"
              value={date}
              min={sessionDateBounds.min}
              max={sessionDateBounds.max}
              onChange={(e) => setDate(e.target.value)}
              className={cn(fieldClass, "cursor-pointer pl-10")}
            />
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="h-11 w-full rounded-lg border-2 border-brand-dark/15 bg-brand-light px-6 font-display text-sm font-bold tracking-wide text-brand-dark transition hover:border-brand-primary hover:text-brand-primary lg:w-auto"
            onClick={() => {
              setType("");
              setAge("");
              setDate("");
            }}
          >
            Clear
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-brand-muted">
          {filtered.length} session{filtered.length === 1 ? "" : "s"}
        </p>
        <div className="inline-flex rounded-lg border-2 border-brand-dark/10 bg-white p-1">
          <button
            type="button"
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition",
              view === "list"
                ? "bg-brand-dark text-white"
                : "text-brand-muted hover:text-brand-dark",
            )}
            onClick={() => setView("list")}
          >
            List
          </button>
          <button
            type="button"
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition",
              view === "calendar"
                ? "bg-brand-dark text-white"
                : "text-brand-muted hover:text-brand-dark",
            )}
            onClick={() => setView("calendar")}
          >
            Calendar
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border-2 border-dashed border-brand-dark/15 p-8 text-center text-brand-muted">
          No sessions match these filters.
        </p>
      ) : view === "list" ? (
        <div className="grid gap-4">
          {filtered.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6">
          {byDate.map(([day, daySessions]) => (
            <section key={day}>
              <h2 className="mb-3 font-display text-xl tracking-wide text-brand-dark">
                {formatSessionDateShort(day)}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {daySessions.map((session) => (
                  <Link
                    key={session.id}
                    href={`/schedule/${session.id}`}
                    className="rounded-xl border-2 border-brand-dark/10 bg-white p-4 shadow-sm transition hover:border-brand-primary"
                  >
                    <p className="text-sm font-semibold text-brand-primary">
                      {formatSessionTime(session.start_time)}
                    </p>
                    <h3 className="mt-1 font-display text-lg tracking-wide text-brand-dark">
                      {session.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted">
                      {(session.spots_remaining ?? 0) > 0
                        ? `${session.spots_remaining} spots left`
                        : "Full"}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
