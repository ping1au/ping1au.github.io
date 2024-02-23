import React from 'react'
import Gallery from "@/app/_components/Gallery";
import { getImages } from '@/app/_components/getImage';
import { Metadata } from 'next'
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

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

async function getTranslatedtext () {
    try {
        const t = await getTranslations('ServicePage');
        return (
            {
                serv1_intro: t('serv1-intro'),
                serv2_intro: t('serv2-intro'),
                serv3_intro: t('serv3-intro'),
                serv1_src: t('serv1-src'),
                serv2_src: t('serv2-src'),
                serv3_src: t('serv3-src'),
            });
    } catch (error: any) {
        console.log(error);
        return error;
    }
}

export default async function ServicePage({ params }: { params: { slug: string, locale: string } })  {
    //const { slug } = params;
    const slug = params.slug;
    const locale = params.locale;
    
    /* Reads the content of the gallery sub dir and returns an array of strings */
    const imageFilenames = await getImages(slug, locale);
    let logoPath = "";
    let intro = "";
    let remarks = "";

    const serviceItems = await getTranslatedtext();

    switch (slug) {
        case 'fdc_fix':
            logoPath = serviceItems?.serv1_src!;
            intro = serviceItems?.serv1_intro!;
            break;
        case 'fdc_renovations':
            logoPath = serviceItems?.serv2_src!;
            intro = serviceItems?.serv2_intro!;
            break;
        default:
            break;
    }

    return (
        <>
        {/* <main className='min-h-screen'> */}
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
            {/* </main>  */}
        </>
)}

export async function generateStaticParams() {
    return [{slug:'fdc_fix'}, {slug:'fdc_renovations'}];
}
