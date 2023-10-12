import React, { useState } from 'react'
import Link from 'next/link';

import { MenuItem } from './index';

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

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative hidden md:flex gap-x-6 menu-list z-50">
                <button
                    className="hover:text-blue-400"
                    onClick={toggle}
                >{item.title}</button>
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
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}
// import React from "react";

// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

// export default function App() {
//   const items = [
//     {
//       key: "new",
//       label: "New file",
//     },
//     {
//       key: "copy",
//       label: "Copy link",
//     },
//     {
//       key: "edit",
//       label: "Edit file",
//     },
//     {
//       key: "delete",
//       label: "Delete file",
//     }
//   ];

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button 
//           variant="bordered" 
//         >
//           Open Menu
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Dynamic Actions" items={items}>
//         {(item) => (
//           <DropdownItem
//             key={item.key}
//             color={item.key === "delete" ? "danger" : "default"}
//             className={item.key === "delete" ? "text-danger" : ""}
//           >
//             {item.label}
//           </DropdownItem>
//         )}
//       </DropdownMenu>
//     </Dropdown>
//   );
// }


