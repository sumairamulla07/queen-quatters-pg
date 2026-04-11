import { Wind, Wifi, Sparkles, WashingMachine, Droplets, Smile } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    icon: Wind,
    title: "Fresh & Airy",
    desc: "Open balcony for fresh air and a refreshing break between study sessions.",
  },
  {
    icon: Wifi,
    title: "Reliable WiFi",
    desc: "Stay connected for assignments, research, and staying in touch with family.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    desc: "Regular cleaning so you can focus on studies, not chores.",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine",
    desc: "On-premises laundry convenience — no need to go outside.",
  },
  {
    icon: Droplets,
    title: "Fresh Water",
    desc: "Clean drinking water supplied twice a day.",
  },
  {
    icon: Smile,
    title: "Comfortable Setup",
    desc: "A well-designed space for everyday student life near PCCOE.",
  },
];

export default function LifestyleSection() {
  return (
    <section
      className="section-padding"
      aria-labelledby="lifestyle-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-plum">
            Student Life
          </p>
          <h2
            id="lifestyle-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Designed for Student Comfort
          </h2>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 80}
              className="p-6 rounded-xl bg-plum-light/40 border border-plum/10 hover:shadow-md transition-shadow"
            >
              <item.icon
                className="w-6 h-6 text-plum mb-3"
                aria-hidden="true"
              />
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
