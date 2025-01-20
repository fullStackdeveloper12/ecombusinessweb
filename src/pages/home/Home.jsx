import React from "react";
import BannerSlider from "../../components/bannerslider/BannerSlider";
import CategorySlider from "../../components/category/CategorySlider";
import FreeShippingBanner from "../../components/freeshippingbanner/FreeShippingBanner";
import Product from "../productpage/Product";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <CategorySlider />
      <FreeShippingBanner />
      <Product />
    </>
  );
};

export default Home;
