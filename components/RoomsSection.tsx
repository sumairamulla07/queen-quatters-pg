import { Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { waLink } from "@/lib/utils";

const WA_LINK = waLink("Hi, I want to know about room availability at Queen Quatters.");

const rooms = [
  {
    type: "Double Sharing",
    people: 2,
    desc: "Ideal for students who prefer a quieter, more personal space with a single roommate.",
    badge: "Popular",
  },
  {
    type: "Triple Sharing",
    people: 3,
    desc: "A balanced option with comfortable space and friendly company for student life.",
    badge: null,
  },
  {
    type: "4 Sharing",
    people: 4,
    desc: "Budget-friendly with a lively student atmosphere — great for social students.",
    badge: "Best Value",
  },
];

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      className="section-padding gradient-plum"
      aria-labelledby="rooms-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-plum">
            Room Options
          </p>
          <h2
            id="rooms-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Choose Your Room Type
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comfortable and budget-friendly room options designed for PCCOE
            students with practical storage, ventilation, and everyday
            convenience.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r, i) => (
            <ScrollReveal
              key={r.type}
              delay={i * 120}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-xl transition-shadow text-center relative"
            >
              {r.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {r.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-plum-light mx-auto flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-plum" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {r.type}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {r.desc}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 border border-plum/30 text-plum text-sm font-medium rounded-lg hover:bg-plum/5 transition-colors focus:outline-none focus:ring-2 focus:ring-plum"
                aria-label={`Enquire about ${r.type} room at Queen Quatters`}
              >
                Enquire Now
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
