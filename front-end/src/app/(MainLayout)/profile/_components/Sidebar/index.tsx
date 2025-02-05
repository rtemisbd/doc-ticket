"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

import { SidebarOptions } from "./SIdebarOptions";
// import { adminLinks, userLinks } from "./constant";
import img from "@/assets/clinic/7.jpg";
import { Divider } from "@nextui-org/divider";
import { FaCalendarAlt, FaCreditCard, FaSignOutAlt, FaUser } from "react-icons/fa";
 

const Sidebar = () => {
  const role = "USER";

  const userLinks = [
    {
      label: "My Appointment",
      iconShow: <FaCalendarAlt />,  // Add iconShow here
      subLinks: [
        { href: "/profile/appointments/upcoming", label: "Upcoming Appointments", iconShow: <FaCalendarAlt /> },
        { href: "/profile/appointments/past", label: "Previous Appointments", iconShow: <FaCalendarAlt /> },
      ],
    },
    { href: "/profile/transaction", label: "Transaction", iconShow: <FaCreditCard /> },
    { href: "/profile/points", label: "Points", iconShow: <FaSignOutAlt /> },
    { href: "/profile/profiles", label: "Profile", iconShow: <FaUser /> },
    { href: "/", label: "Logout", iconShow: <FaSignOutAlt /> },
  ];

  return (
    <div className=" ">
      <div className="rounded-xl shadow-xl p-2 bg-[#1AB79C]  ">
        <div className=" w-full  flex items-center justify-center flex-col">
 
         {/* upper part  */}
          <div className="relative w-32 h-32     ">
            <Image
              src={img}
              alt="profile"
              fill
              className="object-fill rounded-full "
            />
          </div>
          <div className="my-3 flex items-center justify-center flex-col">
            <h1 className="text-2xl font-semibold">Md. Jewel Rana</h1>
            <p className="break-words text-sm">js.rana@gmail.com</p>
          </div>
        </div>
        {/* <Divider className="  bg-slate-400" /> */}
     


        
      </div>
      <div className="mt-3 space-y-2 rounded-xl  shadow-xl py-8 px-4 text-xl   ">
        <SidebarOptions links={ userLinks} />
        {/* <SidebarOptions links={role === "USER" ? userLinks : adminLinks} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
