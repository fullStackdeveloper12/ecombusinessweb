import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles

import { Navigation, Autoplay, Keyboard } from "swiper/modules"; // Import necessary modules

// Import your images
import b1 from "../../assets/bannerimages/b1.jpg";
import b2 from "../../assets/bannerimages/b2.jpg";
// Add more imports as needed

// Create an array of banner images
const bannerImages = [
  { src: b1, alt: "Fashion Collection" },
  { src: b2, alt: "Latest Electronics" },
  // Add more objects as needed
];

const BannerSlider = () => {
  return (
    <div className="p-4">
      <Swiper
        navigation={true} // Enables navigation arrows
        pagination={{ clickable: true }} // Enables clickable pagination dots
        modules={[Navigation, Autoplay, Keyboard]} // Include necessary modules
        autoplay={{
          delay: 2000, // 2 seconds delay
          disableOnInteraction: false, // Autoplay won't be disabled after user interactions
        }}
        loop={true} // Enables continuous loop mode
        keyboard={{
          enabled: true, // Enables keyboard navigation
          onlyInViewport: true,
        }}
        className="mySwiper"
        spaceBetween={30} // Space between slides in pixels
        slidesPerView={1} // Number of slides per view
        speed={2000} // Transition speed in milliseconds
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy" // Enables lazy loading
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
