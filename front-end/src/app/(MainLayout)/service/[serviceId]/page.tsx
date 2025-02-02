import React from "react";
import ServiceDetails from "./_components/ServiceDetails";

interface IProps {
  params: {
    serviceId: string;
  };
}

const page = ({ params: { serviceId } }: IProps) => {
  return (
    <div>
      <ServiceDetails />
    </div>
  );
};

export default page;
