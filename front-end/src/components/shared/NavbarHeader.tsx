"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo/doc_logo.png";
import Image from "next/image";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const NavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navItems = [
    { id: "home", name: "Home", path: "/" },
    { id: "doctor", name: "Doctor", path: "/#" },
    { id: "services", name: "Services", path: "/services" },
    { id: "review", name: "Review", path: "/#" },
    { id: "contact", name: "Contact", path: "/#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative w-24 h-32">
            <Link href="/">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg">
            {navItems.map((item) => (
              <Link href={item.path} key={item.id}>
                <button
                  className={`hover:text-[#007E85] ${
                    pathname === item.path ? "text-[#1B90CB]" : ""
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Profile and Mobile Menu Icon */}
          <div className="flex justify-center gap-4">
            {/* Profile Avatar */}
            <div className="relative">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="success"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />

              {/* Profile Dropdown for Small Screens */}
              {isSmallScreen
                ? isProfileOpen && (
                    <div
                      className="fixed inset-0 bg-[#1AB79C]  
                   backdrop-blur-sm z-50 flex flex-col   space-y-6"
                    >
                      <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FaTimes />
                      </button>

                      <div> </div>

                      <p className="text-white text-lg font-semibold">
                        Signed in as
                      </p>
                      <p className="text-white text-lg font-semibold">
                        zoey@example.com
                      </p>

                      <Link href="/profile/appointments/upcoming">
                        <button
                          onClick={() => setIsProfileOpen(false)}
                          className="text-white text-lg"
                        >
                          Profile
                        </button>
                      </Link>

                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="text-red-500 text-lg"
                      >
                        Log Out
                      </button>
                    </div>
                  )
                : // Profile Dropdown for Medium and Large Screens
                  isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 p-3">
                      <p className="text-gray-700 text-sm font-semibold">
                        Signed in as
                      </p>
                      <p className="text-gray-800 text-sm">zoey@example.com</p>

                      <hr className="my-2" />

                      <Link href="/profile/appointments/upcoming">
                        <button
                          onClick={() => setIsProfileOpen(false)}
                          className="block text-gray-800 py-2 w-full text-left"
                        >
                          Profile
                        </button>
                      </Link>

                      <button
                        onClick={() => setIsProfileOpen(false)}
                        className="block text-red-500 py-2 w-full text-left"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                className="text-3xl text-gray-700"
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-8">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {navItems.map((item) => (
              <Link href={item.path} key={item.id}>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white text-xl ${
                    pathname === item.path ? "text-[#1B90CB] font-bold" : ""
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}

            <Link href="#">
              <button
                className="mt-4 px-6 py-1 text-lg text-white bg-[#007E85] rounded-md transition duration-300 ease-in-out hover:bg-[#1b5458] hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </button>
            </Link>
            <Link href="#">
              <button
                className="px-6 py-1 text-lg text-white bg-[#007E85] rounded-md transition duration-300 ease-in-out hover:bg-[#1b5458] hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarHeader;
