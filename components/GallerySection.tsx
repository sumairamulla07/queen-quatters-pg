import ScrollReveal from "./ScrollReveal";

const gallery = [
  { src: "/images/room-interior.webp", label: "Room Interior", alt: "Clean and spacious room interior at Queen Quatters girls PG near PCCOE Nigdi Pune" },
  { src: "/images/washroom.webp", label: "Washroom",      alt: "Well-maintained clean washroom at Queen Quatters PG Pradhikaran Nigdi" },
  { src: "/images/balcony.webp", label: "Balcony View",  alt: "Open balcony with fresh air view at Queen Quatters girls hostel near PCCOE" },
  { src: "/images/outer building.jpeg", label: "Building Exterior", alt: "Building exterior of Queen Quatters PG behind PCCOE Sector 26 Nigdi" },
  { src: "/images/bunkbed.webp", label: "Bunk Bed at Reasonable Price",   alt: "Common area at Queen Quatters safe girls PG Nigdi Pune" },
  { src: "/images/common-space.webp", label: "Common Space",   alt: "Quiet study space for students at Queen Quatters PG near PCCOE" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding gradient-rose"
      aria-labelledby="gallery-heading"
    >
      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            Take a Look Inside Queen Quatters
          </h2>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((g, i) => (
            <ScrollReveal
              key={g.label}
              delay={i * 60}
              className="relative group rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                <span className="text-primary-foreground text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * More photos will be updated soon. Book a visit to see the PG in
          person.
        </p>
      </div>
    </section>
  );
}
