import React from "react";
import BannerSlider from "../../components/bannerslider/BannerSlider";
import CategorySlider from "../../components/category/CategorySlider";
import FreeShippingBanner from "../../components/freeshippingbanner/FreeShippingBanner";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <CategorySlider />
      <FreeShippingBanner />
    </>
  );
};

export default Home;
