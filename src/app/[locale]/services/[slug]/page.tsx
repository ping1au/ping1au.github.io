import React from 'react';
import { getImages } from '@/app/_components/getImage';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server'; // Import setRequestLocale for static rendering
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // For invalid slugs

// No dynamic export needed; we'll enable static via setRequestLocale
// export const dynamic = 'force-dynamic'; // Keep commented for static

type Props = {
  params: Promise<{ slug: string; locale: string }>;  // Type as Promise for Next.js 15
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;  // Await params here too
  setRequestLocale(locale);  // Enable static for metadata

  // Optional: Use getTranslations for dynamic title based on slug/locale
  // const t = await getTranslations({ locale, namespace: 'ServicePage' });
  // title: t(`${slug}-title`) || 'FDC Services',

  return {
    title: 'FDC Services',
    description: 'We offer turnkey renovations and interior design services.',
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;  // Await the Promise to access slug/locale

  // Enable static rendering: Set locale in request store (avoids headers() bailout)
  setRequestLocale(locale);

  // Validate slug (optional; for static 404 on unknown slugs)
  const validSlugs = ['renovations', 'interior_design'] as const;
  if (!validSlugs.includes(slug as any)) {
    notFound();  // Static 404 for invalid slugs
  }

  // Now getTranslations works statically (no headers bailout)
  const t = await getTranslations('ServicePage');
  const keys = [slug] as const;

  /* Reads the content of the gallery sub dir and returns an array of strings */
  const imageFilenames = await getImages(slug, locale);

  let intro = "";
  let remarks = "";
  let prefix = "";
  let totalImage = 0;

  // Simplified switch for intro and remarks based on translations
  switch (slug) {
    case 'renovations':
      intro = t('renovations-intro');
      remarks = 'Your Project, our Passion!';
      prefix = 'renovation';
      totalImage = 6;
      break;
    case 'interior_design':
      intro = t('interior-intro');
      prefix = 'design'
      totalImage = 4;
      break;
    default:
      break;
  }
  
  // "header1":"Kitchens",
  //           "header2":"Interior Finishing",
  //           "header3":"Bathrooms",
  //           "header4":"Windows & Doors",
  //           "header5":"Outdoor",
  //           "header6":"Electrical Plumbing"

  const routes = [
    `/${locale}/gallery/kitchens`,
    `/${locale}/gallery/interior_finishing`,
    `/${locale}/gallery/bathrooms`,
    '/#',
    `/${locale}/gallery/outdoor`,
    `/${locale}/gallery/electrical_and_plumbing`
  ];

  const itemArray: { imageUrl: string; header: string; caption:string; headerUrl:string}[] = [];
  
  for (let i = 1; i < totalImage+1; i++) {
        const galleryObj = { 
            imageUrl: "/images/icons/" + prefix + i + ".png", 
            header: t(prefix+ '-header.header' + i),
            caption:  t(prefix+ '-caption.caption' + i),
            headerUrl: prefix=='renovation' ? routes[i-1] : '/#'
        }; 
        itemArray.push(galleryObj);
  }

  return (
    <main className="h-min-screen px-4 py-4 md:py-8 lg:py-8 xl:py-8 2xl:py-8 common-page-container">
        <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-4">
            {itemArray.map((x, index) => (
                <React.Fragment key={index}>
                    <div className='w-full'>
                        <Image src={x.imageUrl}
                            width={100}
                            height={100}
                            alt={x.header}
                            sizes="100vw"
                            className='xs:w-3/5 sm:w-3/5 md:w-1/2 lg:w-1/2 2xl:w-1/2 m-auto'/>
                    </div>
                    <div className='col-span-2 flex flex-col'>
                        <div>
                          {x.headerUrl === '/#' ? (
                            <span className='text-xl text-[#f79e42] font-bold opacity-50 cursor-not-allowed'>
                              {x.header}
                            </span>
                          ) : (
                            <Link href={x.headerUrl} className='hover:underline'>
                              <p className='text-xl text-[#f79e42] font-bold'>{x.header}</p>
                            </Link>
                          )}
                        </div>
                        <div>{x.caption}</div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </main>
  );
}

export async function generateStaticParams() {
  const locales = ['en', 'fr']; // Define supported locales
  return locales.flatMap((locale) => [
    { slug: 'renovations', locale },
    { slug: 'interior_design', locale },
  ]);
}