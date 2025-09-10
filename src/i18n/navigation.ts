// src/i18n/navigation.ts (or similar)
import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';  // Your existing routing config (e.g., locales, defaultLocale, pathnames if localized)

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);