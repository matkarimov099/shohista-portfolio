import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CoursesSection } from "@/features/courses";
import type { Locale } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

const seoData: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Courses",
    description:
      "Explore English language courses offered by Shohista. IELTS preparation, General English, and more.",
  },
  ru: {
    title: "Курсы",
    description:
      "Изучите курсы английского языка от Шохисты. Подготовка к IELTS, общий английский и другие.",
  },
  uz: {
    title: "Kurslar",
    description:
      "Shohista taqdim etgan ingliz tili kurslarini ko'ring. IELTS tayyorgarlik, umumiy ingliz tili va boshqalar.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const data = seoData[loc] || seoData.en;

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: "/courses",
    locale: loc,
  });
}

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-10">
      <CoursesSection />
    </main>
  );
}
