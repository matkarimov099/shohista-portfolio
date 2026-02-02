import { BASE_URL, seoConfig } from "./config";

/**
 * Schema.org Person - Portfolio egasi haqida
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: seoConfig.author.name,
    alternateName: seoConfig.author.alternateName,
    url: BASE_URL,
    jobTitle: seoConfig.author.jobTitle,
    description: `${seoConfig.author.name} - ${seoConfig.author.jobTitle} from Uzbekistan. 8+ years of experience, 2000+ students, 90% certification rate. Founder of Express Education Center.`,
    sameAs: [
      seoConfig.social.telegram,
      seoConfig.social.instagram,
    ],
    knowsAbout: [
      "English Teaching",
      "IELTS Preparation",
      "CEFR Assessment",
      "General English",
      "Business English",
      "Kids Education",
      "Speaking Skills",
      "Grammar",
      "Vocabulary",
      "Test Preparation",
    ],
    worksFor: [
      {
        "@type": "EducationalOrganization",
        name: "Express Education Center",
        description: "English Language Learning Center",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
      },
      {
        "@type": "School",
        name: "Unione International School",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "Uzbekistan",
    },
  };
}

/**
 * Schema.org WebSite - Sayt haqida umumiy ma'lumot
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: seoConfig.siteName,
    alternateName: seoConfig.siteNameShort,
    description: `Official portfolio website of ${seoConfig.author.name}, ${seoConfig.author.jobTitle} from Uzbekistan. 8+ years of experience teaching English, specializing in IELTS, CEFR, General and Business English.`,
    publisher: {
      "@id": `${BASE_URL}/#person`,
    },
    inLanguage: ["en", "ru", "uz"],
  };
}

/**
 * Schema.org BreadcrumbList - Navigatsiya uchun
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schema.org ProfilePage - About sahifasi uchun
 */
export function generateProfilePageSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": `${BASE_URL}/#person`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: locale,
  };
}
