"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="section-label">FAQ</p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-none text-brand-dark sm:text-5xl">
          Common Questions
        </h2>
        <div className="mt-8 divide-y divide-brand-dark/10 border-y border-brand-dark/10">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}-panel`;
            const buttonId = `${baseId}-${item.id}-button`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span className="font-display text-base font-bold tracking-wide text-brand-dark normal-case">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-brand-primary transition-transform",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-4 text-sm leading-relaxed text-brand-muted"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
