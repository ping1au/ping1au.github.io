"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import {createSharedPathnamesNavigation} from 'next-intl/navigation'

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // // change between the logo and the button when the user scrolls
  // const [showButton, setShowButton] = useState(false);

  // const changeNavButton = () => {
  //   if (window.scrollY >= 400 && window.innerWidth < 768) {
  //     setShowButton(true);
  //   } else {
  //     setShowButton(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavButton);
  // }, []);
  const locales = ['en', 'fr'] as const;
  const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
  return (
    <>
    <div className="">
    {/* <Link href="/" style={{ display: showButton ? "none" : "block" }}> */}
    <Link href="/" style={{display:"block"}}>
        <Image
          // src="/images/fdcLogo.png"
          src={width < 1024 ? "/images/logo.png" : "/images/fdcLogo.png"}
          alt="Logo"
          width={width < 1024 ? "150" : "250"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
        />
      </Link>
    </div>
      
      {/* <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div> */}
    </>
  );
};

export default Logo;