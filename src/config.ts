import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
        // If all locales use the same pathname, a single
        // external path can be used for all locales.
        '/': '/',
        '/contact':'/contact',
    
        // If locales use different paths, you can
        // specify each external path per locale.
        '/testimonials': {
            en: '/testimonials',
            fr: '/temoignages'
        },
        '/before_and_after': {
            en: '/before_and_after',
            fr: '/avant_et_apres'
        },
    
        // Dynamic params are supported via square brackets
        '/gallery/[slug]': {
            en: 'gallery/[slug]',
            fr: '/realisations/[slug]'
        },
        '/services/[slug]': {
            en: 'services/[slug]',
            fr: '/prestations/[slug]'
        }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;