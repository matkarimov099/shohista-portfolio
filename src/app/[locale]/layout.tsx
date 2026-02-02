import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/seo";
import { Providers } from "@/core/providers";
import { FloatingTelegramButton } from "@/features/layout/components/FloatingTelegramButton";
import { LanguageSwitcher } from "@/features/layout/components/LanguageSwitcher";
import { NavDock } from "@/features/layout/components/NavDock";
import { SocialDock } from "@/features/layout/components/SocialDock";
import { routing } from "@/i18n/routing";
import {
  generatePersonSchema,
  generateWebSiteSchema,
} from "@/lib/seo/structured-data";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <Providers>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {/* JSON-LD Structured Data */}
        <JsonLd data={generatePersonSchema()} />
        <JsonLd data={generateWebSiteSchema()} />

        {children}
        <NavDock />
        <SocialDock />
        <LanguageSwitcher />
        <FloatingTelegramButton />
        <Toaster
          position="top-center"
          richColors
          closeButton
          duration={4000}
          toastOptions={{
            classNames: {
              toast: "font-sans",
              title: "text-foreground",
              description: "text-muted-foreground",
            },
          }}
        />
      </NextIntlClientProvider>
    </Providers>
  );
}
