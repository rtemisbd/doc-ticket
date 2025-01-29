import Container from "@/components/shared/Container";
import ServiceCard from "@/components/userUi/ServiceCard";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Beauty = () => {
  return (
    <div className="  pt-8 pb-4">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-black font-bold text-3xl ">Beauty</h1>
          <div className="flex items-center gap-2 ">
            <Link href={"#"} className="text-[#1B90CB]">
              See More
            </Link>
            <FaArrowRight className="text-[#1B90CB] " />
          </div>
        </div>
        <div>
          <ServiceCard />
        </div>
      </Container>
    </div>
  );
};

export default Beauty;
