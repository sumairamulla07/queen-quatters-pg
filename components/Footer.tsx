import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE, PHONE_DISPLAY, BUSINESS_ADDRESS, waLink } from "@/lib/utils";

const WA_LINK = waLink("Hi, I'm interested in Queen Quatters PG.");

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Safety", href: "#safety" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-foreground text-primary-foreground"
      role="contentinfo"
    >
      <div className="container-narrow px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">
              Queen <span className="text-gold">Quatters</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Safe, clean, and comfortable girls&apos; PG right behind PCCOE
              College, Pradhikaran, Nigdi, Pune — the best PG for girl students
              near PCCOE.
            </p>
            <address className="not-italic">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70 mb-2">
                <MapPin
                  className="w-4 h-4 text-gold shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone
                  className="w-4 h-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:+${PHONE}`}
                  className="hover:text-gold transition-colors"
                  aria-label={`Call Queen Quatters at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-base font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <h3 className="font-display text-base font-semibold mb-4">
              Ready to Move In?
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Don&apos;t wait — rooms fill up fast near PCCOE. Call now to check
              availability for girls PG in Nigdi, Pune.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:+${PHONE}`}
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Call Queen Quatters to check room availability"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now for Availability
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 border border-primary-foreground/20 text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                aria-label="Contact Queen Quatters on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          <p>
            &copy; {year} Queen Quatters. All rights reserved. | Girls PG near
            PCCOE, Pradhikaran, Nigdi, Pune, Maharashtra
          </p>
          <p className="mt-1">
            Safe girls PG accommodation in Sector 26, Pradhikaran, Nigdi for
            PCCOE students
          </p>
        </div>
      </div>
    </footer>
  );
}
