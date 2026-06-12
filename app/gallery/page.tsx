import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery – Queen Quatters Girls PG Near PCCOE, Nigdi Pune",
  description:
    "Browse all photos of Queen Quatters PG — rooms, washrooms, balcony, common areas, and building exterior. Best girls PG near PCCOE Nigdi Pune.",
  alternates: {
    canonical: "https://www.queenquatters.in/gallery",
  },
};

// ✅ ADD ALL YOUR PHOTOS HERE
const allPhotos = [
  // ── Existing photos (already in your repo) ──
  { src: "/images/room-interior.webp",   label: "Room Interior",              alt: "Clean and spacious room interior at Queen Quatters girls PG near PCCOE Nigdi Pune" },
  { src: "/images/washroom.webp",        label: "Washroom",                   alt: "Well-maintained clean washroom at Queen Quatters PG Pradhikaran Nigdi" },
  { src: "/images/balcony.webp",         label: "Balcony View",               alt: "Open balcony with fresh air view at Queen Quatters girls hostel near PCCOE" },
  { src: "/images/outer building.jpeg",  label: "Building Exterior",          alt: "Building exterior of Queen Quatters PG behind PCCOE Sector 26 Nigdi" },
  { src: "/images/bunkbed.webp",         label: "Bunk Bed",                   alt: "Bunk bed room at Queen Quatters safe girls PG Nigdi Pune" },
  { src: "/images/common-space.webp",    label: "Common Space",               alt: "Quiet study space for students at Queen Quatters PG near PCCOE" },

  // ── New photos (upload these to public/images/) ──
  { src: "/images/bed2.jpeg",    label: "Single Room – Bed & Wardrobe",  alt: "Single room with bed and wardrobe at Queen Quatters girls PG Nigdi Pune" },
  { src: "/images/bed1.jpeg",    label: "Double Sharing Room",           alt: "Double sharing room with two beds at Queen Quatters PG near PCCOE" },
  { src: "/images/room1.jpeg",   label: "Triple Sharing Room",           alt: "Spacious triple sharing room at Queen Quatters girls hostel Nigdi" },
  { src: "/images/bed32.jpeg",   label: "Single Bed with Storage",       alt: "Single bed with personal wardrobe storage at Queen Quatters PG Pune" },
  { src: "/images/bed31.jpeg",   label: "Single Room with Wardrobe",     alt: "Single room with wardrobe and window at Queen Quatters PG near PCCOE Nigdi" },
  { src: "/images/room4.jpeg",   label: "Spacious Sharing Room",         alt: "Spacious sharing room with two wardrobes at Queen Quatters girls PG Nigdi" },
  { src: "/images/room2.jpeg",   label: "Double Sharing – Room View",    alt: "Double sharing room view at Queen Quatters PG Pradhikaran Nigdi Pune" },
  { src: "/images/bed12.jpeg",   label: "Double Sharing Room",           alt: "Two beds in double sharing room at Queen Quatters girls PG near PCCOE" },
  { src: "/images/room3.jpeg",   label: "Room with Balcony Access",      alt: "Room with direct balcony access at Queen Quatters PG Nigdi Pune" },
  { src: "/images/balcony1.jpeg", label: "Balcony View",                 alt: "Balcony with street view at Queen Quatters girls PG near PCCOE Nigdi" },
  { src: "/images/balcony.jpeg",  label: "Balcony with Garden View",     alt: "Open balcony with garden and trees at Queen Quatters PG Sector 26 Nigdi Pune" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 gradient-rose min-h-screen">
        <div className="container-narrow px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Link
              href="/#gallery"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              ← Back to Home
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose">
              Gallery
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
              All Photos – Queen Quatters
            </h1>
            <div className="gold-divider" />
            <p className="text-muted-foreground mt-4 text-sm">
              {allPhotos.length} photos · Rooms, washrooms, common areas &amp; more
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {allPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                  <span className="text-primary-foreground text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Want to see more? <a href="/#contact" className="text-primary hover:underline">Book a visit</a> to tour the PG in person.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
