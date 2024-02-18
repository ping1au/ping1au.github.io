'use client'

// export const metadata = {
//     title: "Contact FDC Renovations",
//     description: "Contact FDC for a free estimate and more information!",
//   }
  
import React from "react";
import {useTranslations} from 'next-intl';

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
                    <p><span className="field-header">{t('phone')}</span></p><p><a className="hover:bg-sky-100" href="tel:+15146061705">
                              <span className="text-lg">✆ </span>514-606-1705</a></p>
                    <p><span className="field-header">{t('email')}</span></p><p><a className="hover:bg-sky-100" href="mailto:info@fdcrenovations.com">
                              <span className="text-lg">✉ </span>info@fdcrenovations.com</a></p>
                    <p><span className="field-header">Facebook: </span></p><p><a className="hover:bg-sky-100" href="https://www.facebook.com/FDCFurnishings/" target="_blank">
                              <span className="text-lg">ⓕ </span>FDC Renovations</a></p>
                    <p><span className="field-header">Instagram: </span></p><p><a className="hover:bg-sky-100" href="https://instagram.com/fdcrenovations" target="_blank">
                              <span className="text-lg">🅾 </span>@fdcrenovations</a></p>
                </div>
            </div>
            
      </div>
    );
  };
  
  export default ContactPage;