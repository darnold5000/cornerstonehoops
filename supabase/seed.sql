-- Seed data for Cornerstone Hoops. Run after 001_initial.sql

insert into public.choops_business_settings (
  business_name, phone, email, address_line_1, address_line_2, city, state, postal_code,
  facebook_url, business_hours, cancellation_policy, booking_policy, map_embed_url,
  homepage_announcement
)
select
  'Cornerstone Hoops',
  '(317) 490-3263',
  null,
  '1915 Gladden Road',
  'Capitol Sports',
  'Plainfield',
  'IN',
  '46168',
  null,
  'Session times vary — check the schedule to reserve a spot',
  'Please contact Cornerstone Hoops if you need to change a registration.',
  'Reservations hold your athlete''s spot. Payment is $20 per session via Venmo (@sara-corbin-3) or Zelle (317-490-3263). Parent or legal guardian must book for minors. Provide your child''s name and grade when booking.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068!2d-86.4!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1915%20Gladden%20Road%2C%20Plainfield%2C%20IN!5e0!3m2!1sen!2sus!4v1',
  'NOW BOOKING • Upcoming training sessions available'
where not exists (select 1 from public.choops_business_settings);

insert into public.choops_session_types (name, slug)
values
  ('Group Training', 'group-training'),
  ('Clinic', 'clinic'),
  ('Camp', 'camp')
on conflict (slug) do nothing;

insert into public.choops_programs (
  name, slug, short_description, full_description, minimum_age, maximum_age,
  default_duration_minutes, default_capacity, default_price, image_url, active, featured, display_order
)
values
  ('Grades K–4 Training', 'grades-k-4',
   'Age-appropriate basketball skills training for younger athletes.',
   'Group sessions focused on core fundamentals, positive encouragement, and a competitive but supportive environment.',
   5, 10, 60, 25, 20, '/images/cornerstone-logo.png', true, true, 1),
  ('Grades 5–12 Training', 'grades-5-12',
   'Skills training for older athletes ready to sharpen fundamentals.',
   'Group sessions for Grades 5–12 focused on strong fundamentals and competitive habits.',
   10, 18, 60, 25, 20, '/images/cornerstone-logo.png', true, true, 2),
  ('Youth Skills Training', 'youth-skills',
   'Open group basketball training focused on fundamentals and character.',
   'Training sessions designed to teach core basketball fundamentals while building character, confidence, and mental toughness.',
   5, 18, 60, 20, 20, '/images/cornerstone-logo.png', true, true, 3)
on conflict (slug) do nothing;

insert into public.choops_trainers (name, title, bio, photo_url, specialties, active, display_order)
select
  'Sara Corbin',
  'Trainer & Organizer',
  'Sara leads Cornerstone Hoops sessions focused on strong fundamentals, positive encouragement, and a competitive but supportive environment.',
  '/images/cornerstone-logo.png',
  array['Basketball Fundamentals', 'Youth Development', 'Confidence Building'],
  true,
  1
where not exists (select 1 from public.choops_trainers where name = 'Sara Corbin');

-- Starter sessions (relative to when seed is run)
insert into public.choops_sessions (
  program_id, session_type_id, trainer_id, title, description,
  session_date, start_time, end_time, minimum_age, maximum_age, skill_level,
  capacity, price, payment_requirement, location_name, location_address,
  what_to_bring, cancellation_policy, status, published_at
)
select
  p.id, st.id, t.id,
  'Grades K–4 Training',
  'Core basketball fundamentals with positive encouragement for younger athletes.',
  (current_date + 1),
  '10:00', '11:00',
  5, 10, 'Beginner',
  25, 20, 'pay_at_facility',
  'Capitol Sports',
  'Capitol Sports, 1915 Gladden Road, Plainfield, IN',
  'Arrive 10 minutes early. Athletic shoes, water bottle, and comfortable basketball clothes.',
  'Please contact Cornerstone Hoops if you need to change a registration.',
  'published', now()
from public.choops_programs p
cross join public.choops_session_types st
cross join public.choops_trainers t
where p.slug = 'grades-k-4' and st.slug = 'group-training' and t.name = 'Sara Corbin'
  and not exists (
    select 1 from public.choops_sessions s
    where s.title = 'Grades K–4 Training' and s.session_date = current_date + 1
  );

insert into public.choops_sessions (
  program_id, session_type_id, trainer_id, title, description,
  session_date, start_time, end_time, minimum_age, maximum_age, skill_level,
  capacity, price, payment_requirement, location_name, location_address,
  what_to_bring, cancellation_policy, status, published_at
)
select
  p.id, st.id, t.id,
  'Grades 5–12 Training',
  'Skills training for older athletes ready to compete with confidence.',
  (current_date + 1),
  '11:00', '12:00',
  10, 18, 'All levels',
  25, 20, 'pay_at_facility',
  'Capitol Sports',
  'Capitol Sports, 1915 Gladden Road, Plainfield, IN',
  'Arrive 10 minutes early. Athletic shoes, water bottle, and comfortable basketball clothes.',
  'Please contact Cornerstone Hoops if you need to change a registration.',
  'published', now()
from public.choops_programs p
cross join public.choops_session_types st
cross join public.choops_trainers t
where p.slug = 'grades-5-12' and st.slug = 'group-training' and t.name = 'Sara Corbin'
  and not exists (
    select 1 from public.choops_sessions s
    where s.title = 'Grades 5–12 Training' and s.session_date = current_date + 1
  );
