// import {
//     Dropdown,
//     DropdownTrigger,
//     DropdownMenu,
//     DropdownSection,
//     DropdownItem
// } from "@nextui-org/react";
import Dropdown from "@/app/_components/navigation/navbar/Dropdown";
import { GetMenuItems } from '../getMenuItems';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const locales = ['en', 'fr'] as const;
  const {Link, useRouter, usePathname, redirect} = createSharedPathnamesNavigation({locales});
  const menuItems = GetMenuItems();

  return (
    <>
      <div className="bg-opacity-90 sidebar-container fixed w-full h-full overflow-auto justify-center bg-white grid pt-[120px] left-0 z-50"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}>
            <button className="absolute right-0 p-5" onClick={toggle}>
                {/* Close icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  />
                </svg>
            </button>
        {/* <div className="menu-container bg-">
          <ul className="sidebar-nav text-center leading-relaxed text-xl">
              {menuItems.map((item, index) => {
                  return item.hasOwnProperty("children") ? (
                   <Link className="hover:text-blue-500 hidden md:flex gap-x-6 menu-list" href={item?.route || ""}
                    key = {index}>
                      {item.title}
                    </Link>
                  ) : (
                    <Link className="hover:text-blue-500 hidden md:flex gap-x-6 menu-list" href={item?.route || ""}
                    key = {index}>
                      {item.title}
                    </Link>
                  );
              })}
          </ul>
        </div> */}
        <div className="menu-container">
          <LocaleSwitcher />
          <ul className="sidebar-nav text-center leading-relaxed text-xl" key="parent">
          {menuItems.map((item, index) => {
                              return item.hasOwnProperty("children") ? (
                              <div key = "childrenId">
                                  <li key="gallery">{item.title}</li>
                                  <ul key="children">
                                {/* <li key={index}>
                                <Link className="text-black hover:text-blue-500 md:flex gap-x-6 menu-list" href={item?.route || ""} 
                              key = {index} onClick={toggle}>
                                  {item.title}
                              </Link>
                                </li> */}
                                    {item.children?.map(item =>
                                        <li key={item.key}>
                                          <Link
                                            key={item.key}
                                            className="hover:bg-zinc-300 hover:text-zinc-500 text-sm"
                                            href={item?.route || ''}
                                            onClick={toggle}
                                        >{item.title}</Link>
                                        </li>
                                    )}
                                </ul>
                              </div>
                              
                              
                          ) : (
                              <li key={item.key}>
                                <Link className="text-black hover:text-blue-500 md:flex gap-x-6 menu-list" href={item?.route || ""} 
                              onClick={toggle}>
                                  {item.title}
                              </Link></li>
                          );
                        })}
          </ul>
        </div>
        
        
        
        {/* <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/" onClick={toggle}>
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link href="/testimonials" onClick={toggle}>
              <p>TESTIMONIALS</p>
            </Link>
          </li>
          <li>
            <p>GALLERY</p>
            <ul>
              <li>
                {menuItems.map((item, index) => {
                    return item.hasOwnProperty("children") ? (
                      <span>{item.key}</span>) : <span></span>
                    // <Link className="hover:text-blue-500 hidden md:flex gap-x-6 menu-list" href={item?.route || ""}
                    //   key = {index}>
                    //     {item.title}
                    //   </Link>
                    // ) : (
                    //   <Link className="hover:text-blue-500 hidden md:flex gap-x-6 menu-list" href={item?.route || ""}
                    //   key = {index}>
                    //     {item.title}
                    //   </Link>
                    // );
                })}
              </li>
            </ul>
          </li>
          <li>
            <Link href="/before_and_after" onClick={toggle}>
              <p>BEFORE & AFTER PHOTOS</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle}>
              <p>CONTACT</p>
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggle}>
              <p>FR</p>
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Sidebar;