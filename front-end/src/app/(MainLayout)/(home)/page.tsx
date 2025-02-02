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
import ClinicCategory from "./_components/ClinicCategory";
import ClinicBanner from "./_components/ClinicBanner";
import ServiceBanner from "./_components/ServiceBanner";

const page = () => {
  return (
    <div id="home">
      <Caresoul />
      <Category />
      <ClinicBanner/>
<ClinicCategory/>
<ServiceBanner/>
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
