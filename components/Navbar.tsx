"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { PHONE, waLink } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Rooms", href: "#rooms" },
  { label: "Safety", href: "#safety" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WA_LINK = waLink("Hi, I'm interested in Queen Quatters PG near PCCOE. Please share details.");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/90 backdrop-blur-md border-b border-border"
      }`}
      aria-label="Main navigation"
    >
      <div className="container-narrow flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-display text-xl font-bold text-foreground tracking-tight"
          aria-label="Queen Quatters home"
        >
          Queen's <span className="text-gradient">Quatters</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+${PHONE}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Call Queen Quatters now"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-background border-t border-border px-4 pb-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3">
            <a href={`tel:+${PHONE}`} className="flex-1">
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Call Now
              </button>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full px-4 py-2 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary/5 transition-colors">
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
