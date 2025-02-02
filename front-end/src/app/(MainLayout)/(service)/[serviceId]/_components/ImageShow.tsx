import React from "react";
import img1 from "@/assets/details/1.png";
import img2 from "@/assets/details/2.png";
import img3 from "@/assets/details/3.png";
import Image from "next/image";

const ImageShow = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-[400px]">
      {/* Left Side: One Large Image */}
      <div className="relative w-full h-full">
        <Image src={img1} alt="Large Image" fill className="object-cover rounded-lg" />
      </div>

      {/* Right Side: Upper & Lower Sections */}
      <div className="grid grid-rows-2 gap-4">
        {/* Upper Side: Two Images */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative w-full h-full">
            <Image src={img2} alt="Small Image 1" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative w-full h-full">
            <Image src={img3} alt="Small Image 2" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Lower Side: Two Images */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative w-full h-full">
            <Image src={img2} alt="Small Image 3" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative w-full h-full">
            <Image src={img3} alt="Small Image 4" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageShow;
