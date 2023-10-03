import React from 'react'
import Footer from "../../_components/footer";
import Navigation from "../../_components/footer";
import Gallery from "../../_components/Gallery";
import { getImages } from '../../_components/getImage';

import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } })  {
    const { slug } = params;

    /* Reads the content of the gallery sub dir and returns an array of strings */
    const imageFilenames = await getImages(slug);

    return <main className='min-h-screen'>
        <div className='flex justify-center items-center gallery-header self-center text-base md:text-lg lg:text-xl xl:text-2xl'>
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </div>
        {/* <Gallery/> */}
        <Gallery folder={slug} images={imageFilenames}  />

        </main>
    
    // <main className="flex flex-col min-h-screen bg-zinc-300">
        
    //     <Gallery />
    // </main>
}

export function generateStaticParams() {
    const galleryPages = ['basements', 'bathrooms', 'fireplaces', 'kitchens', 'outdoor', 'stairs', 'tilings'];

    return galleryPages;
    // return [{ slug: 'basements' }, 
    //         { slug: 'bathrooms' }, 
    //         { slug: 'fireplaces' }, 
    //         { slug: 'kitchens' }, 
    //         { slug: 'outdoor' },
    //         { slug: 'stairs' },  
    //         { slug: 'tilings' }]
  }
   
  // Three versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  // - /gallery/basements
  // - /gallery/bathrooms
  // - /gallery/fireplaces

