# Komilova Shohista Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)

**Komilova Shohista** — 8+ yillik tajribaga ega ingliz tili o'qituvchisi va Express Education Center asoschisining rasmiy portfolio veb-sayti.

## [Saytni ko'rish](https://komilova.uz)

---

## Xususiyatlar

- **Ko'p tilli** — O'zbek, Ingliz, Rus (next-intl)
- **Zamonaviy UI** — Glassmorphism effektlar va animatsiyalar
- **Kurslar** — IELTS, Umumiy ingliz, Biznes ingliz, Bolalar uchun ingliz
- **Tajriba tarixi** — Timeline ko'rinishida ish tajribasi
- **O'quvchilar fikrlari** — Muvaffaqiyat hikoyalari
- **SEO optimallashtirilgan** — Schema.org, OpenGraph, Twitter Cards
- **Responsive** — Mobil qurilmalarga moslashgan
- **Tez ishlash** — React Compiler, Vercel Analytics

---

## Texnologiyalar

| Kategoriya | Texnologiya |
|------------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Til** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **3D Grafika** | Three.js, React Three Fiber |
| **Database** | Supabase |
| **Tarjima** | next-intl |
| **Animatsiyalar** | Motion (Framer Motion) |
| **UI Komponentlar** | Radix UI |
| **Ikonlar** | Tabler Icons |
| **Bildirishnomalar** | Sonner |
| **Analitika** | Vercel Analytics, Speed Insights |
| **Kod sifati** | Biome |

---

## Loyiha tuzilishi

```
shohista-portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Lokalizatsiya yo'llari
│   │   │   ├── about/            # Men haqimda sahifasi
│   │   │   ├── courses/          # Kurslar sahifasi
│   │   │   ├── testimonials/     # O'quvchilar fikrlari
│   │   │   └── contact/          # Bog'lanish sahifasi
│   │   ├── api/                  # API yo'llari
│   │   ├── sitemap.ts            # Dinamik sitemap
│   │   ├── robots.ts             # Robots.txt
│   │   └── layout.tsx            # Asosiy layout
│   │
│   ├── components/               # Qayta foydalaniladigan komponentlar
│   │   └── seo/                  # JSON-LD strukturali ma'lumotlar
│   │
│   ├── features/                 # Xususiyat modullari
│   │   ├── about/                # Men haqimda bo'limi
│   │   ├── courses/              # Kurslar bo'limi
│   │   ├── testimonials/         # Fikrlar bo'limi
│   │   ├── hero/                 # Hero bo'limi
│   │   ├── contact/              # Bog'lanish bo'limi
│   │   └── layout/               # Layout komponentlari
│   │
│   ├── lib/                      # Yordamchi funksiyalar
│   │   └── seo/                  # SEO konfiguratsiyasi
│   │
│   ├── i18n/                     # Xalqarolashtirish
│   │   └── routing.ts            # Lokale yo'nalishi
│   │
│   ├── messages/                 # Tarjima fayllari
│   │   ├── uz.json               # O'zbek tili
│   │   ├── en.json               # Ingliz tili
│   │   └── ru.json               # Rus tili
│   │
│   └── shared/                   # Umumiy komponentlar va konfiguratsiya
│
├── public/                       # Statik fayllar
├── biome.json                    # Kod sifati konfiguratsiyasi
└── tsconfig.json                 # TypeScript konfiguratsiyasi
```

---

## Boshlash

### Talablar

- Node.js 20+
- pnpm

### O'rnatish

```bash
# Repozitoriyani klonlash
git clone <repository-url>
cd shohista-portfolio

# Bog'liqliklarni o'rnatish
pnpm install
```

### Ishlab chiqish

```bash
# Ishlab chiqish serverini ishga tushirish
pnpm dev

# http://localhost:3000 ni oching
```

### Build

```bash
# Production build
pnpm build

# Production serverni ishga tushirish
pnpm start
```

---

## Skriptlar

| Buyruq | Tavsif |
|--------|--------|
| `pnpm dev` | Ishlab chiqish serverini ishga tushirish |
| `pnpm build` | Production uchun build qilish |
| `pnpm start` | Production serverni ishga tushirish |
| `pnpm lint` | Biome bilan kodni tekshirish |
| `pnpm format` | Biome bilan kodni formatlash |
| `pnpm fix` | Lint xatolarini tuzatish va formatlash |

---

## SEO

Loyiha quyidagi SEO xususiyatlariga ega:

- Dinamik Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Schema.org strukturali ma'lumotlar
- OpenGraph teglar
- Twitter Cards
- Kanonik URL'lar
- Hreflang teglar (ko'p tilli)
- Meta tavsiflar

---

## Deployment

### Vercel

```bash
# Vercel CLI o'rnatish
pnpm add -g vercel

# Deploy qilish
vercel
```

---

## Muallif

**Komilova Shohista**

- Telegram: [@komilova_sh_7](https://t.me/komilova_sh_7)
- Instagram: [@expresseducation_uz](https://www.instagram.com/expresseducation_uz)
- Veb-sayt: [komilova.uz](https://komilova.uz)

---

## Foydalanilgan texnologiyalar

- [Next.js](https://nextjs.org) - React Framework
- [Tailwind CSS](https://tailwindcss.com) - CSS Framework
- [Three.js](https://threejs.org) - 3D Grafika
- [Supabase](https://supabase.com) - Backend
- [Motion](https://motion.dev) - Animatsiyalar
- [Radix UI](https://www.radix-ui.com) - UI Komponentlar
- [Tabler Icons](https://tabler-icons.io) - Ikonlar
