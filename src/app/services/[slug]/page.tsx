import React from 'react'
import Footer from "../../_components/footer";
import Navigation from "../../_components/footer";
import Gallery from "../../_components/Gallery";
import { getImages } from '../../_components/getImage';
import { Metadata } from 'next'


import Image from 'next/image';

const galleryPages = ['fdc_fix', 'fdc_renovations', 'fdc_design'];

type Props = {
    params: { id: string }
  }

export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
        title: 'FDC-Services',
        description: 'We offer Fix-it, Renovations and Design services.',
    }
  }

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
            intro = "Do you have a long list of small unfinished home projects or maybe some urgent needed repairs!\n" +
            "Our fix-it division is tailored to complete any misc project at very reasonable costs.";
            break;
        case 'fdc_renovations':
            logoPath = "/images/service_renovations.webp";
            intro = "FDC has a complete experienced team to deliver full turnkey quality renovations.\n" +
            "Whether its a Bathroom, Kitchen, Basement or any other project we will guide you through the process\n" +
            "and complete on time at prices that are hard to beat.";
            break;
        default:
            logoPath = "/images/service_design.webp"
            intro = "Interior designers assisting and guiding customers using various 3D software\n" +
            "to make plans unique to their home and personnal tastes. \n" +
            "We will help you visualize and make your project come to life.";
            remarks = "This service will be fully available in the spring of 2024";
    }

    return <main className='min-h-screen'>
        <div className='bg-gray-200 flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg' style={{whiteSpace: "pre-wrap"}}>
            <div className='w-full py-16 service-logo-container flex justify-center'><img className="object-contain w-40 self-center" src={logoPath}></img>
            </div>
            <div className='remarks-container text-lg md:text-lg lg:text-xl xl:text-xl'>{remarks}</div>
            <div className="intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg">
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

