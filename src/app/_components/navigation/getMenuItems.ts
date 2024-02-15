
import { useTranslations } from 'next-intl'

export interface MenuItem {
    key: number;
    title: string;
    route?: string;
    children?: MenuItem[];
}

export const getMenuItems = (): MenuItem[] => {
    const t = useTranslations('Header');
    return ([{
      key:1,
      title: t('home'),
      route: "/",
    },
    {
      key:2,
      title: t('testimonials'),
      route: "/testimonials",
    },
    {
      key:3,
      title: t('gallery'),
      children: [
        {
          key:31,
          title: t('basements'),
          route: "/gallery/basements",
        },
        {
          key:32,
          title: t('bathrooms'),
          route: "/gallery/bathrooms",
        },
        {
          key:33,
          title: t('fireplaces'),
          route: "/gallery/fireplaces",
        },
        {
          key:34,
          title: t('kitchens'),
          route: "/gallery/kitchens",
        },
        {
          key:35,
          title: t('outdoor'),
          route: "/gallery/outdoor",
        },
        {
          key:36,
          title: t('stairs'),
          route: "/gallery/stairs",
        },
        {
          key:37,
          title: t('tilings'),
          route: "/gallery/tilings",
        },
      ],
    },
    {
      key:4,
      title: t('before_and_after'),
      route: "/before_and_after",
    },
    {
      key:5,
      title: t('contact'),
      route: "/contact",
    }]);
  }