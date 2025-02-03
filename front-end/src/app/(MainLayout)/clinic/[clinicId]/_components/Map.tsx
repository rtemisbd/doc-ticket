/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";

const Map = () => {
  return (
    <div className=" ">
      <iframe
        allowFullScreen={true}
        className="w-full h-[400px] rounded-md"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2097641186797!2d90.37728387594241!3d23.739898089178368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006d9d3e35%3A0xe83a2de847b45f5f!2sThe%20Thread%20Story!5e0!3m2!1sen!2sbd!4v1738051176492!5m2!1sen!2sbd"
      />
    </div>
  );
};

export default Map;
