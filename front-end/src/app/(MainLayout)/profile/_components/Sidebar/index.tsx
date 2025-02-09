"use client";

import Image from "next/image";

import { SidebarOptions } from "./SIdebarOptions";

import img from "@/assets/clinic/7.jpg";

const Sidebar = () => {
  const role = "USER";

  return (
    <div className=" ">
      <div className="rounded-xl shadow-xl px-2 py-6 bg-[#1AB79C]  ">
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
          <div className="my-3 flex items-center justify-center flex-col text-white">
            <h1 className="text-2xl font-semibold">Md. Jewel Rana</h1>
            <p className="break-words text-sm">js.rana@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2 rounded-xl  shadow-xl py-8 px-4 text-xl  border  border-[#1AB79C]">
        <SidebarOptions />
        {/* <SidebarOptions links={role === "USER" ? userLinks : adminLinks} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
