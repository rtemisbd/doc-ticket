"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

// Import carousel images
import caresoul1 from "@/assets/caresoul/1.png";
import caresoul2 from "@/assets/caresoul/2.png";
import caresoul3 from "@/assets/caresoul/3.png";
import caresoul4 from "@/assets/caresoul/4.png";

const carouselImages = [caresoul4,caresoul1, caresoul2, caresoul3,  ]; // Store images in an array

const Caresoul = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Container>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        {carouselImages.map((image, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <div className="relative w-full h-[250px] md:h-[400px] p-2">
              <Image src={image} alt={`Slide ${index + 1}`} fill className="object-fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Caresoul;
