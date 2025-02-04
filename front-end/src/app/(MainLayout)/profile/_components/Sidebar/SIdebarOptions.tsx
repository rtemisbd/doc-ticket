"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { HiChevronDown } from "react-icons/hi";

type LinkItem = {
  href?: string;
  label: string;
  subLinks?: LinkItem[];
  icon?: JSX.Element; // Ensure the icon property is available
};

export const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    "My Appointment": true, // Initially open 'My Appointment'
  });

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <div key={link.label}>
          {link.href ? (
            <Link
              className={`flex items-center justify-between w-full capitalize rounded-md px-3 py-2 hover:bg-gray-200 ${
                pathname === link.href ? "bg-gray-100" : ""
              }`}
              href={link.href}
            >
              {/* Render the icon if it exists */}
           
              {link.label}
            </Link>
          ) : (
            <button
              className="flex items-center justify-between w-full text-left capitalize rounded-md px-3 py-2 hover:bg-gray-200"
              onClick={() => toggleMenu(link.label)}
            >
              <span>{link.label}</span>
              {link.subLinks && (
                <HiChevronDown
                  className={`transition-transform duration-300 ${
                    openMenus[link.label] ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
          )}

          {/* Render Submenu if exists */}
          {link.subLinks && openMenus[link.label] && (
            <div className="ml-4 flex flex-col gap-1">
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  className={`block w-full capitalize rounded-md px-3 py-2 text-[16px] hover:bg-gray-200 ${
                    pathname === subLink.href ? "bg-gray-100" : ""
                  }`}
                  href={subLink.href!}
                >
                  {/* Render the icon for sublinks if it exists */}
                 
                  {subLink.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
