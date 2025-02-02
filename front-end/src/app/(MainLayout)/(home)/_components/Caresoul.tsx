"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "@/components/shared/Container";
import caresoul1 from "@/assets/caresoul/1.png";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const Caresoul = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Correctly type the ref

  return (
    <Container>
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
        className="mySwiper mt-2"
      >
        {["Slide 1", "Slide 2", "Slide 3"].map((slide, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Stop autoplay on hover
            onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume autoplay on mouse leave
          >
            <div className="relative w-full h-[250px] md:h-[400px] p-2">
              <Image src={caresoul1} alt={slide} fill className="object-fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Caresoul;
