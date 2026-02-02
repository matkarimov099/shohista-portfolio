import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TestimonialsSection } from "@/features/testimonials";
import type { Locale } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

const seoData: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Testimonials",
    description:
      "Read testimonials and reviews from students and colleagues about Shohista's teaching and mentorship.",
  },
  ru: {
    title: "Отзывы",
    description:
      "Читайте отзывы и рецензии от студентов и коллег о преподавании и наставничестве Шохисты.",
  },
  uz: {
    title: "Fikrlar",
    description:
      "Shohista o'qituvchiligi va mentorlik haqida talabalar va hamkasblarning fikr va sharhlarini o'qing.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const data = seoData[loc] || seoData.en;

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: "/testimonials",
    locale: loc,
  });
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-10">
      <TestimonialsSection />
    </main>
  );
}
