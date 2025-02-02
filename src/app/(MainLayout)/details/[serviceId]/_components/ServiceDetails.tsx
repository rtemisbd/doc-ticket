import React from "react";
import Accordian from "./Accordian";
import Container from "@/components/shared/Container";
import ServiceCard from "@/components/userUi/ServiceCard";
import RecommendedCard from "./RecommendedCard";
import Title from "@/components/shared/Title";
import CoverPromotional from "./CoverPromotional";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import BreadCombService from "./BreadComb";
import ImageShow from "./ImageShow";
import { HospitalIcon, LocationIcon } from "@/components/icons";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div>
      {/* cover photo for promotional  */}
      <div>
        <CoverPromotional />
      </div>

      <div>
        <BreadCombService />
      </div>

      <div className=" ">
        <Container>
          <div className="grid grid-cols-12 gap-6">
            {/* Left Side (7/12) */}
            <div className="col-span-12 md:col-span-7 space-y-6">
              {/* image  */}
              <div>
                <ImageShow />
              </div>

              <p className="text-gray-600">
                Install Conventional Metal Braces by Certified Orthodontists
              </p>

              <div className="flex gap-8">
                <div className="flex gap-2">
                  <HospitalIcon />
                  <p className="text-[14px] ">Popular Hospital</p>
                </div>
                <div className="flex gap-2  ">
                  <FaStar className="text-yellow-600" />
                  <p className="text-[14px]">4.7</p>
                </div>
              </div>

              <div className="flex items-center  gap-1 ">
                <LocationIcon />

                <p className="text-[14px] text-gray-600">
                  Road No 02, Dhanmondi, Dhaka 1209
                </p>
              </div>

              <p className="text-gray-600">
                YAG laser can remove hair from all skin colors and hair types,
                but it is more effective on dark, thick hair. It also helps
                tighten pores and smooth the skin.
              </p>

              <Accordian />

              {/* recommended card  */}

              <div>
                {/* <h1 className="font-bold text-xl">Recommended</h1> */}
                <Title heading="recommended" />
                <RecommendedCard />
              </div>
            </div>

            {/* Right Side (5/12) - Fixed Card */}
            <div className="col-span-12 md:col-span-5">
              <div className="sticky top-20 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold">Service Summary</h2>
                <p className="text-gray-500 mt-2">
                  Key details about the service are displayed here.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔ Feature 1</li>
                  <li>✔ Feature 2</li>
                  <li>✔ Feature 3</li>
                  <li>✔ Feature 4</li>
                </ul>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetails;
