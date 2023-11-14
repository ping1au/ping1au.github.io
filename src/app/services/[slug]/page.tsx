import React from 'react'
import Gallery from "../../_components/Gallery";
import { getImages } from '../../_components/getImage';
import { Metadata } from 'next'
import Image from 'next/image';

type Props = {
    params: { id: string }
  }

export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
    return {
        title: 'FDC Services',
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
            intro = "FDC has a complete experienced team to deliver full turnkey quality renovations on time and on budget. \n" +
            "Whether it's a Bathroom, Kitchen, Basement or any other project we will guide you through the process.\n";
            break;
        default:
            logoPath = "/images/service_design.webp"
            intro = "Interior designers assisting and guiding customers through the design phase. \n" +
            "We will help you visualize and make your project come to life making plans \n" +
            "unique to their home and personnal tastes using 3D software.";
            remarks = "This service will be available in spring 2024";
    }

    return <main className='min-h-screen'>
            <div className='bg-gray-200 flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg' style={{whiteSpace: "pre-wrap"}}>
                <div className='w-full py-16 service-logo-container flex justify-center'>
                    <Image src={logoPath}
                        width={100}
                        height={100}
                        alt={slug}
                        sizes="100vw"
                        className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'/>
                </div>
                <div className='remarks-container text-lg md:text-lg lg:text-xl xl:text-xl'>{remarks}</div>
                <div className="intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg">
                    {intro}
                </div>
            </div>
            {/* <Gallery/> */}
            <div className='px-4 pb-4 common-page-container'><Gallery folder={slug} images={imageFilenames}  /></div>
        </main>
}

export async function generateStaticParams() {
    return [{slug:'fdc_fix'}, {slug:'fdc_renovations'}, {slug:'fdc_design'}];
}
