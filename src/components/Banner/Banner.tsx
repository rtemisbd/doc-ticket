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

import Container from "@/components/shared/Container";

import banner1 from '@/assets/banner/1.png'
import banner2 from '@/assets/banner/2.png'

const Banner = ({bannerData}:any) => {
  // const bannerData = [
  //   {
  //     id: 1,
  //     img: banner2,
  //   },
  //   {
  //     id: 2,

  //     img: banner1,
  //   },
  //   {
  //     id: 3,

  //     img: banner2,
  //   },
  //   {
  //     id: 4,

  //     img: banner2,
  //   },
  //   {
  //     id: 5,

  //     img: banner1,
  //   },
  //   {
  //     id: 6,

  //     img: banner2,
  //   },
  //   {
  //     id: 7,

  //     img: banner1,
  //   },
  //   {
  //     id: 8,

  //     img: banner2,
  //   },
  // ];

  return (
    <div className="    ">
      <Container>
        <Swiper
          breakpoints={{
            // When screen width is >= 640px (small devices), show 2 slides
            640: {
              slidesPerView: 5,
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
          spaceBetween={20}
        >
          {bannerData?.map((item:any) => (
            <SwiperSlide key={item.id}>
              <div className=" relative h-52 w-full mb-6">
                <Image
                  alt="feedback"
                  fill
                  className="    object-contain"
                  src={item.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;
