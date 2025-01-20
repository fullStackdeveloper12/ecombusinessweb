import React from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

const ProductItem = () => {
  return (
    <>
      <div className="productitem rounded-md overflow-hidden  border-2 border-[rgba(0,0,0,0.1)] shadow-md">
        <div className="imgwrapper w-[100%] h-[250px] overflow-hidden">
          <img
            src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
            className="w-full"
          />
        </div>
        <div className="info p-3 bg-[#f1f1f1]">
          <h6 className="text-[13px]">Soylent Green</h6>
          <h3 className="text-[14px] mt-2 font-[500]">T shirt Blue Colour </h3>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <p>$400</p>
          <Button className="!w-full !text-white !bg-blue-700">
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
