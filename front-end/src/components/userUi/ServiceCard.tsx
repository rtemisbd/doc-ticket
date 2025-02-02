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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5C4.5 4.17157 5.17157 3.5 6 3.5C6.82843 3.5 7.5 4.17157 7.5 5C7.5 5.82843 6.82843 6.5 6 6.5C5.17157 6.5 4.5 5.82843 4.5 5ZM6 4.25C5.58579 4.25 5.25 4.58579 5.25 5C5.25 5.41421 5.58579 5.75 6 5.75C6.41421 5.75 6.75 5.41421 6.75 5C6.75 4.58579 6.41421 4.25 6 4.25Z"
                      fill="#757575"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.625 5C2.625 3.13604 4.13604 1.625 6 1.625C7.86396 1.625 9.375 3.13604 9.375 5C9.375 5.37176 9.2 5.85998 8.97622 6.337C8.74407 6.83183 8.42951 7.37553 8.09327 7.87989C7.75762 8.38336 7.39296 8.85877 7.05739 9.21298C6.89027 9.38938 6.72199 9.54468 6.56109 9.65873C6.4142 9.76284 6.21581 9.875 6 9.875C5.78419 9.875 5.5858 9.76284 5.43891 9.65873C5.27801 9.54468 5.10973 9.38938 4.94261 9.21298C4.60704 8.85877 4.24238 8.38336 3.90673 7.87989C3.57049 7.37553 3.25593 6.83183 3.02378 6.337C2.8 5.85998 2.625 5.37176 2.625 5ZM6 2.375C4.55025 2.375 3.375 3.55025 3.375 5C3.375 5.19074 3.48125 5.54627 3.70278 6.01846C3.91595 6.47285 4.21076 6.98384 4.53077 7.46386C4.85137 7.94476 5.18983 8.38342 5.48708 8.69717C5.63637 8.85476 5.76691 8.97192 5.87261 9.04684C5.94176 9.09585 5.98298 9.11432 6 9.12118C6.01702 9.11432 6.05824 9.09585 6.12739 9.04684C6.23309 8.97192 6.36363 8.85476 6.51292 8.69717C6.81017 8.38342 7.14863 7.94476 7.46923 7.46386C7.78924 6.98384 8.08405 6.47285 8.29722 6.01846C8.51875 5.54627 8.625 5.19074 8.625 5C8.625 3.55025 7.44975 2.375 6 2.375Z"
                      fill="#757575"
                    />
                    <path
                      d="M3.10721 8.7413C3.30567 8.68209 3.41856 8.4732 3.35935 8.27474C3.30014 8.07628 3.09125 7.96339 2.89279 8.0226C2.41094 8.16636 1.99132 8.35002 1.68373 8.57444C1.38369 8.79337 1.125 9.10201 1.125 9.5C1.125 9.87126 1.35106 10.1653 1.62152 10.3784C1.8962 10.5949 2.27043 10.7734 2.69943 10.9164C3.56137 11.2037 4.72827 11.375 6 11.375C7.27173 11.375 8.43863 11.2037 9.30057 10.9164C9.72957 10.7734 10.1038 10.5949 10.3785 10.3784C10.6489 10.1653 10.875 9.87126 10.875 9.5C10.875 9.10201 10.6163 8.79337 10.3163 8.57444C10.0087 8.35002 9.58906 8.16636 9.10721 8.0226C8.90875 7.96339 8.69986 8.07628 8.64065 8.27474C8.58144 8.4732 8.69433 8.68209 8.89279 8.7413C9.33156 8.8722 9.66194 9.02544 9.8742 9.18031C10.094 9.34069 10.125 9.45374 10.125 9.5C10.125 9.54296 10.0992 9.64356 9.91425 9.78934C9.73351 9.93178 9.44873 10.0765 9.0634 10.2049C8.29665 10.4605 7.21355 10.625 6 10.625C4.78645 10.625 3.70335 10.4605 2.9366 10.2049C2.55127 10.0765 2.26649 9.93178 2.08575 9.78934C1.90077 9.64356 1.875 9.54296 1.875 9.5C1.875 9.45374 1.906 9.34069 2.1258 9.18031C2.33806 9.02544 2.66844 8.8722 3.10721 8.7413Z"
                      fill="#757575"
                    />
                  </svg>

                  <p className="text-[14px]">
                    {item.place.length > 20
                      ? `${item.place.substring(0, 20)}...`
                      : item.place}
                  </p>
                </div>
              </div>
              <div className="bg-[#1B90CB] text-center py-2 text-white cursor-pointer rounded-b-md hover:bg-[#1677A6] transition-all duration-300 w-full">
                <Link href={`/service/${item?.id}`}>
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
