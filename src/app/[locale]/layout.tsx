import Footer from "@/app/_components/footer";
import Navigation from "@/app/_components/navigation";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";

// Can be imported from a shared config
const locales = ['en', 'fr'];
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "FDC Renovations",
    description: "From plumbing, electrical, framing to detailed millwork and final paint we provide turnkey profession.",
};

//function to get the translations
async function getMessages(locale: string) {
    try {
      return (await import(`../../../messages/${locale}.json`)).default
    } catch (error) {
      notFound()
    }
  }

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    const messages = await getMessages(locale);
    unstable_setRequestLocale(locale);
    return (
      <html lang={locale}>
        <head>
            <link rel='icon' href='/favicon.ico'/>
        </head>
        <body className={inter.className}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Navigation />
                    {children}
                <Footer />
            </NextIntlClientProvider>
        </body>
      </html>
    );
  }