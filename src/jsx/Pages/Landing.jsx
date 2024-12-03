import React, { useEffect, useRef } from "react";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Keyboard, Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/css/landing.css";

import image1 from "../../assets/images/webp/wood/Gegensaetze_Festhalten_und_Loslassen.webp";
import image2 from "../../assets/images/webp/wood/Leidenschaft.webp";
import image3 from "../../assets/images/webp/wood/Spiegel_der_Vergangenheit.webp";
import image4 from "../../assets/images/webp/wood/Fanal.webp";
import image5 from "../../assets/images/webp/wood/Tango.webp";
import image6 from "../../assets/images/webp/wood/Flammenspiel_1.webp";
import image7 from "../../assets/images/webp/wood/Flammenspiel_2.webp";
import image8 from "../../assets/images/webp/wood/Flammenspiel_3.webp";
import image9 from "../../assets/images/webp/wood/Gedankenwelt.webp";
import image10 from "../../assets/images/webp/caststone/Stehende_1.webp";
import image11 from "../../assets/images/webp/caststone/Tanzende.webp";
import image12 from "../../assets/images/webp/stone/limestone/Schreitende.webp";
import image13 from "../../assets/images/webp/stone/marble/Ein_gutes_Leben.webp";
import image14 from "../../assets/images/webp/stone/marble/Portrait.webp";
import image15 from "../../assets/images/webp/stone/marble/Marmorbueste_einer_Taenzerin.webp";
import image16 from "../../assets/images/webp/stone/marble/Kleine_Dicke_im_Stein.webp";

const Landing = () => {
  const landingImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.classList.add("fade-in-swiper");
  }, []);

  return (
    <div className="landing" ref={swiperRef}>
      <div className="upper-spacer"></div>
      <Swiper
        navigation={true}
        modules={[Keyboard, Autoplay, Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop={true}
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
        {landingImages.map((src) => (
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
