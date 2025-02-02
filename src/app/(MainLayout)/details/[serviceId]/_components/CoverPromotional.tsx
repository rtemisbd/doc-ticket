"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "@/components/shared/Container";
import caresoul1 from "@/assets/caresoul/1.png";
import caresoul2 from "@/assets/banner/3.png";
import caresoul3 from "@/assets/banner/4.png";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const CoverPromotional = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Correctly type the ref

  const data=[
    {
      id:1,
      img:caresoul1
    },
    {
      id:2,
      img:caresoul1
    },
    {
      id:3,
      img:caresoul1
    }
  ]

  return (
 
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
            onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
          >
            <div className="relative w-full h-[150px] md:h-[200px] p-2 bg-sky-400">
              {/* <Image src={item.img} alt={`Slide ${item.id}`} fill className="object-fill" /> */}
              <h1 className="text-center pt-20 text-3xl">All Promotional Image Show in This Position</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
  );
};

export default CoverPromotional;
