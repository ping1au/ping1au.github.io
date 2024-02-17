import {notFound} from 'next/navigation';

// const locales = ['en', 'fr'];

// //function to generate the routes for all the locales
// export async function generateStaticParams() {
//     return locales.map((locale) => ({locale}));
//   }

export default function CatchAllPage() {
  notFound();
}