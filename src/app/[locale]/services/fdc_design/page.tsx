'use client'

import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function DesignPage()  {
    const t =  useTranslations('ServicePage');
    let logoPath = t('serv3-src');
    let intro = t('serv3-intro');

    const designArray: { imageUrl: string; title: string }[] = [];
    for (let i = 1; i < 5; i++) {
        const galleryObj = { 
            imageUrl: "/images/fdc_design/" + i + ".png", 
            title: t('sub-title.title' + i) 
        }; 
        designArray.push(galleryObj);
    }

    return (
        <>
        {/* <main className='min-h-screen'> */}
            <div className='bg-gray-200 flex flex-col justify-center items-center self-center text-base md:text-lg lg:text-lg xl:text-lg' style={{whiteSpace: "pre-wrap"}}>
                <div className='w-full py-16 service-logo-container flex justify-center'>
                    <Image src={logoPath}
                        width={100}
                        height={100}
                        alt="FDC Design"
                        sizes="100vw"
                        className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'/>
                </div>
                <div className="intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg">
                    {intro}
                </div>
            </div>
            {/* <Gallery/> */}
            <div className='px-4 pb-4 common-page-container flex-col flex justify-center bg-white'>
                <div className='py-8 mx-auto px-4 text-base md:text-lg lg:text-xl xl:text-2xl'>{t('design-title')}</div>
                {designArray.map((x, index) => {
                    return (
                    <div key={index} className="grid grid-cols-5">
                        <div className='w-full pb-8 col-span-2'>
                            <Image src={x.imageUrl}
                                width={0}
                                height={0}
                                alt={x.title}
                                sizes="100vw"
                                className='w-full'/>
                        </div>
                        <div className='px-12 col-span-3 text-base md:text-lg lg:text-xl xl:text-xl flex items-center'>{x.title}</div>
                    </div>
                    );
                })}
            </div>
            {/* </main>  */}
        </>
)}