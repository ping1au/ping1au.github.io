import React from 'react'
import Footer from "../../_components/footer";
import Navigation from "../../_components/footer";
import Gallery from "../../_components/Gallery";
import { getImages } from '../../_components/getImage';

import Image from 'next/image';

const galleryPages = ['fdc_fix', 'fdc_renovations', 'fdc_design'];

export default async function Page({ params }: { params: { slug: string } })  {
    const { slug } = params;

    /* Reads the content of the gallery sub dir and returns an array of strings */
    const imageFilenames = await getImages(slug);

    let logoPath = "";
    let intro = "";
    let remarks = "";
    switch (slug) {
        case 'fdc_fix':
            logoPath = "/images/service_fix.webp";
            intro = "Do you have a long list of small unfinished home projects or maybe some urgent needed repairs! " +
            "Our fix-it division is tailored to complete any misc project at very reasonable costs.";
            break;
        case 'fdc_renovations':
            logoPath = "/images/service_renovations.webp";
            intro = "FDC has a complete experienced team to deliver full turnkey quality renovations. " +
            "Whether its a Bathroom, Kitchen, Basement or any other project we will guide you through the process " +
            "and complete on time at prices that are hard to beat.";
            break;
        default:
            logoPath = "/images/service_design.webp"
            intro = "Interior designers assisting and guiding customers using various 3D software " +
            "to make plans unique to their home and personnal tastes. " +
            "We will help you visualize and make your project come to life.";
            remarks = "This service will be fully available in the spring of 2024";
    }

    return <main className='min-h-screen'>
        <div className='flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg'>
            <div className='pt-20'><img className="object-contain w-40 self-center" src={logoPath}></img>
            </div>
            <div className='remarks-container text-lg md:text-lg lg:text-xl xl:text-xl'>{remarks}</div>
            <div className="intro-container sm:px-32 md:px-48 lg:px-64 xl:px-64 text-base md:text-base lg:text-lg xl:text-lg">
                {intro}
            </div>
        </div>
        {/* <Gallery/> */}
        <Gallery folder={slug} images={imageFilenames}  />

        </main>
    
    // <main className="flex flex-col min-h-screen bg-zinc-300">
        
    //     <Gallery />
    // </main>
}

export async function generateStaticParams() {
    return [{slug:'fdc_fix'}, {slug:'fdc_renovations'}, {slug:'fdc_design'}];
    // return galleryPages.map((page) => ({ page }))
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

