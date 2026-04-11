import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Priya S.",
    role: "PCCOE Student, 3rd Year",
    text: "Queen Quatters is literally behind my college. I save so much time daily. The rooms are clean, WiFi works well, and the environment is very safe for girls.",
    rating: 5,
  },
  {
    name: "Mrs. Kulkarni",
    role: "Parent",
    text: "As a parent, safety was my biggest concern. The CCTV monitoring, cleanliness, and the location right behind PCCOE gave me complete peace of mind.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    role: "PCCOE Student, 2nd Year",
    text: "I love the open balcony and the fact that everything is so well-maintained. The housekeeping is regular and the washing machine is super convenient.",
    rating: 5,
  },
  {
    name: "Anjali M.",
    role: "PCCOE Student, 1st Year",
    text: "Being new to Pune, I wanted a safe place close to college. Queen Quatters was the best choice — clean rooms, good WiFi, and very close to campus.",
    rating: 5,
  },
];

// Review structured data
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: testimonials.map((t, i) => ({
    "@type": "Review",
    position: i + 1,
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: "Queen Quatters",
    },
  })),
};

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding"
      aria-labelledby="testimonials-heading"
    >
      {/* Inline Review schema for this section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container-narrow">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3"
          >
            What Students &amp; Parents Say About Us
          </h2>
          <div className="gold-divider" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 100}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div
                className="flex gap-0.5 mb-3"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
