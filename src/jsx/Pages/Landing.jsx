import React, { useEffect, useState } from "react";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Keyboard, Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../dist/landing.css";

import LandingData from "../../assets/data/landingdata.json";

const Landing = () => {
  return (
    <div className="landing">
      <div className="upper-spacer"></div>
      <Swiper
        navigation={true}
        modules={[Keyboard, Autoplay, Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop={true}
        // centeredSlides={true}
        spaceBetween={100}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        className="mySwiper"
      >
        {LandingData.map((src) => (
          <SwiperSlide>
            <img className="swiper-img" rel="preload" alt="" src={src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="down-spacer"></div>
    </div>
  );
};

export default Landing;
