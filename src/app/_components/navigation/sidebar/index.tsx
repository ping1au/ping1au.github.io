import Link from "next/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/react";

export interface MenuItem {
  key: number;
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    key:1,
    title: "HOME",
    route: "/",
  },
  {
    key:2,
    title: "TESTIMONIALS",
    route: "/testimonials",
  },
  {
    key:3,
    title: "GALLERY",
    children: [
      {
        key:31,
        title: "Basements",
        route: "/gallery/basements",
      },
      {
        key:32,
        title: "Bathrooms",
        route: "/gallery/bathrooms",
      },
      {
        key:33,
        title: "Fireplaces",
        route: "/gallery/fireplaces",
      },
      {
        key:34,
        title: "Kitchens",
        route: "/gallery/kitchens",
      },
      {
        key:35,
        title: "Outdoor",
        route: "/gallery/outdoor",
      },
      {
        key:36,
        title: "Stairs",
        route: "/gallery/stairs",
      },
      {
        key:37,
        title: "Tilings",
        route: "/gallery/tilings",
      },
    ],
  },
  {
    key:4,
    title: "BEFORE & AFTER PHOTOS",
    route: "/before_and_after",
  },
  {
    key:5,
    title: "CONTACT",
    route: "/contact",
  },
  {
    key:6,
    title: "FR",
    route: "#",
  },
];

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
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
        
        
        <ul className="sidebar-nav text-center leading-relaxed text-xl">
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
        </ul>
      </div>
    </>
  );
};

export default Sidebar;