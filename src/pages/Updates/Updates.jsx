import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Updates.css";
import wave from "../../assets/green wave 3.jpg";
import UpadateImage3 from "../../assets/UpdateImage3.jpg";
import UpdateImage2 from "../../assets/UpdateImage2.jpg";
import UpadateImage1 from "../../assets/UpdateImage1.jpg";


// Import Swiper modules
import { Navigation } from "swiper/modules";

const Updates = () => {
  const images = [
    UpadateImage3,
    UpdateImage2,
    UpadateImage1,
   
    
  ];

  return (
    <div className="updates-page">
      {/* Green Wave Image */}
      <div className="green-wave-container">
        <img src={wave} alt="Wave" className="green-wave" />
        <h2 className="workshop-heading">Updates</h2>
        <span className="loaderUpdate"></span>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1} // Default for larger screens
          spaceBetween={20}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3, // Show 1 image for screens 768px and smaller
              spaceBetween: 10, // Reduce space between images for smaller screens
            },
          }}
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
        src={wave}
        alt="Green Wave"
        className="green-wave-btm"
      />
    </div>
  );
};

export default Updates;
