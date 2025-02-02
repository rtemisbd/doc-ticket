import Container from "@/components/shared/Container";
import ClinicCard from "@/components/userUi/ClinicCard";
import ServiceCard from "@/components/userUi/ServiceCard";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const Clinic = () => {
  return (
    <div className="bg-gray-200 pt-8 pb-4">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-black font-bold text-3xl "> Recommended Clinics and Hospitals</h1>
          <div className="flex items-center gap-2 ">
            <Link href={"#"} className="text-[#1B90CB]">
              See More
            </Link>
            <FaAngleRight className="text-[#1B90CB] " />
          </div>
        </div>
        <div>
          <ClinicCard/>
        </div>
      </Container>
    </div>
  );
};

export default Clinic;
