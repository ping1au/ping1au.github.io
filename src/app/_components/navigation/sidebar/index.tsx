'use client';
import React, { JSX } from 'react';
import { GetMenuItems } from '../getMenuItems';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import { Link as IntlLink } from '@/i18n/navigation';  // i18n-aware Link
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Sidebar = ({
  isOpen,
  toggle,
  pathname
}: {
  isOpen: boolean;
  toggle: () => void;
  pathname: string
}): JSX.Element => {
  const menuItems = GetMenuItems();
  const { locale } = useParams() as { locale: string };

  console.log('Sidebar pathname:', pathname);

  return (
    <div
      className="bg-opacity-90 sidebar-container fixed w-full h-full overflow-auto justify-center bg-white grid pt-[120px] left-0 z-50"
      style={{
        opacity: isOpen ? '1' : '0',
        top: isOpen ? '0' : '-100%',
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <div className="menu-container">
        <LocaleSwitcher />
        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          {menuItems.map((item) =>
            item.children ? (
              <li key={item.key}>
                <span className="text-black text-xl">{item.title}</span>
                <ul className="pl-4">
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <IntlLink
                        className="block text-black hover:text-orange-500 text-sm"
                        href={child.route as any || '/'}
                        locale={locale}
                        onClick={toggle}
                      >
                        {child.title}
                      </IntlLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.key}>
                <IntlLink
                  className="block text-black hover:text-orange-500 text-xl"
                  href={item.route as any || '/'}
                  locale={locale}
                  onClick={toggle}
                >
                  {item.title}
                </IntlLink>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;