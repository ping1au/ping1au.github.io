import { useTranslations } from 'next-intl';

// Define known routes (resolved for static, templates for dynamic)
type KnownRoute =
  | '/'
  | '/testimonials'
  | '/transformations'
  | '/services/renovations'
  | '/services/interior_design'
  | '/gallery/kitchens'
  | '/gallery/bathrooms'
  | '/gallery/outdoor'
  | '/gallery/interior_finishing'
  | '/gallery/electrical_and_plumbing'
  | '/services/[slug]'  // Template for dynamic
  | '/gallery/[slug]'; // Template for dynamic

export interface MenuItem {
  key: number;
  title: string;
  route?: KnownRoute;  // Strict typing
  children?: MenuItem[];
}

export const GetMenuItems = (): MenuItem[] => {
  const t = useTranslations('Header');
  return [
    {
      key: 1,
      title: t('home'),
      route: '/' as KnownRoute,
    },
    {
      key: 2,
      title: t('services'),
      children: [
        {
          key: 21,
          title: t('renovations'),
          route: '/services/renovations' as KnownRoute,
        },
        {
          key: 22,
          title: t('interior-design'),
          route: '/services/interior_design' as KnownRoute,
        },
      ],
    },
    {
      key: 3,
      title: t('testimonials'),
      route: '/testimonials' as KnownRoute,
    },
    {
      key: 4,
      title: t('gallery'),
      children: [
        {
          key: 41,
          title: t('kitchens'),
          route: '/gallery/kitchens' as KnownRoute,
        },
        {
          key: 42,
          title: t('bathrooms'),
          route: '/gallery/bathrooms' as KnownRoute,
        },
        {
          key: 43,
          title: t('outdoor'),
          route: '/gallery/outdoor' as KnownRoute,
        },
        {
          key: 44,
          title: t('interior_finishing'),
          route: '/gallery/interior_finishing' as KnownRoute,
        },
        {
          key: 46,
          title: t('electrical_and_plumbing'),
          route: '/gallery/electrical_and_plumbing' as KnownRoute,
        },
      ],
    },
    {
      key: 5,
      title: t('transformations'),
      route: '/transformations' as KnownRoute,
    },
  ];
};