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

import s1 from "@/assets/banner/1.png";
import s2 from "@/assets/banner/2.png";
import s3 from "@/assets/banner/3.png";
import s4 from "@/assets/banner/4.png";

import Container from "@/components/shared/Container";

export default function ClinicBanner() {
  const beautyData = [
    {
      id: 1,

      img: s2,
    },
    {
      id: 2,

      img: s1,
    },
    {
      id: 3,

      img: s2,
    },
    {
      id: 4,

      img: s1,
    },
    {
      id: 5,

      img: s2,
    },
    {
      id: 6,

      img: s1,
    },
    {
      id: 7,

      img: s2,
    },
    {
      id: 8,

      img: s1,
    },
  ];

  return (
    <div className=" ">
      <Container>
        <Swiper
          breakpoints={{
            // When screen width is >= 640px (small devices), show 2 slides
            640: {
              slidesPerView: 2,
            },
            // When screen width is >= 1024px (large devices), show 3 slides
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
          slidesPerView={1} // Default to one slide per view on small screens
          spaceBetween={2}
        >
          {beautyData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center px-2 w-full pb-10 text-center  ">
                {/* Image Section */}
                <div className="relative w-full h-[200px] md:h-[200px] p-2">
                  <Image
                    src={item?.img}
                    alt={""}
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
