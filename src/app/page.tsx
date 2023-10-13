export const metadata = {
  title: "FDC Renovations Homme",
  description: "Your Project, Our Passion",
};

import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex-col home-container mx-auto px-4">
        <div className="banner-container">
                  <Image
                        src="/images/banner.webp"
                        width={1500}
                        height={1035}
                        alt="FDC banner"
                        
                        style={{ width: '100%' }} //The point is right there!
                        //OR className='w-100 h-100'
                    />
        </div>
        <div className="flex-col">
          <div className="service-container">
          Select the type of service you need!
          </div>
          {/* <div className="button-container grid grid-cols-3 divide-x-4 divide-amber-500 place-items-center pb-10"> */}
          <div className="button-container grid grid-cols-3 place-items-center pb-10">
            <div className=''>
                {/* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    <img className="object-contain w-40" src="/images/service_fix.webp"></img>
                </button> */}
                <Link href="/services/fdc_fix">
                  <img className="object-contain w-40 self-center" src="/images/service_fix.webp"></img>
                </Link>
            </div>
            <div className=''>
                <Link href="/services/fdc_renovations">
                  <img className="object-contain w-40 self-center" src="/images/service_renovations.webp"></img>
                </Link>
            </div>
            <div className=''>
                <Link href="/services/fdc_design">
                  <img className="object-contain w-40" src="/images/service_design.webp"></img>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}