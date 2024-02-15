import {createLocalizedPathnamesNavigation, Pathnames} from 'next-intl/navigation';
 
export const locales = ['en', 'fr'] as const;
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/contact':'/contact',
 
  // If locales use different paths, you can
  // specify each external path per locale.
  '/services/[slug]': {
    en: '/services/[slug]',
    fr: '/prestations/[slug]',
  },
  '/testimonials': {
    en: '/testimonials',
    fr: '/temoignages'
  },
  '/gallery': {
    en: '/gallery',
    fr: '/realisations'
  },
  '/gallery/[slug]': {
    en: '/gallery/[slug]',
    fr: '/realisations/[slug]',
  },
  '/before_and_after': {
    en: '/before_and_after',
    fr: '/avant_et_apres'
  }
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, pathnames});