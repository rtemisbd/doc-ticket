"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { HiChevronDown } from "react-icons/hi";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCreditCard,
  FaFacebook,
  FaHistory,
  FaMedal,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

type LinkItem = {
  href?: string;
  label: string;
  subLinks?: LinkItem[];
  icon?: JSX.Element; // Ensure the icon property is available
};

export const SidebarOptions = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    "My Appointment": true, // Initially open 'My Appointment'
  });

  const userLinks = [
    {
      label: "My Appointment",
      iconShow: <FaCalendarAlt />, // Add iconShow here
      subLinks: [
        {
          href: "/profile/appointments/upcoming",
          label: "Upcoming Appointments",
          iconShow: <FaHistory />,
        },
        {
          href: "/profile/appointments/past",
          label: "Previous Appointments",
          iconShow: <FaArrowLeft />,
        },
      ],
    },
    {
      href: "/profile/transaction",
      label: "Transaction",
      iconShow: <FaCreditCard />,
    },
    { href: "/profile/points", label: "Points", iconShow: <FaMedal /> },
    { href: "/profile/profiles", label: "Profile", iconShow: <FaUser /> },
    { href: "/", label: "Logout", iconShow: <FaSignOutAlt /> },
  ];

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="flex flex-col gap-1">
      {userLinks.map((link) => (
        <div key={link.label}>
          {link.href ? (
            <Link
              className={`flex items-center justify-between w-full capitalize rounded-md px-3 py-2 hover:bg-gray-200 border-b-2 ${
                pathname === link.href ? "bg-gray-100" : ""
              }`}
              href={link.href}
            >
              {/* Render the icon if it exists */}

              <div className="flex gap-2 items-center text-lg ">
                {link.iconShow}
                {link.label}
              </div>
            </Link>
          ) : (
            <button
              className="flex items-center justify-between w-full text-left border-b-2 capitalize rounded-md px-3 py-2 hover:bg-gray-200"
              onClick={() => toggleMenu(link.label)}
            >
              {/* <span>{link.label}</span> */}

              <div className="flex gap-2 items-center text-lg">
                {link.iconShow}
                {link.label}
              </div>
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
            <div className="ml-4 flex flex-col gap-1 pt-2">
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  className={`block w-full capitalize rounded-md px-3 py-2 text-[14px] hover:bg-gray-200 ${
                    pathname === subLink.href ? "bg-gray-100" : ""
                  }`}
                  href={subLink.href!}
                >
                  {/* Render the icon for sublinks if it exists */}

                  <div className="flex gap-2 items-center ">
                    {subLink.iconShow}
                    {subLink.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
