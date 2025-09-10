"use client";
import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from '@/i18n/navigation'; // From your i18n/navigation.ts
import { useParams } from 'next/navigation'; // For dynamic params
import Link from "next/link";

const Footer = () => {
    const locales = ['en', 'fr'] as const;
    //const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    return (
        <div className="w-full h-auto sticky top-0 px-4 py-4 flex-col justify-center items-center footer-container text-xs md:text-sm lg:text-sm xl:text-sm mt-auto">
            <div className="flex w-full justify-center items-center">
                DOLLARD-DES-ORMEAUX, PIERREFONDS, ROXBORO, BEACONSFIELD, KIRKLAND,<br/>
                SAINT-ANNE-DE-BELLEVUE, SENNEVILLE, BAIE D`URFÉ, L`ÎLE-BIZARD, POINTE-CLAIRE, DORVAL, LACHINE,<br/>
                L`ÎLE-PERROT, SAINT-LAZARE, HUDSON, VAUDREUIL, RIGAUD, LES CÈDRES, SAINT-CLET<br/>               
            </div>
           
            <div className="footer-logo-container flex justify-center self-center items-center overflow-auto">
                <Link href="/" className='footer-link'>
                    <Image
                        className='object-contain'
                        src="/images/logo.png"
                        width={56} 
                        height={37}
                        alt="FDC Logo"
                        sizes="(max-width: 768px) 33vw,
                            (max-width: 1200px) 20vw,
                            10vw"
                    />
                </Link>
            </div>
            
            {/* <div className="contact-container">
                <a className="hover:bg-sky-700" href="https://maps.app.goo.gl/zCFcqMGm2FzUWfs78" target='_blank'>Roger Larin faslrs FDC Ameublement<br/>802 Saint-Robert, Saint Lazare, QC J7T 2M4</a><br/>
                <a className="hover:bg-sky-700" href="tel:+15146061705">
                        <span className="text-lg">✆ </span>514-606-1705</a><br />
                        <a className="hover:bg-sky-700" href="mailto:info@fdcrenovations.com">
                        <span className="text-lg">✉ </span>info@fdcrenovations.com</a>
            </div> */}
            <div className="flex flex-col px-2">
                              <div className="flex items-center justify-center">
                                    <Link className="icon hover:bg-sky-700" href="tel:+15146061705">
                                      <svg className="w-6 h-6 text-green-600 dark:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                                        </svg>
                                        514-606-1705
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Link className="icon hover:bg-sky-700" href="mailto:info@fdcrenovations.com">
                                      <svg className="w-6 h-6 text-red-600 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                                      </svg>
                                       info@fdcrenovations.com
                                    </Link>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <Link className="icon hover:bg-sky-700" href="https://www.facebook.com/FDCFurnishings/" target="_blank">
                                      <Image
                                                src="/images/facebook.png"
                                                alt="Facebook"
                                                className="relative"
                                                width={24}
                                                height={24}            
                                                sizes='100vw'
                                              />
                                            FDC Renovations
                                    </Link>
                                  </div>
                                  <div className="flex items-center justify-center">
                                      <Link className="icon hover:bg-sky-700" href="https://instagram.com/fdcrenovations" target="_blank">
                                        <Image
                                                src="/images/instagram.png"
                                                alt="Instagram"
                                                className="relative"
                                                width={24}
                                                height={24}            
                                                sizes='100vw'
                                              />
                                            @fdcrenovations
                                      </Link>
                                  </div>
                          </div>
        </div>
    )
}

export default Footer