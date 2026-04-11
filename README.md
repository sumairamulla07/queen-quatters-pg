# Queen Quatters – Next.js Website

A production-ready **Next.js 14** website for Queen Quatters Girls PG near PCCOE, Nigdi, Pune.

Migrated from React + Vite (Lovable) to **Next.js App Router** with full SEO optimization.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
queen-quarters-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + structured data
│   ├── page.tsx            # Homepage (SSR)
│   ├── globals.css         # Global styles + CSS variables
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   ├── robots.ts           # Auto-generated robots.txt
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx          # [Client] Sticky nav with scroll detection
│   ├── HeroSection.tsx     # [Server] Hero with H1, priority image
│   ├── AboutSection.tsx    # [Server] Why Choose Us
│   ├── AmenitiesSection.tsx # [Server] Amenities grid
│   ├── RoomsSection.tsx    # [Server] Room types
│   ├── SafetySection.tsx   # [Server] Safety features
│   ├── LocationSection.tsx # [Server] Location + Google Maps
│   ├── LifestyleSection.tsx # [Server] Student lifestyle
│   ├── GallerySection.tsx  # [Server] Photo gallery
│   ├── TestimonialsSection.tsx # [Server] Reviews + Review schema
│   ├── FAQSection.tsx      # [Client] Accordion FAQ
│   ├── LeadForm.tsx        # [Client] Enquiry form
│   ├── Footer.tsx          # [Server] Footer with address schema
│   ├── FloatingButtons.tsx # [Client] Sticky WhatsApp + Call buttons
│   └── ScrollReveal.tsx    # [Client] IntersectionObserver animations
├── lib/
│   └── utils.ts            # Shared constants (phone, WA links, etc.)
├── public/
│   ├── images/
│   │   └── hero-room.jpg   # ⚠️ Add your actual photos here
│   ├── og-image.jpg        # ⚠️ Add 1200×630 OG image
│   ├── favicon.ico         # ⚠️ Add your favicon
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔧 Configuration Steps

### 1. Update Phone Number
In `lib/utils.ts`, replace `919XXXXXXXXX` with the actual phone number:
```ts
export const PHONE = "919876543210"; // Replace with real number
export const PHONE_DISPLAY = "+91 98765 43210";
```

### 2. Update Domain
Replace `https://www.queenquatters.in` with the actual domain in:
- `app/layout.tsx` → `SITE_URL`
- `app/sitemap.ts` → `SITE_URL`
- `app/robots.ts` → `SITE_URL`
- `next.config.js` → redirects

### 3. Add Images
Place your actual photos in `public/images/`:
- `hero-room.jpg` — Main hero background (1920×1080)
- `room-double.jpg`, `room-triple.jpg`, `room-4sharing.jpg`
- `washroom.jpg`, `balcony.jpg`, `building.jpg`, `common-area.jpg`
- `og-image.jpg` — Open Graph image (1200×630)

Then update `GallerySection.tsx` with correct image paths and alt texts.

### 4. Update Google Maps
In `LocationSection.tsx`, replace the Google Maps embed URL with the actual location embed from Google Maps → Share → Embed a map.

### 5. Deploy
#### Vercel (Recommended — free, auto-deploys)
```bash
npm install -g vercel
vercel
```

#### Other platforms
- **Netlify**: `npm run build` → deploy `.next` folder
- **cPanel/traditional hosting**: Use `output: 'export'` in next.config.js for static HTML

---

## 📈 SEO Features Implemented

| Feature | Implementation |
|---|---|
| **Server-Side Rendering** | All sections rendered on server (faster, crawlable) |
| **Structured Data (JSON-LD)** | LocalBusiness, FAQPage, Review schemas |
| **Meta tags** | title, description, keywords, og:*, twitter:* |
| **Canonical URL** | Prevents duplicate content penalties |
| **XML Sitemap** | Auto-generated at `/sitemap.xml` |
| **robots.txt** | Auto-generated at `/robots.txt` |
| **Semantic HTML** | Proper h1→h6 hierarchy, landmarks, ARIA |
| **Image optimization** | `fetchPriority="high"` on hero, `loading="lazy"` on rest |
| **Local SEO** | geo meta tags, LocalBusiness schema with address |
| **Core Web Vitals** | Next.js font optimization, compression, caching headers |
| **Mobile-first** | Responsive design, touch-friendly CTAs |
| **Accessibility** | ARIA labels, focus management, keyboard navigation |

### Keywords Targeted
- Girls PG near PCCOE
- PG Pradhikaran Nigdi Pune
- Safe girls hostel PCCOE
- Girls PG Nigdi Pune
- PG accommodation near PCCOE college
- Student PG near PCCOE Akurdi

---

## ⚡ Performance Tips

1. **Convert hero image to WebP/AVIF** for ~30% smaller file size
2. **Add real Google Analytics** (GA4) for tracking conversions
3. **Connect a form backend** (Formspree / EmailJS / your own API) so enquiries land in email
4. **Add Google Search Console** and submit sitemap after deployment
5. **Get Google Business Profile** listing — critical for local search visibility

---

## 📞 Support

Built by migrating from the Lovable (React + Vite) project to Next.js 14 App Router for maximum SEO and performance.
