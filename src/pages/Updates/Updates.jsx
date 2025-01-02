import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Updates.css";

// Import Swiper modules
import { Navigation } from "swiper/modules";

const Updates = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/200/300.jpg",
  ];

  return (
    <div className="updates-page">
      {/* Green Wave Image */}
      <div className="green-wave-container">
        <img src="src/assets/green wave 3.jpg" alt="Wave" className="green-wave" />
        <h2 className="workshop-heading">Updates</h2>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Poster ${index + 1}`}
                className="carousel-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Green Wave Image Bottom */}
      <img
        src="src/assets/green wave 3.jpg"
        alt="Green Wave"
        className="green-wave-btm"
      />
    </div>
  );
};

export default Updates;