export const BASE_URL = "https://komilova.uz";

export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
  uz: "uz_UZ",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbek",
};

export const seoConfig = {
  siteName: "Komilova Shohista",
  siteNameShort: "Shohista Komilova",
  author: {
    name: "Komilova Shohista",
    alternateName: "Shohista Komilova",
    url: BASE_URL,
    email: "",
    jobTitle: "English Teacher",
  },
  social: {
    telegram: "https://t.me/komilova_sh_7",
    instagram: "https://www.instagram.com/expresseducation_uz",
  },
  theme: {
    color: "#8b5cf6",
    backgroundColor: "#09090b",
  },
  keywords: [
    "Komilova Shohista",
    "Shohista Komilova",
    "English Teacher Uzbekistan",
    "IELTS Preparation",
    "IELTS Urgench",
    "CEFR",
    "Express Education Center",
    "Unione International School",
    "English Courses Tashkent",
    "Learn English Urgench",
    "General English",
    "Business English",
    "English for Kids",
    "English Teacher Urgench",
    "English Tutor Uzbekistan, Urgench",
    "IELTS Teacher",
    "English Speaking Course",
    "English Grammar",
    "Academic English",
    "Conversational English",
  ],
} as const;
