import Container from "@/components/shared/Container";
import PromotionalCover from "@/components/shared/PromotionalCover";
import ServiceCard from "@/components/userUi/ServiceCard";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import AllServiceCard from "./AllServiceCard";
import Clinic from "@/app/(MainLayout)/(home)/_components/Clinic";
import FilterCard from "./FilterCard";

const ServiceAll = () => {
  return (
    <div>
      {/* hospital banner  */}
      <div>
        <PromotionalCover />
      </div>

      {/* upper part  */}
      <div>
        <Container>
          <div className="grid grid-cols-12 gap-6 my-6">
            {/* Left Side (7/12) */}
            <div className="col-span-12 md:col-span-7 space-y-6">
              {/* card show   */}

              <AllServiceCard />
            </div>

            {/* Right Side (5/12) - Fixed Card */}
            <div className="col-span-12  md:col-span-5">
              <div className="sticky top-20 bg-white shadow-lg rounded-lg p-6">
                <FilterCard />
              </div>
            </div>
          </div>

          {/* other services  */}
          <div>
            <div className="flex items-center justify-between pt-8">
              <h1 className="text-black font-bold text-3xl capitalize">
                Other services
              </h1>
              <div className="flex items-center gap-1 ">
                <Link href={"#"} className="text-[#1B90CB]">
                  See More
                </Link>
                <FaAngleRight className="text-[#1B90CB] " />
              </div>
            </div>
            <ServiceCard />
          </div>
        </Container>
        <Clinic />
      </div>
    </div>
  );
};

export default ServiceAll;
