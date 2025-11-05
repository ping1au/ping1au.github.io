import React from 'react';
import ComparisonGallery from '@/app/_components/ComparisonGallery';
import { getImages } from '@/app/_components/getImage';
import { useTranslations } from 'next-intl';

interface TransformationsPageProps {
  params: Promise<{ locale: string }>; // Change this line
}

// Static metadata fallback (used if generateMetadata is not active)
export const metadata = {
  title: 'FDC Before and After Renovations',
  description: 'Check out different areas before and after our thorough and professional renovations.',
};

// // Dynamic metadata based on locale
// export async function generateMetadata({ params }: { params: { locale: string } }) {
//   const messages = (await import(`../../../../messages/${params.locale}.json`)).default;
//   return {
//     title: messages.BeforeAfterPage.metadata.title,
//     description: messages.BeforeAfterPage.metadata.description,
//   };
// }

//export default async function TransformationsPage({ params }: { params: { locale: string } }) {
export default async function TransformationsPage({ params }: TransformationsPageProps) {
  //const t = useTranslations('BeforeAfterPage');
  const beforeImageFilenames = await getImages('before', '');
  const afterImageFilenames = await getImages('after', '');

  // Pair images and sort numerically
  const imageFilenames = beforeImageFilenames
    .filter((filename) => afterImageFilenames.includes(filename))
    .sort((a, b) => {
      // Extract numeric part from filename (e.g., '1' from '1.jpg')
      const numA = parseInt(a.replace('.jpg', ''), 10);
      const numB = parseInt(b.replace('.jpg', ''), 10);
      return numA - numB;
    });

  //console.log('Before:', beforeImageFilenames, 'After:', afterImageFilenames, 'Paired:', imageFilenames);

  return (
    <>
       <div className='flex flex-col items-center bg-white'>
          <div>
            <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="25" x2="90" y2="25" stroke="black" strokeWidth="2"/>
                <polygon points="10,20 5,25 10,30" fill="black"/>
                <polygon points="90,20 95,25 90,30" fill="black"/>
            </svg>
          </div>

          <div>
            <ComparisonGallery folder="transformations" images={imageFilenames} />
          </div>
      </div>
    </>
  );
}