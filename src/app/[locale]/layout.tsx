// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';  // Stable API for v3.22+
import { notFound } from 'next/navigation';
import Navigation from "@/app/_components/navigation";
import Footer from "@/app/_components/footer";
import { Open_Sans } from 'next/font/google';
import { routing } from '@/i18n/routing';  // Import for locales/defaultLocale (adjust path if needed)
import "@/app/globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// Async metadata function (locale-aware for static per-locale SEO)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Use routing.defaultLocale or getTranslations for dynamic titles
  return {
    title: "FDC Renovations",  // Or t('title') if using getTranslations('Metadata')
    description: "From plumbing, electrical, framing to detailed millwork and final paint we provide turnkey profession.",
  };
}

// Generate static params for known locales (enables SSG for /en, /fr)
export function generateStaticParams() {
  //return routing.locales.map((locale) => ({ locale }));  // e.g., [{locale: 'en'}, {locale: 'fr'}]
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;  // Next.js 15 async params
}) {
  // Await params for static/dynamic support
  const { locale } = await params;

  // Validate locale (static-friendly; triggers 404 for invalid like /invalid)
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering: Set locale in request store (avoids dynamic headers())
  setRequestLocale(locale);

  // Load messages for this locale (integrates with setRequestLocale; static per locale)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={openSans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}