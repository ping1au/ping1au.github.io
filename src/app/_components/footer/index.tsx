"use client";
import React from 'react';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-auto bg-black sticky top-0 py-4 flex-col justify-center items-center footer-container text-xs md:text-sm lg:text-sm xl:text-sm">
            <div className="flex w-full justify-center items-center">
                DOLLARD-DES-ORMEAUX, PIERREFONDS, ROXBORO, BEACONSFIELD, KIRKLAND,<br/>
                SAINT-ANNE-DE-BELLEVUE, SENNEVILLE, BAIE D’URFÉ, L’ÎLE-BIZARD, POINTE-CLAIRE, DORVAL, LACHINE,<br/>
                L’ÎLE-PERROT, SAINT-LAZARE, HUDSON, VAUDREUIL, RIGAUD, LES CÈDRES, SAINT-CLET<br/>
                
            </div>
           
            <div className="footer-logo-container flex justify-center self-center items-center">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        width={223}
                        height={149}
                        alt="FDC Logo"
                        sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                        style={{ width: '100%' }} //The point is right there!
                        //OR className='w-100 h-100'
                    />
                </Link>
            </div>
            
            <div className="contact-container">
                Roger Larin faslrs FDC Ameublement<br/>
                802 Saint-Robert, Saint Lazare, QC J7T 2M4<br/>
                <a className="hover:bg-sky-700" href="tel:+15146061705">
                        <span className="text-lg">✆ </span>514-606-1705</a><br />
                        <a className="hover:bg-sky-700" href="mailto:info@fdcfurnishings.com">
                        <span className="text-lg">✉ </span>info@fdcfurnishings.com</a>
            </div>
        </div>
    )
}

export default Footer