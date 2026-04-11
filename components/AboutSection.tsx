import { MapPin, ShieldCheck, Sparkles, BookOpen, Home, Coffee } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  {
    icon: MapPin,
    title: "Right Behind PCCOE",
    desc: "Walk to college in minutes — no commute, no stress.",
  },
  {
    icon: ShieldCheck,
    title: "Safe for Girls",
    desc: "A secure environment designed specifically for girl students.",
  },
  {
    icon: Sparkles,
    title: "Clean & Maintained",
    desc: "Regular housekeeping and well-maintained rooms and washrooms.",
  },
  {
    icon: BookOpen,
    title: "Student-Friendly",
    desc: "A setup that understands and supports student life.",
  },
  {
    icon: Home,
    title: "Practical Amenities",
    desc: "Everything you need daily — WiFi, washing machine, cupboards, and more.",
  },
  {
    icon: Coffee,
    title: "Convenient Location",
    desc: "Close to shops, eateries, and everyday essentials in Nigdi.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding gradient-rose"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose">
            Why Choose Us
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Your Ideal Girls PG Stay Near PCCOE
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Queen Quatters offers a peaceful, clean, and safe girls&apos; PG
            right behind PCCOE. We&apos;ve designed everything to make student
            life in Pradhikaran, Nigdi, Pune easier and more comfortable.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <ScrollReveal
              key={p.title}
              delay={i * 80}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-rose" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
