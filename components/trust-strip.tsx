import { trustPoints } from "@/data/site-content";

export function TrustStrip() {
  return (
    <section
      aria-label="Training highlights"
      className="relative z-10 -mt-10 px-4 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-3 rounded-xl border-2 border-brand-dark/10 bg-white p-4 shadow-xl sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {trustPoints.map((point, index) => (
          <div
            key={point.title}
            className="flex gap-3 border-brand-dark/10 px-2 py-2 sm:border-r sm:last:border-r-0"
          >
            <span
              className="font-display text-2xl font-bold leading-none text-brand-primary"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display text-sm font-bold tracking-wide text-brand-dark normal-case">
                {point.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-brand-muted">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
