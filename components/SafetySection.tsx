import { ShieldCheck, Eye, Sparkles, Heart, GraduationCap, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const safetyPoints = [
  {
    icon: Eye,
    title: "CCTV Monitored",
    desc: "Round-the-clock surveillance for your safety and peace of mind.",
  },
  {
    icon: Heart,
    title: "Kitchen & Dining",
    desc: "Clean kitchen with Gas Stove to your own meals during busy schedules.",
  },
  {
    icon: Sparkles,
    title: "Clean Washrooms",
    desc: "Regularly cleaned and well-maintained washroom facilities.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Daily Living",
    desc: "A comfortable and secure setup for stress-free daily living.",
  },
  {
    icon: GraduationCap,
    title: "Perfect for Students",
    desc: "Created for students staying away from home for their studies at PCCOE.",
  },
  {
    icon: Users,
    title: "Cooperative Owners",
    desc: "Friendly and approachable owners always ready to help and address your concerns."
  },
];

export default function SafetySection() {
  return (
    <section
      id="safety"
      className="section-padding"
      aria-labelledby="safety-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose">
            Safety First
          </p>
          <h2
            id="safety-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Your Safety is Our Priority
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As parents ourselves, we understand the importance of a safe and
            secure environment. Queen Quatters is built with your daughter&apos;s
            safety and comfort at heart.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPoints.map((p, i) => (
            <ScrollReveal
              key={p.title}
              delay={i * 80}
              className="flex gap-4 p-5 rounded-xl bg-rose-light/50 border border-rose/10"
            >
              <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-rose" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
