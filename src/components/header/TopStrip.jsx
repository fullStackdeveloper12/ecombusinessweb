import React from "react";
import { Link } from "react-router-dom";

const TopStrip = () => {
  return (
    <>
      <div className="top-strip py-2 border-t-[2px] border-gray-250 border-b-[1px] ">
        <div className="container m-auto">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px]  ">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to={`/help`}
                    className="text-[12px] hover:text-[#ff5252] font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={`/order`}
                    className="text-[12px] hover:text-[#ff5252] font-[500] transition"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStrip;
