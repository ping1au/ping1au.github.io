'use client';
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import { GetMenuItems, MenuItem } from '../getMenuItems';
import { Link as IntlLink, usePathname } from '@/i18n/navigation';
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import Image from "next/image";
import { Parisienne } from 'next/font/google';
import { useRouter } from 'next/navigation';

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const locales = ['en', 'fr'] as const;
  const locale  = useLocale(); // or useLocale() if available
  const t = useTranslations('Header');
  const menuItems = GetMenuItems();
  const [openDropdownKey, setOpenDropdownKey] = useState<number | null>(null);
  const pathname = usePathname();

  const normalizedPathname = pathname || '/';

  console.log('Pathname (internal):', pathname, 'Normalized:', normalizedPathname);

  const handleToggle = (key: number) => {
    setOpenDropdownKey((prev) => (prev === key ? null : key));
  };

  const backgroundImages = [
    '/images/20210928_190705.jpg',
    '/images/20220805_171610.jpg',
    '/images/20240103_102846.jpg',
    '/images/20240820_152201.jpg',
    '/images/20240823_130855.jpg',
    '/images/20250617_114842.jpg',
  ];

  const [currentBackground, setCurrentBackground] = useState<string | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const backgroundMap: { [key: string]: string | null } = {
      '/': '/images/20210928_190705.jpg',
      '/services/renovations': '/images/bg_reno.webp',
      '/services/interior_design': '/images/bg_interior.webp',
      '/transformations': '/images/bg_trans.jpg',
      '/testimonials': null,
      '/gallery/basements': null,
      '/gallery/bathrooms': null,
      '/gallery/fireplaces': null,
      '/gallery/kitchens': null,
      '/gallery/outdoor': null,
      '/gallery/stairs': null,
    };

    if (normalizedPathname === "/") {
      setCurrentBackground(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);
      interval = setInterval(() => {
        setCurrentBackground(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);
      }, 2000);
    } else {
      const bg = backgroundMap[normalizedPathname] || "";
      setCurrentBackground(bg);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [normalizedPathname, backgroundImages]);

  const handlePrev = () => {
    if (normalizedPathname === "/") {
      const currentIndex = backgroundImages.indexOf(currentBackground || '');
      const prevIndex = currentIndex <= 0 ? backgroundImages.length - 1 : currentIndex - 1;
      setCurrentBackground(backgroundImages[prevIndex]);
    }
  };

  const handleNext = () => {
    if (normalizedPathname === "/") {
      const currentIndex = backgroundImages.indexOf(currentBackground || '');
      const nextIndex = currentIndex >= backgroundImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentBackground(backgroundImages[nextIndex]);
    }
  };

  const isActive = (route: string | undefined): boolean => {
    if (!route) return false;

    // Normalize resolved pathnames to template form for type-safe comparison
    const normalizeToTemplate = (path: string): string => {
      if (path === '/') return '/';

      const segments = path.split('/').filter(Boolean);
      if (segments.length < 2) return path; // Static like '/testimonials'

      const staticPrefix = '/' + segments.slice(0, -1).join('/');
      switch (staticPrefix) {
        case '/services':
          return '/services/[slug]';
        case '/gallery':
          return '/gallery/[slug]';
        default:
          return path; // Static routes unchanged
      }
    };

    const normalizedPath = normalizeToTemplate(normalizedPathname);
    const normalizedRoute = normalizeToTemplate(route);

    return normalizedPath === normalizedRoute || (normalizedPath.startsWith(normalizedRoute) && normalizedRoute !== "/");
  };

  const NavLink = ({ href, children, className, ...props }: { href: string; children: React.ReactNode; className?: string; [key: string]: any }) => {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <IntlLink href={href as any} locale={locale} className={className} {...props}>
          {children}
        </IntlLink>
      );
    } else {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
  };

  return (
    <>
      <div
        className="relative flex justify-between items-start w-full h-auto nav-container sticky top-0 z-50"
        style={{
          backgroundColor: normalizedPathname.startsWith('/gallery') ? '#000000' : 'transparent',
        }}
      >
        {currentBackground && normalizedPathname !== '/testimonials' && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${currentBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 1.0,
            }}
          />
        )}
        {currentBackground && normalizedPathname !== '/testimonials' && (
          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
          />
        )}
        <div className="header-container h-full w-full relative z-10">
          <div className="flex flex-col h-1/2">
            <div className="flex justify-between items-center h-full">
              <div className="w-1/5 flex flex-col justify-center pl-8 pt-8 pb-2">
                <Logo />
                <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                  </svg>
                </button>
              </div>
              <div className="flex-col w-4/5 px-8 pt-8 pb-2 text-white">
                <div className="navbar-container flex justify-end items-center md:gap-6 gap-8">
                  {menuItems.map((item) => (
                    item.children ? (
                      <Dropdown
                        key={item.key}
                        item={item}
                        isOpen={openDropdownKey === item.key}
                        onToggle={() => handleToggle(item.key)}
                        isActive={isActive}
                      />
                    ) : (
                      <NavLink
                        className={`hover:text-orange-500 hidden md:flex gap-x-6 menu-list ${isActive(item.route) ? 'text-[#f79e42]' : ''}`}
                        href={item.route || '/'}
                        key={item.key}
                      >
                        {item.title}
                      </NavLink>
                    )
                  ))}
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
            <div className="relative z-20">{getPageContent()}</div>
          </div>
        </div>
      </div>
    </>
  );

  function getPageContent() {
    switch (normalizedPathname) {
      case "/":
        return (
          <div className="relative z-20">
            <div className="text-white pl-8">
              RBQ; 5853-6400-01
            </div>
            <div className="flex justify-between items-start w-full h-auto nav-container sticky top-0 z-20">
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 border-2 border-gray-200 text-gray-200 text-4xl px-2 rounded-full hover:text-gray-600 z-20"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 border-2 border-gray-200 text-gray-200 text-4xl px-2 rounded-full hover:text-gray-600 z-20"
              >
                &gt;
              </button>
              <div className="pl-16 h-full w-full">
                <div className="pt-8 text-white font-[Open_Sans] font-black text-5xl">
                  <p>{t('quality-renovations')}</p>
                  <p className="pt-8">{t('for-your-home')}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="xs:text-xs sm:text-sm">
                    <NavLink
                      href="tel:+15146061705"
                      className="w-full bg-[#fe8d24] text-white font-bold px-4 py-4 hover:bg-orange-600 transition duration-300"
                    >
                      {t('call')}
                    </NavLink>
                  </div>
                  <div className="pt-8">
                    <Image
                      src="/images/membership.png"
                      width={200}
                      height={200}
                      alt="membership"
                      className="object-right-top float-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "/services/renovations":
        return (
          <div className="relative z-20">
            <div className="px-8 flex flex-col justify-center items-start w-full h-1/2 sticky top-0 z-20 text-white py-16 gap-4">
              <div className="font-black text-7xl">
                <span>Renovations</span>
              </div>
              <div>{t('your-project')}</div>
            </div>
          </div>
        );
      case "/services/interior_design":
        return (
          <div className="relative z-20">
            <div className="px-8 flex flex-col justify-center items-start w-full h-1/2 sticky top-0 z-20 text-white py-16">
              <div className="font-black text-7xl">
                <span>Interior Design</span>
              </div>
              <div>{t('your-project')}</div>
            </div>
          </div>
        );
      case "/testimonials":
        return (
          <div className="relative z-20 max-w-6xl mx-auto px-2 md:px-4">
            <div className="flex flex-col h-1/2 sticky top-0 z-20 text-white py-16">
              <div className="text-5xl py-4">
                <span className="text-orange-500">{t('client-testimonials')}</span>
              </div>
              <div>
                <span className="text-orange-500">{t('what-clients-say')}</span>
              </div>
            </div>
          </div>
        );
      // case "/contact":
      //   return (
      //     <div className="relative z-20">
      //       <div><p className="text-5xl text-white">Get in Touch</p></div>
      //       <div className="flex justify-center items-center mt-4">
      //         <NavLink
      //           href="tel:+15146061705"
      //           className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
      //         >
      //           Call Now
      //         </NavLink>
      //       </div>
      //     </div>
      //   );
      case "/gallery/kitchens":
      case "/gallery/bathrooms":
      case "/gallery/outdoor":
      case "/gallery/interior_finishing":
      //case "/gallery/electrical_and_plumbing":
        return (
          <div className="relative z-20">
            <div className="px-8 pt-8 h-1/3">
              <p className="text-5xl text-white text-bold">{t(`${normalizedPathname.split('/')[2]}`)}</p>
              <p className="pt-4 text-white text-bold">{t(`${normalizedPathname.split('/')[2]}-caption`)}</p>
            </div>
          </div>
        );
      case "/transformations":
        return (
          <div className="relative z-20">
            <div className="flex flex-col justify-center items-center w-full h-1/2 sticky top-0 z-20 text-white py-16">
              <div className="font-bold text-5xl px-4 py-4">{t('before-and-after')}</div>
              <div>{t('see-differences')}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }
};

export default Navbar;
function useParams(): { locale: string } {
  // Try to extract the locale from the pathname (e.g., /en/..., /fr/...)
  if (typeof window !== 'undefined') {
    const match = window.location.pathname.match(/^\/([a-zA-Z-]{2,5})(\/|$)/);
    return { locale: match ? match[1] : 'en' };
  }
  // Fallback for SSR or unknown
  return { locale: 'en' };
}
