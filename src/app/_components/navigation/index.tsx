'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* <Navbar toggle={toggle} pathname={pathname} /> */}
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} pathname={pathname} />
    </>
  );
}