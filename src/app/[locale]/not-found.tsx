import {useTranslations} from 'next-intl';
import "@/app/globals.css";
import Image from 'next/image';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
    const locales = ['en', 'fr'] as const;
    const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    const t = useTranslations('NotFoundPage');
    return (
    <>
      <div className="common-page-container flex flex-col h-1/4" style={{whiteSpace: "pre-wrap"}}>
        <div className="title-container mx-auto py-8 text-base md:text-lg lg:text-xl xl:text-2xl">
          {t('title')}
        </div>
        <div className='intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 text-base md:text-base lg:text-lg xl:text-lg'>
          {t('description')}
        </div>
          <div className='intro-container sm:px-16 md:px-32 lg:px-32 xl:px-32 justify-center self-center items-center'>
          <Link href="/" style={{display:"block"}}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="relative"
              width={100}
              height={100}            
              sizes='100vw'
            />
          </Link>
          </div>
      </div>
    </>)
    
}