"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import caresoul1 from "@/assets/caresoul/1.png";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const PromotionalCover = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Correctly type the ref

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
      {["Slide 1", "Slide 2", "Slide 3"].map((slide, index) => (
        <SwiperSlide
          key={index}
          onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
          onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
        >
          <div className="relative w-full h-[200px] md:h-[250px] p-2 bg-[#1AB79C]">
            {/* <Image src={caresoul1} alt={slide} fill className="object-fill" /> */}

            <h1 className="text-center font-bold text-3xl pt-24">Hospital Cover for Promotion and offers</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromotionalCover;
