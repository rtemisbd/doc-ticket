import Clinic from "@/app/(MainLayout)/(home)/_components/Clinic";
import AllServiceCard from "@/app/(MainLayout)/(service)/services/_components/AllServiceCard";
import FilterCard from "@/app/(MainLayout)/(service)/services/_components/FilterCard";
import { LocationIcon } from "@/assets/icon";
import Container from "@/components/shared/Container";
import PromotionalCover from "@/components/shared/PromotionalCover";
import ServiceCard from "@/components/userUi/ServiceCard";
import Image from "next/image";

import Link from "next/link";
import React from "react";

import img from "@/assets/clinic/7.jpg";
import { FaAngleRight } from "react-icons/fa";
import Map from "./Map";

const ClinicProfile = () => {
  return (
    <div>
      {/* hospital banner  */}
      <div>
        <PromotionalCover />
      </div>

      <Container>
        <div className="relative">
          <div className="relative w-32 h-32 -mt-16 z-20">
            <Image
              src={img}
              alt="profile"
              fill
              className="object-fill rounded-full border"
            />
          </div>
        </div>

        <p className="text-2xl font-bold pt-4">
          {" "}
          Popular Diagnostic Centre Ltd.
        </p>
        <div className="flex gap-2 py-2 ">
          <LocationIcon />
          <p>Popular Hospital, Dhanmondi, Dhaka</p>
        </div>
      </Container>

      {/* upper part  */}
      <div>
        <Container>
          <div className="grid grid-cols-12 gap-6 my-6">
            {/* Left Side (7/12) */}
            <div className="col-span-12 md:col-span-7 space-y-6">
              {/* card show   */}
              <div>
                <div className="flex items-center justify-between pb-4">
                  <h1 className="text-[#00AF91] font-bold text-xl capitalize">
                    All packages
                  </h1>
                  <div className="flex items-center gap-1 ">
                    <Link href={"#"} className="text-[#00AF91]">
                      See More
                    </Link>
                    <FaAngleRight className="text-[#00AF91] " />
                  </div>
                </div>
                <AllServiceCard cardNumber={6} />
              </div>
            </div>

            {/* Right Side (5/12) - Fixed Card */}
            <div className="col-span-12  md:col-span-5">
              <div className=" top-20 bg-white shadow-md rounded-lg p-6">
                <div className="flex gap-8 flex-col">
                  {/* map  */}
                  <div className="h-[400px] w-full bg-gray-600">
                    <Map />
                  </div>

                  {/* banner advertising  */}
                  <div className="h-[400px] w-full bg-gray-600 flex items-center">
                    {" "}
                    <p className="text-white text-7xl mx-auto"> Banner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Clinic />
      </div>
    </div>
  );
};

export default ClinicProfile;
