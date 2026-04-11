import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import RoomsSection from "@/components/RoomsSection";
import SafetySection from "@/components/SafetySection";
import LocationSection from "@/components/LocationSection";
import LifestyleSection from "@/components/LifestyleSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// Page-level metadata (extends layout metadata)
export const metadata: Metadata = {
  title: "Queen Quatters – #1 Safe Girls PG Near PCCOE, Nigdi, Pune",
  description:
    "Best girls PG accommodation right behind PCCOE in Sector 26, Pradhikaran, Nigdi, Pune. Clean rooms, CCTV security, WiFi, washing machine, housekeeping. Double, Triple & 4 sharing available. Book a visit today!",
  alternates: {
    canonical: "https://www.queenquatters.in",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* 1. Hero — above-the-fold, primary keyword in H1 */}
        <HeroSection />

        {/* 2. About — Why Choose Us, supports E-E-A-T */}
        <AboutSection />

        {/* 3. Amenities — feature keywords */}
        <AmenitiesSection />

        {/* 4. Rooms — product/service detail */}
        <RoomsSection />

        {/* 5. Safety — parent-focused trust signals */}
        <SafetySection />

        {/* 6. Location — local SEO, Google Maps embed */}
        <LocationSection />

        {/* 7. Lifestyle — student life content */}
        <LifestyleSection />

        {/* 8. Gallery — visual content, image ALTs for SEO */}
        <GallerySection />

        {/* 9. Testimonials — social proof, Review schema */}
        <TestimonialsSection />

        {/* 10. Lead Form — conversion CTA */}
        <LeadForm />

        {/* 11. FAQ — FAQ schema, long-tail keyword coverage */}
        <FAQSection />
      </main>

      <Footer />

      {/* Floating sticky CTAs */}
      <FloatingButtons />
    </>
  );
}
