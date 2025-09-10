//'use client';
import Error from 'next/error';
import "@/app/globals.css";
import Image from 'next/image';
import Link from 'next/link';
// export default function NotFound() {
//     redirect('/en/not-found');
// }

export const dynamicParams = false;

export const metadata = {
    title: "FDC Renovations",
    description: "FDC Renovations turns Your Project into Our Passion - From plumbing, electrical, framing to detailed millwork and final paint we provide turnkey profession.",
  };

export default function NotFound() {
    return (
        <div className="common-page-container flex flex-col h-screen items-center" style={{whiteSpace: "pre-wrap"}}>
            <div className='intro-container '>
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
                {/* <Error statusCode={404}></Error> */}
            </div>
            <div className="title-container mx-auto py-8 text-base md:text-lg lg:text-xl xl:text-2xl">
                We&apos;re sorry.<br/>Nous sommes navrés.
            </div>
            <div className='intro-container'>
                The page you requested isn&apos;t available.<br/>Can&apos;t find what you&apos;re looking for? Start from our homepage.
            </div>
            <div className='intro-container'>
                La page que vous avez demandé n’est pas disponible.<br/>Vous ne trouvez pas ce que vous cherchez ? Commencez sur la page d’accueil.
            </div>
            <div className='intro-container'>
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
    );
}