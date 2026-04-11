"use client";

import { Phone, MessageCircle } from "lucide-react";
import { PHONE, waLink } from "@/lib/utils";

const WA_LINK = waLink("Hi, I'm interested in Queen Quatters PG near PCCOE.");

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-3"
      role="complementary"
      aria-label="Quick contact options"
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors animate-float focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Contact Queen Quatters on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
      <a
        href={`tel:+${PHONE}`}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Call Queen Quatters now"
      >
        <Phone className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
}
