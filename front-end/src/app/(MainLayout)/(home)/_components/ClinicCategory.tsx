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

import s1 from "@/assets/clinic/1.png";
import s2 from "@/assets/clinic/2.png";
import s3 from "@/assets/clinic/3.png";
import s4 from "@/assets/clinic/4.png";
import s5 from "@/assets/clinic/5.png";
import s6 from "@/assets/clinic/6.png";
import Container from "@/components/shared/Container";
import Link from "next/link";

export default function ClinicCategory() {
  const beautyData = [
    {
      id: 1,

      img: s1,
    },
    {
      id: 2,

      img: s2,
    },
    {
      id: 3,

      img: s3,
    },
    {
      id: 4,

      img: s4,
    },
    {
      id: 5,

      img: s5,
    },
    {
      id: 6,

      img: s6,
    },
    {
      id: 7,

      img: s3,
    },
    {
      id: 8,

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
              <Link href={`/clinic/${item?.id}`}>
                <div className="flex flex-col items-center justify-center p-4 w-full pb-12 text-center">
                  {/* Image Section */}
                  <div className="flex justify-center">
                    <Image
                      alt="feedback"
                      className="h-32 w-32  "
                      height={100}
                      src={item.img}
                      width={100}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
