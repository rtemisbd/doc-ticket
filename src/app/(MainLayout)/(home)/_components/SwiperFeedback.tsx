"use client";

import React from "react";
// Import Swiper React components
// eslint-disable-next-line import/order
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
// eslint-disable-next-line import/order
import { FreeMode, Pagination } from "swiper/modules";

// Import React Icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

import fd1 from "@/assets/feedback/1.jpg"; // Sample image (you can replace it with others)

export default function SwiperFeedback() {
  // Feedback data
  const feedbackData = [
    
    {
      id: 2,
      name: "John Doe",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
      image: fd1,
      place: "Dhaka",
    },
    {
      id: 3,
      name: "Jane Smith",
      feedback:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: fd1,
      place: "Dhaka",
    },
    {
      id: 4,
      name: "Alice Johnson",
      feedback:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: fd1,
      place: "Dhaka",
    },
    
        {
      id: 6,
      name: "Charlie Brown",
      feedback:
        "Excepteur sint t non proident, sunt in culpa qui officia deserunt mollit anim id est fdgh laborum.",
      image: fd1,
      place: "Dhaka",
    },
  ];

  return (
    <div className="my-24 py-4">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
        freeMode={true}
        modules={[FreeMode, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1} 
        spaceBetween={30}
      >
        {feedbackData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center p-4 w-full pb-12">
              {/* Image Section */}
              <div className="flex justify-center">
                <Image
                  alt="feedback"
                  className="h-20 w-20 rounded-full"
                  height={100}
                  src={item.image}
                  width={100}
                />
              </div>

              {/* Text Section */}
              <div className="text-center mt-2">
                <p className="font-bold">{item.name}</p>
                <div className="relative">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-[#650934] text-3xl absolute top-0 left-0 mt-1" />

                  {/* Feedback Text */}
                  <h1 className="text-gray-500 pt-4 ml-9 leading-relaxed px-2">
                    {item.feedback}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
