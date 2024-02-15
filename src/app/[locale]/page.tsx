'use client'
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import Link from "next/link";
import {createSharedPathnamesNavigation} from 'next-intl/navigation'
 
export default function Home() {
    const locales = ['en', 'fr'] as const;
    const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    const t = useTranslations('Home');
    return (
        <>
            <div className="flex-col home-container mx-auto bg-white">
                <div className="grid grid-cols-4 banner-container place-items-center">
                    <div className='md:px-1 xl:px-10 2xl:px-10 px-0'>
                        <Image src={t('left-pic-src')}
                            //width={400}
                            width={1000}
                            height={400}
                            alt="right tag"
                            //className='sm:w-full md:w-3/6 lg:w-2/5 xl:w-2/5 2xl:2/5'
                            className='w-full'
                            /></div>
                    <div className="col-span-2"><Image src={t('banner-src')}
                            //width={400}
                            width={1000}
                            height={400}
                            alt="FDC banner"
                            //className='sm:w-full md:w-3/6 lg:w-2/5 xl:w-2/5 2xl:2/5'
                            className='w-full'
                            /></div>
                    <div className='md:px-1 xl:px-10 2xl:px-10 px-0'>
                        <Image src={t('right-pic-src')}
                            //width={400}
                            width={1000}
                            height={400}
                            alt="right tag"
                            //className='sm:w-full md:w-3/6 lg:w-2/5 xl:w-2/5 2xl:2/5'
                            className='w-full'
                    /></div>
            </div>
            
            <div className="flex-col">
            <div className="service-container py-4">
                {t('intro')}
            </div>
            {/* <div className="button-container grid grid-cols-3 divide-x-4 divide-amber-500 place-items-center pb-10"> */}
            <div className="button-container grid grid-cols-3 place-items-center pb-10">
                <div className=''>
                    {/* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        <img className="object-contain w-40" src="/images/service_fix.webp"></img>
                    </button> */}
                    <Link href={t('serv1')} target='_blank'>
                    {/* <img className="object-contain w-40 self-center" src="/images/service_fix.webp"></img> */}
                    <Image
                            src={t('serv1-src')}
                            width={100}
                            height={100}
                            alt="FDC Fix-it"
                            sizes="100vw"
                            className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'
                        />
                    </Link>
                </div>
                <div className=''>
                    <Link href={t('serv2')} target='_blank'>
                    <Image
                            src={t('serv2-src')}
                            width={100}
                            height={100}
                            alt="FDC Renovations"
                            sizes="100vw"
                            className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'
                        />
                    </Link>
                </div>
                <div className=''>
                    <Link href={t('serv3')} target='_blank'>
                    <Image src={t('serv3-src')}
                            width={100}
                            height={100}
                            alt="FDC Design"
                            sizes="100vw"
                            className='sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'/>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}