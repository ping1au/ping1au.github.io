'use client'
import { useLocale, useTranslations } from 'next-intl';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export default function LocaleSwitcher() {
    const locales = ['en', 'fr'] as const;
    const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    }

    return (
        <select className='bg-gray-50'
            defaultValue={locale}
            onChange={onLocaleChange}
        >
            {locales.map((lang) => (
                <option key={lang} value={lang}>
                    {/* {t('locale', {locale: lang})} */}
                    {/* {t('language')} */}
                    {lang == "en" ? "ENG": "FR"}
                </option>
            ))}
        </select>
    )
}