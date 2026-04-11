import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, BUSINESS_ADDRESS, PHONE_DISPLAY } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.queenquatters.in"; // Update with real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Queen Quatters – Safe Girls PG Near PCCOE, Nigdi | Pradhikaran, Pune",
    template: "%s | Queen Quatters PG Near PCCOE",
  },
  description:
    "Queen Quatters is a safe, clean, and comfortable girls-only PG accommodation right behind PCCOE college in Sector 26, Pradhikaran, Nigdi, Pune. WiFi, CCTV, housekeeping, washing machine included. Double, Triple & 4 sharing rooms available.",
  keywords: [
    "girls PG near PCCOE",
    "PG near PCCOE Nigdi",
    "girls hostel PCCOE",
    "PG Pradhikaran Nigdi Pune",
    "girls PG Nigdi Pune",
    "safe PG for girls Pune",
    "student PG near PCCOE",
    "PG accommodation Pradhikaran",
    "girls hostel Sector 26 Nigdi",
    "affordable PG near PCCOE",
    "PG with WiFi near PCCOE",
    "girls PG Akurdi",
    "PG near PCCOE college",
    "Queen Quatters PG",
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title:
      "Queen Quatters – Safe Girls PG Right Behind PCCOE, Nigdi, Pune",
    description:
      "Girls-only PG accommodation right behind PCCOE in Pradhikaran, Nigdi, Pune. Clean rooms, WiFi, CCTV security, housekeeping. Double/Triple/4 sharing available.",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Queen Quatters – Girls PG near PCCOE, Nigdi, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queen Quatters – Safe Girls PG Near PCCOE Nigdi Pune",
    description:
      "Girls-only PG right behind PCCOE. Clean, safe, WiFi, CCTV, housekeeping. Best location for PCCOE students.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Accommodation",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b2a56",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Structured Data for Local Business + FAQ
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: BUSINESS_NAME,
  description:
    "Safe, clean, and comfortable girls-only PG accommodation right behind PCCOE college in Sector 26, Pradhikaran, Nigdi, Pune.",
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Behind PCCOE, Sector 26, Pradhikaran",
    addressLocality: "Nigdi",
    addressRegion: "Maharashtra",
    postalCode: "411044",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.6529,
    longitude: 73.7624,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "CCTV Security", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Washing Machine",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Housekeeping",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Water Supply",
      value: true,
    },
  ],
  priceRange: "₹₹",
  servesCuisine: "N/A",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  image: `${SITE_URL}/og-image.jpg`,
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Queen Quatters PG safe for girls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Queen Quatters is designed exclusively for girl students. The premises are CCTV monitored, the environment is girls-only, and we maintain strict safety standards for your peace of mind.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Queen Quatters from PCCOE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Queen Quatters is located right behind PCCOE College in Sector 26, Pradhikaran, Nigdi. You can walk to college in just a few minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What sharing options are available at Queen Quatters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Double Sharing, Triple Sharing, and 4 Sharing room options to suit different budgets and preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Is food provided at Queen Quatters PG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food is not provided at Queen Quatters. This gives you complete flexibility to choose your own meals, tiffin services, or nearby restaurants based on your taste and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What amenities are included in Queen Quatters PG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide beds, cupboards, clean washrooms, WiFi, open balcony, washing machine, fresh water twice a day, CCTV security, and regular housekeeping.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a visit or enquire about Queen Quatters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can fill in the enquiry form on our website, call us directly, or send us a WhatsApp message. We will arrange a visit at your convenience.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Local business geo tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nigdi, Pune" />
        <meta name="geo.position" content="18.6529;73.7624" />
        <meta name="ICBM" content="18.6529, 73.7624" />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}
