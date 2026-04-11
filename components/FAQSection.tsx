"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Is Queen Quatters PG safe for girls?",
    a: "Absolutely. Queen Quatters is designed exclusively for girl students. The premises are CCTV monitored, the environment is girls-only, and we maintain strict safety standards for your peace of mind.",
  },
  {
    q: "How far is Queen Quatters from PCCOE college?",
    a: "Queen Quatters is located right behind PCCOE College in Sector 26, Pradhikaran, Nigdi. You can walk to college in just a few minutes — it's one of the closest PG accommodations to PCCOE.",
  },
  {
    q: "What sharing room options are available?",
    a: "We offer Double Sharing, Triple Sharing, and 4 Sharing options to suit different budgets and preferences of PCCOE students.",
  },
  {
    q: "Is food provided at Queen Quatters?",
    a: "Food is not provided at Queen Quatters. This gives you complete flexibility to choose your own meals, tiffin services, or nearby restaurants in Nigdi based on your taste and budget.",
  },
  {
    q: "What amenities are included in the PG?",
    a: "We provide beds, cupboards, clean washrooms, WiFi, open balcony, washing machine, fresh water twice a day, CCTV security, and regular housekeeping.",
  },
  {
    q: "Is WiFi available at Queen Quatters PG?",
    a: "Yes, reliable WiFi is available for study, assignments, and staying connected with family — essential for PCCOE students.",
  },
  {
    q: "Is housekeeping available?",
    a: "Yes, we provide regular housekeeping to ensure the rooms and common areas are clean and well-maintained at all times.",
  },
  {
    q: "How can I book a visit or enquire about rooms?",
    a: "You can fill in the enquiry form on this page, call us directly, or send us a WhatsApp message. We'll arrange a visit at your convenience to show you the rooms.",
  },
];

function AccordionItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-card rounded-xl border border-border px-5">
      <button
        className="w-full flex items-center justify-between text-left py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-xl"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-sm font-semibold text-foreground pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding gradient-plum"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-plum">
            FAQs
          </p>
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Frequently Asked Questions
          </h2>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-3" role="list">
          {faqs.map((f, i) => (
            <div key={i} role="listitem">
              <AccordionItem
                faq={f}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
