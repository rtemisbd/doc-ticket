import React from "react";
import ServiceDetails from "./_components/ServiceDetails";

interface IProps {
  params: {
    serviceId: string;
  };
}

const Page = async ({ params }: IProps) => {
  const { serviceId } =await params;

  return (
    <div>
      <ServiceDetails   />
    </div>
  );
};

export default Page;
