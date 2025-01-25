import React from "react";

const Title = ({ heading }: { heading: string }) => {
  return (
    <div className="mt-12  pb-6 text-center sm:text-left">
      <h1 className="uppercase text-black font-bold text-3xl border-b-4 border-[#650934] inline-block pb-2.5">
        {heading}
      </h1>
    </div>
  );
};

export default Title;
