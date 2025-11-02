'use client';
import React from 'react';
import { Link as IntlLink } from '@/i18n/navigation';  // i18n-aware Link
import Link from 'next/link';  // For external links
import { MenuItem } from '../getMenuItems';
import { usePathname } from '@/i18n/navigation';
// Import useParams to get the current locale
import { useParams } from 'next/navigation';

interface Props {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
  isActive?: (route: string | undefined) => boolean; // Optional, provided by parent
}

const Dropdown: React.FC<Props> = ({ item, isOpen, onToggle, isActive }) => {
  const pathname = usePathname(); // Get internal pathname (no locale prefix)
  // Get the current locale from params
  const { locale } = useParams() as { locale: string };
  const normalizedPathname = pathname || '/';
  const menuItems = item.children || [];
  // Same normalizeToTemplate as in Navbar.tsx for consistency
  const normalizeToTemplate = (path: string): string => {
    if (path === '/') return '/';

    const segments = path.split('/').filter(Boolean);
    if (segments.length < 2) return path;

    const staticPrefix = '/' + segments.slice(0, -1).join('/');
    switch (staticPrefix) {
      case '/services':
        return '/services/[slug]';
      case '/gallery':
        return '/gallery/[slug]';
      default:
        return path;
    }
  };

  return (
    <div className="relative hidden md:flex gap-x-6 menu-list z-50">
      <button className="" onClick={onToggle}>
        {item.title}
      </button>
      <div
        className={`dropdown-list absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-[#df9e61]/80 rounded-md gap-x-6 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        {menuItems.map((child) => (
          <NavLink
            key={child.key}
            className={`hover:text-gray-800 ${
              isActive && isActive(child.route) ? 'text-white' : ''
            }`}
            href={child.route || '/'} // Fallback for safety
            locale={locale}
            onClick={onToggle}
          >
            {child.title}
          </NavLink>
        ))}
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/40"
          onClick={onToggle}
        />
      )}
    </div>
  );

  // Reusable NavLink for internal/external links
  function NavLink({
    href,
    children,
    className,
    locale,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    locale: string;
    [key: string]: any;
  }) {
    const isInternal =
      href.startsWith('/') &&
      !href.startsWith('/http') &&
      !href.startsWith('/tel:') &&
      !href.startsWith('/mailto:');
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
  }
};

export default Dropdown;