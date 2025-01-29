import Image from "next/image";
import React from "react";
import google from "@/assets/icon/Google.png";
import facebook from "@/assets/icon/Facebook.png";
import pinterest from "@/assets/icon/Pinterest.png";
import web from "@/assets/icon/Webflow.png";
import twitch from "@/assets/icon/Twitch.png";

const Company = () => {
  const data = [
    { id: 1, img: google },
    { id: 2, img: facebook },
    { id: 3, img: pinterest },
    { id: 4, img: web },
    { id: 5, img: twitch },
  ];

  return (
    <div>
      <div className="bg-[#ECECEC] py-12">
        <div className="grid grid-cols-1 md:grid-cols-5  gap-2 max-w-7xl mx-auto place-items-center ">
          {data?.map((item, index) => (
      
              <div key={index} className="  relative w-32 h-24 ">
                <Image
                  src={item?.img}
                  alt="tts_logo"
                  fill
                  className="object-contain"
                />
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
