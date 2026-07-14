"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SessionWithRelations } from "@/lib/types/database";
import {
  ageRangeLabel,
  durationMinutes,
  formatPrice,
  formatSessionDateShort,
  formatSessionTime,
} from "@/lib/format";
import { cn } from "@/lib/utils";

export function SessionCard({ session }: { session: SessionWithRelations }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const spots = session.spots_remaining ?? 0;
  const full = spots <= 0;

  return (
    <article className="rounded-xl border-2 border-brand-dark/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {session.session_type?.name ? (
              <Badge variant="secondary">{session.session_type.name}</Badge>
            ) : null}
            {full ? <Badge variant="destructive">Full</Badge> : null}
            {spots > 0 && spots <= 3 ? (
              <Badge className="bg-brand-accent text-brand-dark hover:bg-brand-accent">
                {spots} spots remaining
              </Badge>
            ) : null}
          </div>
          <h3 className="font-display text-xl tracking-wide text-brand-dark normal-case">
            {session.title}
          </h3>
          <p className="text-sm text-brand-muted">
            {formatSessionDateShort(session.session_date)} ·{" "}
            {formatSessionTime(session.start_time)} ·{" "}
            {durationMinutes(session.start_time, session.end_time)} min
          </p>
          <p className="text-sm text-brand-muted">
            {ageRangeLabel(session.minimum_age, session.maximum_age)}
            {session.trainer?.name ? ` · ${session.trainer.name}` : ""}
            {" · "}
            {formatPrice(session.price)}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border-2 border-brand-dark/15 bg-white px-3 text-sm font-semibold text-brand-dark transition hover:border-brand-primary hover:text-brand-primary"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide details" : "Details"}
            <ChevronDown
              className={cn(
                "size-4 transition-transform",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </button>
          {full ? (
            <Link
              href={`/book/${session.id}?waitlist=1`}
              className="inline-flex h-10 items-center justify-center rounded-lg border-2 border-brand-dark bg-brand-dark px-4 text-sm font-bold text-white transition hover:bg-brand-charcoal"
            >
              Join Waitlist
            </Link>
          ) : (
            <Link
              href={`/book/${session.id}`}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-accent px-4 text-sm font-bold text-brand-dark transition hover:brightness-95"
            >
              Book
            </Link>
          )}
        </div>
      </div>

      {open ? (
        <div
          id={detailsId}
          className="mt-4 space-y-3 border-t-2 border-brand-dark/10 pt-4 text-sm"
        >
          {session.description ? (
            <p className="text-brand-muted">{session.description}</p>
          ) : null}
          <dl className="grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-brand-muted">Spots</dt>
              <dd className="font-medium text-brand-dark">
                {full ? "Full" : `${spots} remaining`}
              </dd>
            </div>
            {session.skill_level ? (
              <div>
                <dt className="text-brand-muted">Skill level</dt>
                <dd className="font-medium text-brand-dark">
                  {session.skill_level}
                </dd>
              </div>
            ) : null}
            {session.location_name || session.location_address ? (
              <div className="sm:col-span-2">
                <dt className="text-brand-muted">Location</dt>
                <dd className="font-medium text-brand-dark">
                  {[session.location_name, session.location_address]
                    .filter(Boolean)
                    .join(" — ")}
                </dd>
              </div>
            ) : null}
            {session.what_to_bring ? (
              <div className="sm:col-span-2">
                <dt className="text-brand-muted">What to bring</dt>
                <dd className="font-medium text-brand-dark">
                  {session.what_to_bring}
                </dd>
              </div>
            ) : null}
            {session.cancellation_policy ? (
              <div className="sm:col-span-2">
                <dt className="text-brand-muted">Cancellation</dt>
                <dd className="font-medium text-brand-dark">
                  {session.cancellation_policy}
                </dd>
              </div>
            ) : null}
          </dl>
          <Link
            href={`/schedule/${session.id}`}
            className="inline-flex font-semibold text-brand-primary underline-offset-2 hover:underline"
          >
            View full session page
          </Link>
        </div>
      ) : null}
    </article>
  );
}
