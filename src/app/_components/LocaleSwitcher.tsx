'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation'; // From your i18n/navigation.ts
import { useParams } from 'next/navigation'; // For dynamic params

export default function LocaleSwitcher() {
  const locales = ['en', 'fr'] as const;
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); // Returns { slug: string } on /gallery/[slug], {} on static routes

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as typeof locales[number];
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <select
      className="bg-gray-50"
      value={locale}
      onChange={onLocaleChange}
      aria-label={t('selectLanguage')}
    >
      {locales.map((lang) => (
        <option key={lang} value={lang}>
          {t(lang === 'en' ? 'english' : 'french')}
        </option>
      ))}
    </select>
  );
}