import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

const FreeShippingBanner = () => {
  return (
    <>
      <center>
        <section className="py-16 bg-white mx-auto">
          <div className="container">
            <div className="freeshipping w-full p-4 border border-red-600 flex items-center justify-between">
              <div className="col1 flex items-center gap-4">
                <LiaShippingFastSolid className="text-[50px]" />
                <span className="text-[20px] font-[600] uppercase">
                  Free Shipping
                </span>
              </div>

              <div className="col2">
                <p className="mb-0 font-[500]">
                  Free Delivery Now On Your First Order and over $200
                </p>
              </div>

              <p className="font-bold text-[25px]">- Only $200</p>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default FreeShippingBanner;
