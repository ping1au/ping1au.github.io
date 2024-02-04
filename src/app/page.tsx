export const metadata = {
  title: "FDC Renovations",
  description: "FDC Renovations turns Your Project into Our Passion - From plumbing, electrical, framing to detailed millwork and final paint we provide turnkey profession.",
};

import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex-col home-container mx-auto bg-white">
        <div className="grid grid-cols-3 banner-container place-items-center">
                  
                  <div></div>
                  <div><Image
                        src="/images/banner.webp"
                        width={1500}
                        height={400}
                        alt="FDC banner"
                        className='sm:w-full md:w-3/6 lg:w-2/5 xl:w-2/5 2xl:2/5'
                    /></div>
                  <div></div>
        </div>
        <div className="flex-col">
          <div className="service-container py-4">
          Select the type of service you need!
          </div>
          {/* <div className="button-container grid grid-cols-3 divide-x-4 divide-amber-500 place-items-center pb-10"> */}
          <div className="button-container grid grid-cols-3 place-items-center pb-10">
            <div className=''>
                {/* <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    <img className="object-contain w-40" src="/images/service_fix.webp"></img>
                </button> */}
                <Link href="/services/fdc_fix" target='_blank'>
                  {/* <img className="object-contain w-40 self-center" src="/images/service_fix.webp"></img> */}
                  <Image
                        src="/images/service_fix.webp"
                        width={100}
                        height={100}
                        alt="FDC Fix-it"
                        sizes="100vw"
                        className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'
                    />
                </Link>
            </div>
            <div className=''>
                <Link href="/services/fdc_renovations" target="_blank">
                  <Image
                          src="/images/service_renovations.webp"
                          width={100}
                          height={100}
                          alt="FDC Renovations"
                          sizes="100vw"
                          className='xs:w-1/3 sm:w-1/3 md:w-1/3 lg:w-40 xl:w-40 2xl:w-40 m-auto'
                      />
                </Link>
            </div>
            <div className=''>
                <Link href="/services/fdc_design" target='_blank'>
                  <Image src="/images/service_design.webp"
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