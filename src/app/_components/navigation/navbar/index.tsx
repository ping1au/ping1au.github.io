'use client'
import React from "react";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import { GetMenuItems } from '../getMenuItems';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import Image from "next/image";

// export interface MenuItem {
//   key: number;
//   title: string;
//   route?: string;
//   children?: MenuItem[];
// }

// const menuItems: MenuItem[] = [
  
//   {
//     key:1,
//     title: "HOME",
//     route: "/",
//   },
//   {
//     key:2,
//     title: "TESTIMONIALS",
//     route: "/testimonials",
//   },
//   {
//     key:3,
//     title: "GALLERY",
//     children: [
//       {
//         key:31,
//         title: "Basements",
//         route: "/gallery/basements",
//       },
//       {
//         key:32,
//         title: "Bathrooms",
//         route: "/gallery/bathrooms",
//       },
//       {
//         key:33,
//         title: "Fireplaces",
//         route: "/gallery/fireplaces",
//       },
//       {
//         key:34,
//         title: "Kitchens",
//         route: "/gallery/kitchens",
//       },
//       {
//         key:35,
//         title: "Outdoor",
//         route: "/gallery/outdoor",
//       },
//       {
//         key:36,
//         title: "Stairs",
//         route: "/gallery/stairs",
//       },
//       {
//         key:37,
//         title: "Tilings",
//         route: "/gallery/tilings",
//       },
//     ],
//   },
//   {
//     key:4,
//     title: "BEFORE & AFTER PHOTOS",
//     route: "/before_and_after",
//   },
//   {
//     key:5,
//     title: "CONTACT",
//     route: "/contact",
//   }
//   // ,
//   // {
//   //   key:6,
//   //   title: "FR",
//   //   route: "#",
//   // },
// ];


const Navbar = ({ toggle }: { toggle: () => void }) => {
  const locales = ['en', 'fr'] as const;
  const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
  const t = useTranslations('Header');
  const menuItems = GetMenuItems();
  return (
    <>
      <div className="w-full h-auto bg-black sticky top-0 z-40">
        {/* <div className="container mx-auto px-4 h-full"> */}
        <div className="header-container pl-1 pr-1 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="w-1/5 flex justify-center">
              <Logo />
              {/* sidebar buttons */}
              <button type="button" className="inline-flex items-center md:hidden"
                onClick={toggle} >
                  <svg xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24">
                      <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                  </svg>
              </button>
            </div>
            
            <div className="flex-col w-4/5">
                <div className="top-container flex justify-end text-xs md:text-sm lg:text-sm xl:text-sm">
                      {/* <div className="self-center slogan divide-x-2 divide-blue-300">
                        <span className="slogan px-4 py-1">CALL US FOR A FREE ESTIMATE</span>
                        <span className="px-4 py-1"></span>
                      </div>
                      <div className="contact">
                        <span className="">
                          <a className="hover:bg-sky-700" href="tel:+15146061705">
                          <span className="text-lg">✆ </span>514-606-1705</a><br />
                          <a className="hover:bg-sky-700" href="mailto:info@fdcrenovations.com">
                          <span className="text-lg">✉ </span>info@fdcrenovations.com</a>
                        </span>
                      </div> */}
                      <div className="grid grid-cols-2 divide-x-2 gap-3">
                          <div className=" flex slogan self-center justify-end">{t('call')}</div>
                          <div className="contact flex flex-col px-2">
                              <div className="flex items-center">
                                    <Link className="icon hover:bg-sky-700" href="tel:+15146061705">
                                      <svg className="w-6 h-6 text-green-600 dark:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                                        </svg>
                                        514-606-1705
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <Link className="icon hover:bg-sky-700" href="mailto:info@fdcrenovations.com">
                                      <svg className="w-6 h-6 text-red-600 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                                      </svg>
                                       info@fdcrenovations.com
                                    </Link>
                                  </div>
                                  <div className="flex items-center">
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
                                  <div className="flex items-center">
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
                </div>
                    
                <div className="navbar-container flex justify-center items-center flex gap-8">
                      {menuItems.map((item, index) => {
                          return item.hasOwnProperty("children") ? (
                          <Dropdown key = {index} item = {item} />
                      ) : (
                          <Link className="hover:text-blue-500 hidden md:flex gap-x-6 menu-list" href={item?.route || ""} 
                          key = {index}>
                              {item.title}
                          </Link>
                      );
                    })}
                    <LocaleSwitcher />
                    
                    {/* <ul className="hidden md:flex gap-x-6 menu-list ">
                      <li>
                        <Link href="/">
                          <p>HOME</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/testimonials">
                          <p>TESTIMONIALS</p>
                        </Link>
                      </li>
                      <li>
                        <Dropdown>
                            <DropdownTrigger>
                                <Link href="#">
                                    <p>GALLERY</p>
                                </Link>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="basements">Basements</DropdownItem>
                                <DropdownItem key="bathrooms">Bathrooms</DropdownItem>
                                <DropdownItem key="fireplaces">Fireplaces</DropdownItem>
                                <DropdownItem key="kitchens">Kitchens</DropdownItem>
                                <DropdownItem key="kitchens">Outdoor</DropdownItem>
                                <DropdownItem key="kitchens">Stairs</DropdownItem>
                                <DropdownItem key="kitchens">Tiling</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                      </li>
                      <li>
                        <Link href="/before_and_after">
                          <p>BEFORE & AFTER PHOTOS</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <p>CONTACT</p>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <p>FR</p>
                        </Link>
                      </li>
                    </ul> */}
                    
                    {/* button hidden for later use
                    <div className="hidden md:block">
                      <Button />
                    </div> */}
                </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;