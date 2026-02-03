import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo";
import { AboutSection } from "@/features/about";
import type { Locale } from "@/lib/seo/config";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { generateProfilePageSchema } from "@/lib/seo/structured-data";

type Props = {
  params: Promise<{ locale: string }>;
};

const seoData: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "About Komilova Shohista - English Teacher",
    description:
      "About Komilova Shohista - English Teacher from Uzbekistan with 8+ years of experience. Expert in IELTS preparation, CEFR courses, General and Business English. Founder of Express Education Center, currently teaching at Unione International School.",
  },
  ru: {
    title: "О Комиловой Шохисте - Учитель английского языка",
    description:
      "О Комиловой Шохисте - Преподаватель английского языка из Узбекистана с опытом 8+ лет. Эксперт в подготовке к IELTS, курсах CEFR, общем и деловом английском. Основатель Express Education Center, преподаёт в Unione International School.",
  },
  uz: {
    title: "Komilova Shohista haqida - Ingliz tili o'qituvchisi",
    description:
      "Komilova Shohista haqida - O'zbekistondan 8+ yillik tajribaga ega ingliz tili o'qituvchisi. IELTS tayyorgarlik, CEFR kurslari, umumiy va biznes ingliz tili bo'yicha ekspert. Express Education Center asoschisi, Unione International Schoolda dars beradi.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const data = seoData[loc] || seoData.en;

  return generatePageMetadata({
    title: data.title,
    description: data.description,
    path: "/about",
    locale: loc,
    type: "profile",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-10">
      <JsonLd data={generateProfilePageSchema(locale)} />
      <AboutSection />
    </main>
  );
}
