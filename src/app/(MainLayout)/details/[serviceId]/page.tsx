import React from 'react';
import ServiceDetails from './_components/ServiceDetails';
interface IProps {
    params: {
        serviceId: string;
    };
  }


const page = ({ params: { serviceId } }: IProps) => {

    return (
        <div>
            {/* service page
            {serviceId} */}
            


            <ServiceDetails/>
        </div>
    );
};

export default page;