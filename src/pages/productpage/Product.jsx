import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";

const Product = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <section className="bg-white ">
        <div className="container py-8 w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="left_sec">
              <h2 className="text-[22px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <div className="right_sec w-[55%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Grocciries" />
                <Tab label="Footware" />
                <Tab label="Wellness" />
                <Tab label="Jewelery" />
              </Tabs>
            </div>
          </div>

          <ProductCard items={5} />
        </div>
      </section>
    </>
  );
};

export default Product;
