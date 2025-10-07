import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // pathnames: {
  //   '/': '/',
  //   '/testimonials': { en: '/testimonials', fr: '/témoignages' },
  //   '/transformations': { en: '/transformations', fr: '/transformations' },
  //   '/services/renovations': { en: '/services/renovations', fr: '/services/rénovations' },
  //   '/services/interior_design': { en: '/services/interior_design', fr: '/services/design_intérieur' },
  //   '/gallery/kitchens': { en: '/gallery/kitchens', fr: '/galerie/cuisines' },
  //   '/gallery/bathrooms': { en: '/gallery/bathrooms', fr: '/galerie/salles_de_bain' },
  //   '/gallery/outdoor': { en: '/gallery/outdoor', fr: '/galerie/extérieur' },
  //   '/gallery/interior_finishing': { en: '/gallery/interior_finishing', fr: '/galerie/finition_intérieure' },
  //   '/gallery/electrical_and_plumbing': { en: '/gallery/electrical_and_plumbing', fr: '/galerie/électricité_et_plomberie' },
  //   '/services/[slug]': { en: '/services/[slug]', fr: '/services/[slug]' },
  //   '/gallery/[slug]': { en: '/gallery/[slug]', fr: '/galerie/[slug]' },
  // },
  pathnames: {
    '/': '/',
    '/testimonials': { en: '/testimonials', fr: '/testimonials' },
    '/transformations': { en: '/transformations', fr: '/transformations' },
    '/services/renovations': { en: '/services/renovations', fr: '/services/renovations' },
    '/services/interior_design': { en: '/services/interior_design', fr: '/services/interior_design' },
    '/gallery/kitchens': { en: '/gallery/kitchens', fr: '/gallery/kitchens' },
    '/gallery/bathrooms': { en: '/gallery/bathrooms', fr: '/gallery/bathrooms' },
    '/gallery/outdoor': { en: '/gallery/outdoor', fr: '/gallery/outdoor' },
    '/gallery/interior_finishing': { en: '/gallery/interior_finishing', fr: '/gallery/interior_finishing' },
    '/services/[slug]': { en: '/services/[slug]', fr: '/services/[slug]' },
    '/gallery/[slug]': { en: '/gallery/[slug]', fr: '/gallery/[slug]' },
  },
});

export const { locales, pathnames } = routing;