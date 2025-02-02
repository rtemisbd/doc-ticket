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

 
import Image from "next/image";

import s1 from "@/assets/service/1.png"; 
import s2 from "@/assets/service/2.png"; 
import s3 from "@/assets/service/3.png"; 
import s4 from "@/assets/service/4.png"; 
import Container from "@/components/shared/Container";

export default function Category() {
    const beautyData = [
        {
          id: 1,
          category: "Dental",
          img: s1,
        },
        {
          id: 2,
          category: "Skin Care",
          img: s2,
        },
        {
          id: 3,
          category: "Wellness",
          img: s3,
        },
        {
          id: 4,
          category: "Hair Care",
          img: s4,
        },
        {
          id: 5,
          category: "  Surgery",
          img: s1,
        },
        {
          id: 6,
          category: "Laser  ",
          img: s2,
        },
        {
          id: 7,
          category: "Body Spa",
          img: s3,
        },
        {
          id: 8,
          category: "Aesthetic  ",
          img: s4,
        },
      ];

  return (
    <div className=" py-4">
      <Container>
        <Swiper
          breakpoints={{
            // When screen width is >= 640px (small devices), show 2 slides
            640: {
              slidesPerView: 5,
            },
            // When screen width is >= 1024px (large devices), show 3 slides
            1024: {
              slidesPerView: 8,
            },
          }}
          className="mySwiper"
          freeMode={true}
          modules={[FreeMode, Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={3} // Default to one slide per view on small screens
          spaceBetween={2}
        >
          {beautyData.map((item) => (
          <SwiperSlide key={item.id}>
          <div className="flex flex-col items-center justify-center p-4 w-full pb-12 text-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                alt="feedback"
                className="h-20 w-20 rounded-full"
                height={100}
                src={item.img}
                width={100}
              />
            </div>
        
            {/* Centered Text */}
            <p className="font-medium py-2 text-gray-600 text-center">{item.category}</p>
          </div>
        </SwiperSlide>
        
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
