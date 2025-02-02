"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

import fd1 from "@/assets/card/card.png"; // Sample image (you can replace it with others)
import Link from "next/link";
import { LocationIcon } from "@/assets/icon";

export default function ServiceCard() {
  const cardData = [
    {
      id: 1,
      serviceName:
        "Install Conventional Metal Braces .Install Conventional Metal Braces Install Conventional Metal Braces ",
      promo: "Review and extra cashback",
      image: fd1,
      place: "Popular House Dhanmondi, Dhaka",
      price: "6175.00",
    },
    {
      id: 2,
      serviceName: "Advanced Teeth Whitening Treatment",
      promo: "Free initial consultation",
      image: fd1,
      place: "Dental Clinic Banani, Dhaka",
      price: "4500.00",
    },
    {
      id: 3,
      serviceName: "Laser Hair Removal - Full Body Package",
      promo: "Up to 20% off for first-time customers",
      image: fd1,
      place: "Glow Skin Center, Gulshan, Dhaka",
      price: "12000.00",
    },
    {
      id: 4,
      serviceName: "Relaxing Full Body Spa Therapy",
      promo: "Complimentary aromatherapy oils",
      image: fd1,
      place: "Heaven Spa, Uttara, Dhaka",
      price: "3500.00",
    },
    {
      id: 5,
      serviceName: "Premium Skin Tightening Treatment",
      promo: "Buy 2 sessions, get 1 free",
      image: fd1,
      place: "DermaGlow Clinic, Mirpur, Dhaka",
      price: "8000.00",
    },
    {
      id: 6,
      serviceName: "PRP Hair Regrowth Treatment",
      promo: "First consultation free",
      image: fd1,
      place: "HairCare Center, Bashundhara, Dhaka",
      price: "10000.00",
    },
    {
      id: 7,
      serviceName: "Facial Rejuvenation with Microdermabrasion",
      promo: "Flat 15% off on first visit",
      image: fd1,
      place: "Elegance Beauty Lounge, Dhanmondi, Dhaka",
      price: "5000.00",
    },
    {
      id: 8,
      serviceName: "Non-Surgical Fat Reduction (Cryolipolysis)",
      promo: "Special discount for packages",
      image: fd1,
      place: "Slim & Trim Clinic, Banani, Dhaka",
      price: "15000.00",
    },
    {
      id: 9,
      serviceName: "Customized Dental Veneers",
      promo: "Free smile consultation",
      image: fd1,
      place: "White Pearl Dental, Uttara, Dhaka",
      price: "18000.00",
    },
    {
      id: 10,
      serviceName: "Dermal Filler Injections by Experts",
      promo: "Get 10% off for two areas",
      image: fd1,
      place: "Radiance Medical Spa, Gulshan, Dhaka",
      price: "20000.00",
    },
  ];

  return (
    <div className=" py-4">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper "
        freeMode={true}
        modules={[FreeMode, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" bg-white rounded-lg shadow-md mb-12          ">
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.serviceName}
                  fill
                  className="object-fill  "
                />
              </div>

              <div className="p-2">
                {/* Service Name */}

                <h2 className="text-md font-medium h-12">
                  {item.serviceName.length > 50 ? (
                    <>
                      {item?.serviceName.slice(0, 50)}
                      <span className="text-blue-500" title={item?.serviceName}>
                        ...
                      </span>
                    </>
                  ) : (
                    item.serviceName
                  )}
                </h2>
                {/* 
                <h2 className="text-md font-medium h-12">{item.serviceName}</h2> */}

                <p className="text-[14px] py-2 text-gray-600 line-through">
                  BDT11000.00
                </p>

                {/* Promo */}
                <p className="inline-block    bg-[#1b90cbe8] px-2 py-1 rounded-sm text-white text-[12px]">
                  Discount 30%
                </p>

                <p className="text-[14px] py-2 text-gray-600 ">
                  Discount Price
                </p>

                <p className=" py-1 text-[#1B90CB] font-bold text-lg">
                  {" "}
                  BDT 6175.00
                </p>

                <hr />
                <div className="flex items-center  gap-1 py-1">
                  <LocationIcon />

                  <p className="text-[14px]">
                    {item.place.length > 20
                      ? `${item.place.substring(0, 20)}...`
                      : item.place}
                  </p>
                </div>
              </div>
              <div className="bg-[#1B90CB] text-center py-2 text-white cursor-pointer rounded-b-md hover:bg-[#1677A6] transition-all duration-300 w-full">
                <Link href={`/${item?.id}`}>
                  <button className="uppercase w-full text-center text-xl cursor-pointer hover:scale-105">
                    Get voucher
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
