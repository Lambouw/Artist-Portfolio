import React, { useEffect, useState } from 'react';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required Swiper modules
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../dist/landing.css';

// import images
import img1 from '../../assets/images/wood/Flammenspiel_1.jpeg';
import img2 from '../../assets/images/wood/Flammenspiel_2.jpeg';
import img3 from '../../assets/images/wood/Flammenspiel_3.jpeg';
import img4 from '../../assets/images/wood/Gedankenwelten.jpeg';
import img5 from '../../assets/images/wood/Engelin.jpeg';

const Landing = () => {
    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setSlidesPerView(1);
            } else if (window.innerWidth >= 700 && window.innerWidth < 1000) {
                setSlidesPerView(2);
            } else if (window.innerWidth >= 1000 && window.innerWidth < 1300) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 1300 && window.innerWidth < 1600) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(5);
            }
        };

        // Initial call to set slidesPerView based on initial viewport width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures that this effect runs only once after initial render

    return (
        <div className="landing">
            <div className="upper-spacer"></div>
            <Swiper
                navigation={true} modules={[Keyboard, Autoplay, Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={slidesPerView}
                loop={true}
                // centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img1}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img2}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img3}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img4}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img5}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img1}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img2}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img3}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img4}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-img" alt="" src={img5}></img>
                </SwiperSlide>
            </Swiper>
            <div className="down-spacer"></div>
        </div>
    );
};

export default Landing;