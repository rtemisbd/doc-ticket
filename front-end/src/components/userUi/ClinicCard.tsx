"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

import fd1 from "@/assets/card/clinic.png";
import Link from "next/link";
import { LocationIcon } from "@/assets/icon";

export default function ClinicCard() {
 

  const clinicData = [
    {
      id: 1,
      clinicName: "Popular Diagnostic Ltd.",
      service: [
        "Aesthetic treatment",
        "Skin care",
        "Laser treatment",
        "Surgery",
        "Dental",
      ],
      discount: "30",
      location: "Road no 02, Dhanmondi, Dhaka",
    },
    {
      id: 2,
      clinicName: "Square Hospital Ltd.",
      service: [
        "Heart checkup",
        "Neurological tests",
        "Orthopedic surgery",
        "Pediatric care",
        "General health checkup",
      ],
      discount: "25",
      location: "Panthapath, Dhaka",
    },
    {
      id: 3,
      clinicName: "United Hospital",
      service: [
        "Cancer screening",
        "Radiology",
        "Emergency care",
        "Urology",
        "Physical therapy",
      ],
      discount: "20",
      location: "Gulshan 2, Dhaka",
    },
    {
      id: 4,
      clinicName: "Ibn Sina Hospital",
      service: [
        "Diagnostic tests",
        "ENT treatment",
        "Orthopedic surgery",
        "General medicine",
        "Nephrology services",
      ],
      discount: "15",
      location: "Satmasjid Road, Dhanmondi, Dhaka",
    },
    {
      id: 5,
      clinicName: "Labaid Specialized Hospital",
      service: [
        "Cardiac care",
        "Diabetes management",
        "Skin care",
        "Plastic surgery",
        "Rehabilitation services",
      ],
      discount: "35",
      location: "Road 4, Dhanmondi, Dhaka",
    },
    {
      id: 6,
      clinicName: "Apollo Hospital",
      service: [
        "Oncology services",
        "Gastroenterology",
        "Psychiatry",
        "Neurology care",
        "Pulmonary services",
      ],
      discount: "40",
      location: "Bashundhara R/A, Dhaka",
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
            slidesPerView: 3,
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
        {clinicData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" bg-white rounded-lg shadow-md mb-12     p-1   flex   ">
              {/* Image */}
              <div className="relative w-36    p-2">
                <Image
                  src={fd1}
                  alt=""
                  //   src={item.image}
                  //   alt={item.serviceName}
                  fill
                  className="object-fill rounded-md "
                />
              </div>
              <div>
                <div className="p-2">
                  {/* Service Name */}

                  <h2 className="text-md font-medium h-12">
                    {item.clinicName.length > 50 ? (
                      <>
                        {item?.clinicName.slice(0, 50)}
                        <span
                          className="text-blue-500"
                          title={item?.clinicName}
                        >
                          ...
                        </span>
                      </>
                    ) : (
                      item.clinicName
                    )}
                  </h2>

                  {/* service  */}

                  <div className="text-[12px] pb-3 text-gray-700">
                    {item?.service?.map((servicesItem, index) => (
                      <span key={index}>
                        {servicesItem}
                        {index !== item.service.length - 1 && " || "}
                      </span>
                    ))}
                  </div>

                  {/* Promo */}
                  <p className="inline-block    bg-[#1b90cbe8] px-2 py-1 rounded-sm text-white text-[12px]">
                    Discount up to 30%
                  </p>

                  {/* location  */}
                  <div className="pt-4">
                    <hr />
                    <div className="flex items-center  gap-1 py-1">
                    <LocationIcon/>

                      <p className="text-[14px] text-gray-500">
                        {item.location.length > 30
                          ? `${item.location.substring(0, 30)}...`
                          : item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
