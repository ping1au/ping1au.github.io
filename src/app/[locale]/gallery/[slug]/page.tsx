import React from 'react';
import Gallery from "@/app/_components/Gallery";
import { getImages } from '@/app/_components/getImage';
import { Metadata } from 'next';
import { getTranslations,setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const galleryPages = [
  'kitchens',
  'bathrooms',
  'outdoor',
  'interior_finishing'
];

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug, locale } = await params;
//   if (!galleryPages.includes(slug)) {
//     console.warn(`Invalid slug: ${slug}`);
//     notFound();
//   }
//   const t = await getTranslations('GalleryPage');
//   setRequestLocale(locale);  // Enable static for metadata
//   return {
//     title: t(`${slug}.title`) || 'FDC Gallery',
//     description: t(`${slug}.description`) || 'Check out the galleries for different areas renovated by FDC Renovations!',
//   };
// }

export default async function GalleryPage({ params }: PageProps) {
  const { slug, locale } = await params;
  if (!galleryPages.includes(slug)) notFound();
  const imageFilenames = await getImages(slug, '');

  // Enable static rendering: Set locale in request store (avoids headers() bailout)
  setRequestLocale(locale);

  // Validate slug (optional; for static 404 on unknown slugs)
  const validSlugs = ['kitchens',
                      'bathrooms',
                      'outdoor',
                      'interior_finishing',
                      ] as const;
  if (!validSlugs.includes(slug as any)) {
    notFound();  // Static 404 for invalid slugs
  }
  const t = await getTranslations('GalleryPage');

  // console.log('Gallery slug:', slug);
  // console.log('Gallery locale:', locale);

  return (
    <main className="bg-black px-4 h-auto">
      {/* <div
        className="flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        <div className="flex justify-center items-center gallery-header self-center text-base md:text-lg lg:text-xl xl:text-2xl">
          {t(`${slug}.title`)}
        </div>
      </div> */}
      <Gallery folder={slug} images={imageFilenames} />
    </main>
  );
}

// export async function generateStaticParams() {
//   const locales = ['en', 'fr'];
//   return locales.flatMap((locale) =>
//     galleryPages.map((slug) => ({
//       slug,
//       locale,
//     }))
//   );
// }
export async function generateStaticParams() {
  const locales = ['en', 'fr']; // Define supported locales
  return locales.flatMap((locale) => [
    { slug: 'kitchens', locale },
    { slug: 'bathrooms', locale },
    { slug: 'outdoor', locale },
    { slug: 'interior_finishing', locale },
  ]);
}