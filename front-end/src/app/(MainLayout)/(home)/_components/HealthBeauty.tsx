import Container from "@/components/shared/Container";
import React from "react";
import icon1 from "@/assets/icon/dental.png";
import Image from "next/image";

const HealthBeauty = () => {

  const beautyData = [
    {
      id: 1,
      category: "Dental",
      details: "Find various attractive promotions at the nearest clinic",
      img: icon1,
    },
    {
      id: 2,
      category: "Skin Care",
      details:
        "Enjoy personalized skincare consultations.",
      img: icon1,
    },
    {
      id: 3,
      category: "Wellness",
      details: "Discover holistic wellness programs for a healthier lifestyle.",
      img: icon1,
    },
    {
      id: 4,
      category: "Hair Care",
      details: "Avail discounts on professional hair treatments and styling.",
      img: icon1,
    },
    {
      id: 5,
      category: "Cosmetic Surgery",
      details: "Explore advanced cosmetic solutions.",
      img: icon1,
    },
  ];

  return (
    <div>
      <Container>
        <div className="py-4 text-2xl font-semibold text-center">
          <h1>Booking Health & Beauty Clinics</h1>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 py-6">
          {beautyData.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image src={item.img} alt={item.category} fill className="object-contain" />
              </div>
              <h2 className="text-lg font-bold text-gray-800">{item.category}</h2>
              <p className="text-sm text-gray-500 mt-2">{item.details}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HealthBeauty;
