import Image from "next/image";
import React from "react";
import img from "@/assets/service/3.jpg";
import { LocationIcon } from "@/assets/icon";
import TitleProfile from "../../_components/TitleProfile";

const Page = () => {
  return (
    <div className="md:pt-2">
      {/* Header */}
      <TitleProfile heading={"Upcoming Appointments"} />

      {/* Appointments List */}
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="shadow-lg p-4 rounded-md bg-white mb-4 ">
          {/* Main Container */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Side - Image */}
            <div className="relative h-40 w-full md:w-32">
              <Image
                fill
                alt="img"
                src={img}
                className="object-cover rounded-md"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col justify-between">
              <h1 className="text-lg md:text-xl font-semibold">
                Install Conventional Metal Braces by Certified Orthodontists
              </h1>

              {/* Container for Appointment Details & Buttons */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-2 w-full">
                {/* Appointment Details */}
                <div className="md:w-2/3">
                  <p className="text-gray-600">Appointments</p>
                  <p className="font-medium">12 Dec 2025 at 10:00 am</p>
                  <div className="flex items-center gap-2 mt-2">
                    <LocationIcon />
                    <p className="text-sm text-gray-600">
                      Popular Hospital, Dhanmondi, Dhaka
                    </p>
                  </div>
                </div>

                {/* Buttons - Right Aligned on Medium & Large Screens */}
                <div className="flex flex-col gap-2 mt-4 md:mt-0 md:w-auto">
                  <button className="px-6 py-1 w-full md:w-44 bg-[#1AB79C] text-white text-sm font-medium rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Get Voucher
                  </button>
                  <button className="px-6 py-1 w-full md:w-44 bg-[#1AB79C] text-white text-sm font-medium rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Reschedule
                  </button>
                  <button className="px-6 py-1 w-full md:w-44 bg-[#1AB79C] text-white text-sm font-medium rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
