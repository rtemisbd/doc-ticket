import React from "react";
import Accordiann from "./Accordiann";
import ImageShow from "./ImageShow";
import Container from "@/components/shared/Container";
import Recommended from "./Recommended";
import Title from "@/components/shared/Title";
import BreadCombb from "./BreadCombb";
import PromotionalCover from "./PromotionalCover";
import { HospitalIcon, LocationIcon } from "@/assets/icon";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div>
      <div>
        <PromotionalCover />
      </div>

      {/* <div></div>
       */}
      <div className="py-4">
        <BreadCombb />
      </div>

      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* Left Side (7/12) */}
          <div className="col-span-12 md:col-span-7 space-y-6">
            <ImageShow />

            <p className="text-black font-medium">
              Install Conventional Metal Braces by Certified Orthodontists
            </p>

            {/* hospital name and rating */}
            <div className="flex gap-6">
              <div className="flex gap-2">
                <HospitalIcon />
                <p className="text[14px] text-gray-600">Poplar Hospital</p>
              </div>
              <div className="flex gap-2">
                <FaStar className="text-yellow-600" />
                <p className="text[14px] text-gray-600">4.7</p>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <LocationIcon />
                <p className="text[14px] text-gray-600">
                  Popular House Dhanmondi, Dhaka
                </p>
              </div>
            </div>

            {/* service details  */}
            <p className="text-gray-800">
              YAG laser can remove hair from all skin colors and hair types, but
              it is more effective on dark, thick hair. It also helps tighten
              pores and smooth the skin.
            </p>

            <Accordiann />

            {/* recommended  */}
            <div>
              <Title heading="recommended" />
              <Recommended />
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
  );
};

export default ServiceDetails;
