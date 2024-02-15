import React from 'react'
import Gallery from "@/app/_components/Gallery";
import { getImages } from '@/app/_components/getImage';
import { Metadata } from 'next'
import {getTranslations} from 'next-intl/server';
import Image from 'next/image';

const galleryPages = ['basements', 'bathrooms', 'fireplaces', 'kitchens', 'outdoor', 'stairs', 'tilings'];

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
        title: 'FDC Gallery',
        description: 'Check out the galleries for different areas renovated by FDC Renovations!',
    }
  }

  export const getTranslatedtext = async (slug:string) =>  {
    try {
        const t = await getTranslations('GalleryPage');
        let title = "";
        let description = "";
        const keys = [slug] as const;
        keys.map(function(key, value) {

        });
        
        //let remarks = "";
        // switch (slug) {
        //     case 'basements':
        //         title = t('basements');
        //         break;
        //     case 'bathrooms':
                
        //         break;
        //     case 'fireplaces':
                
        //         break;
        //     case 'kitchens':
                
        //         break;
        //     case 'outdoor':
                
        //         break;
        //     case 'stairs':
                
        //         break;
        //     default: //Tilings
                
        //         break;
        // }
        return (
            {
                title: t(title),
                description: t(description),
            });
    } catch (error: any) {
        console.log(error);
    }
}

export default async function GalleryPage({ params }: { params: { slug: string } })  {
    const { slug } = params;

    /* Reads the content of the gallery sub dir and returns an array of strings */
    const imageFilenames = await getImages(slug);
    const t = await getTranslations('GalleryPage');
    const keys = [slug] as const;
    return (
    <>
        <main className='min-h-screen px-4 pb-4 common-page-container'>
                {keys.map((key) =>(
                    <div className='flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg' style={{whiteSpace: "pre-wrap"}}>
                        <div className='flex justify-center items-center gallery-header self-center text-base md:text-lg lg:text-xl xl:text-2xl'>
                            {/* {slug.charAt(0).toUpperCase() + slug.slice(1)} */}
                            {t(`${key}.title`)}
                        </div>
                        <div className="intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg">
                            {t(`${key}.description`)}
                        </div>
                    </div>
                ))}
                <Gallery folder={slug} images={imageFilenames}  />
            </main>
    </>)
}

export async function generateStaticParams() {
    return [{slug:'basements'}, 
    {slug:'bathrooms'}, 
    {slug:'fireplaces'},
    {slug:'kitchens'}, 
    {slug:'outdoor'},
    {slug:'stairs'}, 
    {slug:'tilings'}];
  }
