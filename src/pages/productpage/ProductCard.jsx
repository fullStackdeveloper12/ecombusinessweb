import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Properly import Navigation module
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "./ProductItem";

const ProductCard = ({ items }) => {
  console.log(items);

  return (
    <section className="productsSlider py-5">
      <Swiper
        slidesPerView={items} // Ensure `slidesPerView` is a number
        spaceBetween={10}
        navigation={true} // Enable navigation
        modules={[Navigation]} // Use Navigation module
        className="myswiper"
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductCard;
