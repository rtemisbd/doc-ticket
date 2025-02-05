import React from "react";
import TitleProfile from "../_components/TitleProfile";

const Page = () => {
  return (
    <div>
      <TitleProfile heading={"Transaction history"} />

      <div>
        {[1, 2, 3,4].map((item, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-2 shadow-xl p-4  items-center rounded-md mb-4">
            {/* Left side */}
            <div>
              <p className="text-lg font-medium">
                Install Conventional Metal Braces by Certified Orthodontists
              </p>

              <div className="flex  items-center justify-between md:justify-start gap-4 pt-2">
                <p className="text-[#118AB2] font-semibold">Price BDT 8,790.00</p>
                <button className="bg-[#1AB79C] rounded-md px-4 py-1 text-sm text-white">
                  Continue payment
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:flex lg:justify-end ">
              <div className="flex flex-col lg:items-end gap-2 w-full lg:w-auto">
                <button className="bg-[#1AB79C] rounded-md px-5 py-2 text-sm text-white font-medium shadow-md hover:bg-[#17a28c] hover:shadow-lg active:scale-95 transition-all duration-300 w-full lg:w-52">
                  Get Invoice
                </button>
                <button className="bg-[#118AB2] rounded-md px-5 py-2 text-sm text-white font-medium shadow-md hover:bg-[#117192] hover:shadow-lg active:scale-95 transition-all duration-300 w-full lg:w-52">
                  Voucher Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
