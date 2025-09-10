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
      <div className="relative text-center grid grid-cols-1 md:grid-cols-3 gap-4" ref={testimonialsRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full'>
               {/* <div className="px-4 relative mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex gap-6 dark:bg-slate-800 dark:highlight-white/5"> */}
                <div className="px-4 relative mx-auto bg-white flex gap-6">
                    {/* <div  className="w-10 h-10 rounded-full  
                            inline-flex items-center justify-center
                            absolute -left-6
                            bg-gray-100 text-gray-200 text-xl font-bold">
                        {testimonial.name.charAt(0)}
                    </div> */}
                    <div className="flex flex-col py-5 items-center">
                        {/* <div className="text-sm text-slate-900 before:content-['\201C'] after:content-['\201D']"> */}
                          <div>
                            <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                </g>
                            </svg>
                          </div>
                          <div className="text-sm text-slate-900">
                            {testimonial.quote}
                          </div>
                        
                          <div className="text-sm pt-4 font-bold">
                              <span>{testimonial.name}</span> <span>-</span> <span>{testimonial.role}</span>
                          </div>
                    </div>
                </div>
          </div>
        ))}
      </div>
  )
}