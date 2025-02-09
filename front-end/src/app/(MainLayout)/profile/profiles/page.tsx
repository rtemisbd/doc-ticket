import React from "react";
import TitleProfile from "../_components/TitleProfile";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import ModelEditProfile from "@/components/Modal/ModalEditProfile";

const page = () => {
  return (
    <div className=" w-full  ">
      {/* Profile Heading */}
      <TitleProfile heading="Profile Details" />

      {/* Profile Content */}
      <div className="bg-white px-3  rounded-lg shadow-md py-4 ">
        {/*   Basic Information */}
        <div>
          <div className="flex mb-4 gap-3   border-b ">
            <FaUser className="mt-[4px] text-[#1AB79C] text-lg" />
            <h2 className="text-xl font-bold      pb-2">Basic Information</h2>
          </div>

          <div className="space-y-4 text-md">
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Name</p>
              <p className="w-3/5">Md. Jewel Rana</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Gender</p>
              <p className="w-3/5">Male</p>
            </div>

            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Religion</p>
              <p className="w-3/5">Islam</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Blood Group</p>
              <p className="w-3/5">B Positive</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Date of Birth</p>
              <p className="w-3/5">26 September, 1999</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Marital status</p>
              <p className="w-3/5">Single</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Nationality</p>
              <p className="w-3/5">Bangladeshi</p>
            </div>
          </div>
        </div>

        {/*   contact Information */}
        <div className="mt-8">
          <div className="flex mb-4 gap-3   border-b ">
            <FaPhoneAlt className="mt-[6px] text-[#1AB79C] text-lg" />
            <h2 className="text-xl font-bold      pb-2">Contact Information</h2>
          </div>

          <div className="space-y-4 text-md">
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Mobile</p>
              <p className="w-3/5">+8801x xxxxxxxx</p>
            </div>
            <div className="flex gap-8">
              <p className="w-1/5 font-medium">Email</p>
              <p className="w-3/5">jewel@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4 justify-end">
    

          <ModelEditProfile id="1" buttonClass="px-6 py-2 bg-[#1AB79C] text-white font-medium rounded-lg hover:bg-[#1ab79dde] transition "/>
        </div>
      </div>
    </div>
  );
};

export default page;
