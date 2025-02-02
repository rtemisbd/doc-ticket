 


import Banner from '@/components/Banner/Banner';
import React from 'react';
import banner1 from '@/assets/banner/3.png'
import banner2 from '@/assets/banner/4.png'

const ServiceAdvertise = () => {
    const bannerData = [
        {
          id: 1,
          img: banner2,
        },
        {
          id: 2,
    
          img: banner1,
        },
        {
          id: 3,
    
          img: banner2,
        },
        {
          id: 4,
    
          img: banner2,
        },
        {
          id: 5,
    
          img: banner1,
        },
        {
          id: 6,
    
          img: banner2,
        },
        {
          id: 7,
    
          img: banner1,
        },
        {
          id: 8,
    
          img: banner2,
        },
      ];
    
    return (
        <div>
            <Banner bannerData={bannerData} />
        </div>
    );
};

export default ServiceAdvertise;