import { MapPin, ShieldCheck, Sparkles, Wifi, Eye } from "lucide-react";
import { PHONE, waLink } from "@/lib/utils";

const WA_LINK = waLink("Hi, I'd like to book a visit to Queen Quatters PG near PCCOE.");

const badges = [
  { icon: MapPin, label: "Right Behind PCCOE" },
  { icon: Eye, label: "CCTV Security" },
  { icon: Sparkles, label: "Clean Washrooms" },
  { icon: Wifi, label: "WiFi Available" },
  { icon: ShieldCheck, label: "Housekeeping" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-7"
      aria-label="Hero - Girls PG near PCCOE"
    >
      {/* Background image - uses CSS for SSR compatibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-room.avif"
          alt="Clean and comfortable girls PG room at Queen Quatters near PCCOE, Nigdi, Pune"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 py-10 md:py-16">
        <div className="max-w-3xl">
          <span className="hero-animate inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold border border-gold/30 mb-6">
            Girls PG in Pradhikaran, Nigdi
          </span>

          <h1 className="hero-animate-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-5">
            Safe &amp; Comfortable Girls PG{" "}
            <span className="text-gold">Right Behind PCCOE</span>
          </h1>

          <p className="hero-animate-delay-1 text-lg md:text-xl text-primary-foreground/80 mb-8 font-body leading-relaxed max-w-xl">
            Clean, secure, student-friendly accommodation in a prime location
            near PCCOE college with all daily essentials for a comfortable stay
            starting at ₹3,999/month.
          <a className="text-gold hover:underline " style={{ fontSize: '0.875rem' }}>
            (No Hidden Charges)
          </a>
          </p>


          <div className="hero-animate-delay-2 flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-2 bg-primary text-primary-foreground text-base font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Book a visit to Queen Quatters PG"
            >
              Book a Visit
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-2 border border-primary-foreground/40 text-primary-foreground text-base font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              aria-label="Contact Queen Quatters on WhatsApp"
            >
              WhatsApp Now
            </a>
          </div>

          <div className="hero-animate-delay-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-primary-foreground text-xs font-medium"
              >
                <b.icon
                  className="w-3.5 h-3.5 text-gold"
                  aria-hidden="true"
                />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
