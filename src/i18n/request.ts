// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
// import {locales} from './config';

// export default getRequestConfig(async ({locale}) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (
//       await (locale === 'en'
//         ? // When using Turbopack, this will enable HMR for `en`
//           import('../messages/en.json')
//         : import(`../messages/${locale}.json`))
//     ).default
//   };
// });
// i18n.ts (or i18n/request.ts)
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./routing";

// Refactored for static rendering compatibility:
// Do NOT use request-based APIs, only use the locale param.
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  // Load messages based on the validated locale
  const messages = (
    await (locale === "en"
      ? import("../messages/en.json")
      : import(`../messages/${locale}.json`))
  ).default;

  return {
    locale,
    messages,
  };
});
