// CategorySlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Import necessary modules
// Import your images
import c1 from "../../assets/categoryimages/c1.jpg";
import c2 from "../../assets/categoryimages/c2.jpg";
import c3 from "../../assets/categoryimages/c3.jpg";
import c4 from "../../assets/categoryimages/c4.jpg";
import c5 from "../../assets/categoryimages/c5.jpg";
import c6 from "../../assets/categoryimages/c6.jpg";
import c7 from "../../assets/categoryimages/c3.jpg";
import c8 from "../../assets/categoryimages/c1.jpg";
import c9 from "../../assets/categoryimages/c2.jpg";
import c10 from "../../assets/categoryimages/c6.jpg";

// Create an array of category images
const categoryImages = [
  { src: c1, alt: "Men's Fashion" },
  { src: c2, alt: "Women's Fashion" },
  { src: c3, alt: "Electronics" },
  { src: c4, alt: "Bags and Accessories" },
  { src: c5, alt: "Footwear" },
  { src: c6, alt: "Groceries" },
  { src: c7, alt: "Groceries" },
  { src: c8, alt: "Groceries" },
  { src: c9, alt: "Groceries" },
  { src: c10, alt: "Groceries" },
  // Add more images as needed
];

const CategorySlider = () => {
  return (
    <div className="homecatslider py-6 ">
      <div className=" ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Navigation]} // Includes the Navigation module
          className="mySwiper"
          loop={true} // Enables continuous loop mode
          autoplay={{
            delay: 2000, // 2 seconds delay
            disableOnInteraction: false, // Autoplay won't be disabled after user interactions
          }}
          speed={800} // Transition speed in milliseconds
        >
          {categoryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="item p-3 bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm font-medium text-gray-700">
                  {image.alt}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
