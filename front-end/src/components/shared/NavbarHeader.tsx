"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo/doc_logo.png";
import Image from "next/image";

const NavbarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const navItems = [
    { id: "home", name: "Home", path: "/" },
    { id: "doctor", name: "Doctor", path: "/#" },
    { id: "services", name: "Services", path: "/services" },
    { id: "review", name: "Review", path: "/#" },
    { id: "contact", name: "Contact", path: "/#" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);
  

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative w-24 h-24">
            <Link href="/">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </Link>
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

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg">
            {navItems.map((item) => (
              <Link href={item.path} key={item.id}>
                <button
                  className={`hover:text-[#007E85] ${
                    pathname === item.path ? "text-[#1B90CB]  " : ""
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Sign-Up and Log-In Buttons for Desktop */}
          <div className="hidden md:flex gap-4">
            <Link href="#">
              <button className="flex items-center px-4 py-1 text-white bg-[#007E85] rounded-md transition duration-300 ease-in-out hover:bg-[#1b5458] hover:scale-105">
                Sign Up
              </button>
            </Link>
            <Link href="#">
              <button className="flex items-center px-4 py-1 text-white bg-[#007E85] rounded-md transition duration-300 ease-in-out hover:bg-[#1b5458] hover:scale-105">
                Log In
              </button>
            </Link>
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
