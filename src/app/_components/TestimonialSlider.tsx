'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
// import { Transition } from '@headlessui/react'

interface Testimonial {
//   img: StaticImageData
  quote: string
  name: string
  role: string
}

export default function FancyTestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const autorotateTiming: number = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <div className="w-full mx-auto text-center">
      {/* Testimonial image */}
      {/* <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            <div className='flex flex-col'>
                {testimonials.map((testimonial, index) => (
                //   <Transition
                //     key={index}
                //     show={active === index}
                //     className="absolute inset-0 h-full -z-10"
                //     enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                //     enterFrom="opacity-0 -rotate-[60deg]"
                //     enterTo="opacity-100 rotate-0"
                //     leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                //     leaveFrom="opacity-100 rotate-0"
                //     leaveTo="opacity-0 rotate-[60deg]"
                //   >
                //    <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width={56} height={56} alt={testimonial.name} />
                //   </Transition>
                    <div>
                        
                       
                    </div>
                ))}
            </div>
            
            
          </div>
        </div>
      </div> */}
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative text-justify" ref={testimonialsRef}>

          {testimonials.map((testimonial, index) => (
            // <Transition
            //   key={index}
            //   show={active === index}
            //   enter="transition ease-in-out duration-500 delay-200 order-first"
            //   enterFrom="opacity-0 -translate-x-4"
            //   enterTo="opacity-100 translate-x-0"
            //   leave="transition ease-out duration-300 delay-300 absolute"
            //   leaveFrom="opacity-100 translate-x-0"
            //   leaveTo="opacity-0 translate-x-4"
            //   beforeEnter={() => heightFix()}
            // >
            //  <div key={index} className='flex-col'>
            //     <div
            //             className="w-10 h-10 rounded-full  
            //                 inline-flex items-center justify-center  
            //                 bg-gray-100 text-gray-200 text-xl font-bold" > 
            //                 {testimonial.name.charAt(0)}
            //             </div> 
            //      <div className="text-sm text-slate-900 before:content-['\201C'] after:content-['\201D']">
            //         {testimonial.quote}
            //     </div>
            //             <div className="text-sm py-4"><span>{testimonial.name}</span> <span>-</span> <span>{testimonial.role}</span></div>
            //  </div>
              
            <div key={index} className='w-full'>
                <div className="relative rounded-xl p-8">
                    <div className="px-4 relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex gap-6 dark:bg-slate-800 dark:highlight-white/5">
                        <div  className="w-10 h-10 rounded-full  
                                inline-flex items-center justify-center
                                absolute -left-6
                                bg-gray-100 text-gray-200 text-xl font-bold">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex flex-col py-5">
                            <div className="text-sm text-slate-900 before:content-['\201C'] after:content-['\201D']">
                                {testimonial.quote}
                            </div>
                            
                            <div className="text-sm pt-4 font-bold">
                                <span>{testimonial.name}</span> <span>-</span> <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            // </Transition>
          ))}

        </div>
      </div>
      
    </div>
  )
}