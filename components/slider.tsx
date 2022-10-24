import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, } from "swiper";

interface SliderProps {
    children : ReactNode[]
}

export default function Slider({ children }: SliderProps) {
    return (
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            slidesPerView="auto"
            breakpoints={{
              '@0.75': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination ]}
        >
            {
                children.map((child) => <SwiperSlide> { child }</SwiperSlide>)
            }
        </Swiper>
    );
}