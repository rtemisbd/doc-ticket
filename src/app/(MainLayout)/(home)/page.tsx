"use client";

import Company from "./_components/Company";
import HealthBeauty from "./_components/HealthBeauty";
import Dental from "./_components/Dental";
import Beauty from "./_components/Beauty";
import Surgery from "./_components/Surgery";

import FaqSection from "./_components/Faq";
import Clinic from "./_components/Clinic";
import Caresoul from "./_components/Caresoul";
import Category from "./_components/Category";
import Advertise from "./_components/Advertise";
import ServiceAdvertise from "./_components/ServiceAdvertise";
import Hospital from "./_components/Hospital";

const page = () => {
  return (
    <div>
      <Caresoul />
      <Category />

      <Advertise />
      <Hospital />

      <ServiceAdvertise />

      <HealthBeauty />

      <Dental />
      <Beauty />
      <Surgery />

      <FaqSection />
      <Clinic />
      <Company />
    </div>
  );
};

export default page;
