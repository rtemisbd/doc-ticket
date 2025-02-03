import React from "react";
import ClinicProfile from "./_components/ClinicProfile";
 

interface IProps {
  params: {
    clinicId: string;
  };
}

const Page = async ({ params }: IProps) => {
  const { clinicId } =await params;

  return (
    <div>
     <ClinicProfile/>
    </div>
  );
};

export default Page;
