import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/features/hero";
import type { Locale } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

const seoData: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Komilova Shohista | English Teacher Uzbekistan",
    description:
      "Komilova Shohista - English Teacher from Uzbekistan with 8+ years of experience. Expert in IELTS preparation, CEFR courses, General and Business English. Founder of Express Education Center, Urgench.",
  },
  ru: {
    title: "Комилова Шохиста | Учитель английского языка Узбекистан",
    description:
      "Комилова Шохиста - Преподаватель английского языка из Узбекистана с опытом 8+ лет. Эксперт в подготовке к IELTS, курсах CEFR, общем и деловом английском. Основатель Express Education Center, Ургенч.",
  },
  uz: {
    title: "Komilova Shohista | Ingliz tili o'qituvchisi O'zbekiston",
    description:
      "Komilova Shohista - O'zbekistondan 8+ yillik tajribaga ega ingliz tili o'qituvchisi. IELTS tayyorgarlik, CEFR kurslari, umumiy va biznes ingliz tili bo'yicha ekspert. Express Education Center asoschisi, Urganch.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const data = seoData[loc] || seoData.en;

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: "",
    locale: loc,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="h-screen overflow-hidden">
      <HeroSection />
    </main>
  );
}
