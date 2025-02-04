import React from "react";

const TitleProfile = ({ heading }: { heading: string }) => {
  return (
    <div>
      <div className="px-4 bg-[#1AB79C] rounded-md py-2 mb-6">
        <h1 className="text-2xl font-bold text-white capitalize">{heading}</h1>
      </div>
    </div>
  );
};

export default TitleProfile;
