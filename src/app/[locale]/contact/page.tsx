'use client'

// export const metadata = {
//     title: "Contact FDC Renovations",
//     description: "Contact FDC for a free estimate and more information!",
//   }
  
import React from "react";
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';


  const ContactPage = () => {
    const t = useTranslations('ContactPage');
    return (
      <div className="contact-page-container flex flex-col justify-center">
            <div className="title-container mx-auto py-8 text-base md:text-lg lg:text-xl xl:text-2xl">
              Contact
            </div>
            <div className="mx-auto px-4 pb-16 text-base md:text-lg lg:text-lg xl:text-lg">
                <div>
                    <p><span className="field-header">Address:</span></p>
                    <p>
                    <a className="hover:bg-sky-100" href="https://maps.app.goo.gl/zCFcqMGm2FzUWfs78" target='_blank'>
                      Roger Larin faslrs FDC Ameublement<br/>802 Saint-Robert, Saint Lazare, QC J7T 2M4</a>
                    </p>
                </div>
                <div className="w-2/3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.141334933102!2d-74.1664035!3d45.3863197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc94aed96b76787%3A0x64df9a1d37f3bb64!2s802%20Mnt%20Saint-Robert%2C%20Saint-Lazare%2C%20QC%20J7T%202M4%2C%20Canada!5e0!3m2!1sen!2shk!4v1699696294887!5m2!1sen!2shk"></iframe>
                </div>
                <div>
                    <p><span className="field-header">{t('phone')}</span></p><p>
                    <Link className="icon hover:bg-sky-100" href="tel:+15146061705">
                                      <svg className="w-6 h-6 text-green-600 dark:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                                        </svg>
                                        514-606-1705
                                    </Link>
                    </p>
                    <p><span className="field-header">{t('email')}</span></p>
                    <p>
                      <Link className="icon hover:bg-sky-100" href="mailto:info@fdcrenovations.com">
                        <svg className="w-6 h-6 text-red-600 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                        </svg>
                        info@fdcrenovations.com
                      </Link>
                    </p>
                    <p><span className="field-header">Facebook: </span></p>
                    <p>
                    <Link className="icon hover:bg-sky-100" href="https://www.facebook.com/FDCFurnishings/" target="_blank">
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
                    </p>
                    <p><span className="field-header">Instagram: </span></p>
                    <p>
                    <Link className="icon hover:bg-sky-100" href="https://instagram.com/fdcrenovations" target="_blank">
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
                    </p>
                </div>
            </div>
            
      </div>
    );
  };
  
  export default ContactPage;