import { MapPin, Clock, ShoppingBag, GraduationCap, Footprints, Train } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const perks = [
  { icon: MapPin, text: "Right behind PCCOE campus, Sector 26, Pradhikaran" },
  { icon: Clock, text: "Saves daily travel time for PCCOE students" },
  { icon: Footprints, text: "Walk to PCCOE college in minutes" },
  { icon: ShoppingBag, text: "Close to shops, eateries and essentials in Nigdi" },
  { icon: GraduationCap, text: "Ideal location for focused student life" },
  { icon: Train, text: "10 mins away from Nigdi Bus Stop & Akurdi Railway Station" },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="section-padding gradient-gold"
      aria-labelledby="location-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Prime Location
          </p>
          <h2
            id="location-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Best Location for PCCOE Students in Nigdi
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in Sector 26, Pradhikaran, Nigdi — right behind PCCOE and
            near Akurdi Railway Station. You can&apos;t get closer to campus than
            this for girls PG in Pune.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {perks.map((p, i) => (
            <ScrollReveal
              key={p.text}
              delay={i * 80}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <p.icon
                className="w-5 h-5 text-gold shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {p.text}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Maps Embed — lazy loaded for performance */}
        <ScrollReveal className="rounded-xl overflow-hidden border border-border h-64 md:h-80 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.144097185172!2d73.75994788640523!3d18.657528679720265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b922b1c336af%3A0xdc959b21f6f959da!2sGirls%20PG%20(Hostel)!5e0!3m2!1sen!2sin!4v1776195050843!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Queen Quatters Girls PG location near PCCOE, Sector 26, Pradhikaran, Nigdi, Pune"
            aria-label="Google Map showing Queen Quatters location near PCCOE"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
