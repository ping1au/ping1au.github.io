'use client'
import {useLocale, useTranslations} from 'next-intl';
import Image from 'next/image'
import { Link as IntlLink, usePathname } from '@/i18n/navigation';
import Link from "next/link";

export default function Home() {
    const locale  = useLocale(); // Get current locale
    const locales = ['en', 'fr'] as const;
    const currentLocale = Array.isArray(locale) ? locale[0] : locale;
    console.log('Current locale:', currentLocale);
    //const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    const t = useTranslations('Home');
    return (
        <main className='h-full'>
            <div className="grid md:grid-cols-3 bg-white py-4">
                {/* column 1: two icons of the services */}
                <div className="grid grid-cols-2 items-center justify-center icon-container">
                    <div className='grid items-center justify-center'>
                        <p>
                            <IntlLink href={{ pathname: '/services/renovations' }} locale={currentLocale}>
                                {/* <img className="object-contain w-40 self-center" src="/images/service_fix.webp"></img> */}
                                <Image
                                        src={t('renovations-src')}
                                        width={100}
                                        height={100}
                                        alt="Turnkey Renovations"
                                        sizes="100vw"
                                        className='xs:w-1/2 sm:w-1/2 md:w-5/6 lg:w-1/2 xl:w-1/2 2xl:w-1/3 m-auto'
                                    />
                            </IntlLink>
                        </p>
                        {t('turnkey')}<br/>{t('reno')}
                    </div>
                    <div className='grid items-center justify-center'>
                        <p>
                            <IntlLink href={{ pathname: '/services/interior_design' }} locale={currentLocale}>
                                {/* <img className="object-contain w-40 self-center" src="/images/service_fix.webp"></img> */}
                                <Image
                                        src={t('interior-src')}
                                        width={100}
                                        height={100}
                                        alt="Interior Design"
                                        sizes="100vw"
                                        className='xs:w-1/2 sm:w-1/2 md:w-5/6 lg:w-1/2 xl:w-1/2 2xl:w-1/3 m-auto'
                                    />
                            </IntlLink>
                        </p>
                        {t('int')}<br/>{t('design')}
                    </div>
                </div>

                {/* column 2: Introduction */}
                <div className="grid items-center justify-center py-4 xs:px-4 sm: px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-16">
                    <p className='text-justify text-lg'>
                        {t('intro1')}
                    </p>
                    <p className='text-justify text-lg pt-4'>
                        {t('intro2')}
                    </p>
                </div>
                
                {/* column 3: Contact Us */}
                <div className="grid items-center justify-center contact-container">
                    <p className='py-4 text-2xl text-center font-bold'>{t('contact-us')}</p>
                    <p>
                        <Link className="icon hover:bg-orange-100" href="tel:+15146061705">
                            <Image
                                    src="/images/phone.png"
                                    alt="Phone"
                                    className="relative"
                                    width={24}
                                    height={24}            
                                    sizes='100vw'
                            />
                            &nbsp;Phone: 514-606-1705
                        </Link>
                    </p>
                    <p>
                        <Link className="icon hover:bg-orange-100" href="mailto:info@fdcrenovations.com">
                            <Image
                                    src="/images/email.png"
                                    alt="Email"
                                    className="relative"
                                    width={24}
                                    height={24}            
                                    sizes='100vw'
                            />
                            &nbsp;info@fdcrenovations.com
                        </Link>
                    </p>
                    <p>
                        <Link className="icon hover:bg-orange-100" href="https://www.facebook.com/FDCFurnishings/" target="_blank">
                            <Image
                                    src="/images/facebook.png"
                                    alt="Facebook"
                                    className="relative"
                                    width={24}
                                    height={24}            
                                    sizes='100vw'
                                    />
                                &nbsp;FDC Renovations
                        </Link>
                    </p>
                    <p>
                        <Link className="icon hover:bg-orange-100" href="https://instagram.com/fdcrenovations" target="_blank">
                            <Image
                                    src="/images/instagram.png"
                                    alt="Instagram"
                                    className="relative"
                                    width={24}
                                    height={24}            
                                    sizes='100vw'
                                    />
                                &nbsp;@fdcrenovations
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
