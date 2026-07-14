# Cornerstone Hoops

Youth basketball training website and scheduling platform for Cornerstone Hoops (Plainfield, IN).

This project is **not affiliated with cornerstonehoops.com**.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS
- Supabase (Postgres, Auth, RLS) with `choops_*` table prefixes
- Resend for booking emails
- Pay at facility (Venmo / Zelle); Stripe stubs reserved for later

Scheduling is ported from the DAWG Youth Training platform pattern.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Without Supabase env vars the public site and admin UI run in **demo mode** using seeded fallback content. Bookings return a local confirmation number.

## Supabase setup

1. Use the shared Dugout Intel Supabase project (same pattern as DAWG / Oak Tree).
2. Run [`supabase/migrations/001_initial.sql`](supabase/migrations/001_initial.sql).
3. Run [`supabase/seed.sql`](supabase/seed.sql).
4. Create an Auth user in Supabase (invitation only — no public signup).
5. Insert a matching `choops_profiles` row:

```sql
insert into public.choops_profiles (id, full_name, email, role, active)
values ('<auth-user-uuid>', 'Owner Name', 'owner@email.com', 'owner', true);
```

6. Set env vars from `.env.example`.

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing homepage |
| `/schedule` | Public schedule + filters |
| `/book/[sessionId]` | Booking / waitlist |
| `/admin` | Staff dashboard |
| `/admin/sessions` | Session CRUD |
| `/admin/sessions/[id]/roster` | Roster |
| `/admin/bookings` | Bookings list |
| `/admin/settings` | Business contact CMS |

## Content

Historical SignupGenius extraction notes live in `CONTENT-AUDIT.md`. Live schedule data comes from Supabase (or demo fallback in `lib/fallback-data.ts`).

Editable marketing copy: `data/site-content.ts`, `data/training-options.ts`, `data/faq.ts`.

## Website credit

Footer includes **Website by Signal Works**.
