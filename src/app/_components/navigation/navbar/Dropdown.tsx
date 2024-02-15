import React, { useState } from 'react'
import Link from 'next/link';
import { MenuItem } from '../getMenuItems';
import {createSharedPathnamesNavigation} from 'next-intl/navigation'

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen ? "flex": "hidden";
    const locales = ['en', 'fr'] as const;
    const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
    return (
        <>
            <div className="relative hidden md:flex gap-x-6 menu-list z-50">
                <button className="hover:text-blue-400" onClick={toggle}>{item.title}</button>
                <div className={`dropdown-list absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-white rounded-md gap-x-6 ${transClass}`}>
                    {
                        menuItems.map(item =>
                            <Link
                                key={item.key}
                                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                </div>
            </div>
            {
                isOpen
                    ? <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/40" onClick={toggle}></div>
                    : <></>
            }
        </>
    )
}