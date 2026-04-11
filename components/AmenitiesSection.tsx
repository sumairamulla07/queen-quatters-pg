import {
  BedDouble,
  Lock,
  Droplets,
  Wifi,
  Wind,
  WashingMachine,
  Eye,
  Sparkles,
  Info,
  Flame,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const amenities = [
  { icon: BedDouble, label: "Bed" },
  { icon: Lock, label: "Cupboard" },
  { icon: Sparkles, label: "Clean Washrooms" },
  { icon: Wifi, label: "WiFi" },
  { icon: Wind, label: "Open Balcony" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Flame, label: "Hot Water Geyser" },
  { icon: Droplets, label: "Kitchen with Stove" },
  { icon: Eye, label: "CCTV Security" },
  { icon: Sparkles, label: "Housekeeping" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="section-padding"
      aria-labelledby="amenities-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            What&apos;s Included
          </p>
          <h2
            id="amenities-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Amenities for Comfortable Living
          </h2>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {amenities.map((a, i) => (
            <ScrollReveal
              key={`${a.label}-${i}`}
              delay={i * 50}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center mb-3">
                <a.icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {a.label}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 flex items-start gap-3 p-4 rounded-lg bg-gold-light/50 border border-gold/20 max-w-2xl mx-auto">
          <Info
            className="w-5 h-5 text-gold mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Food is not provided.</strong>{" "}
            This gives you the flexibility to choose your own meals, tiffin
            service, or nearby eateries based on your taste and budget.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
