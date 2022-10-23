import React, { ReactNode, useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

interface CarouselProps {
    children : ReactNode[]
}

export default function Carousel({children}:CarouselProps) {
    const autoplay = useMemo(()=>{
        return {
            delay: 5000,
            disableOnInteraction: true,
      }},[])

      const style = useMemo(()=>{
        return {
            "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff"
        }},[])

  return (
    <>
      <Swiper
        style={style}
        navigation={true}
        pagination={{clickable: true,}}
        loop={true}
        autoplay={autoplay}
        modules={[Navigation, Pagination,Autoplay]}
      >
        {
            children.map((child, i) => <SwiperSlide key= {i}>{child}</SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
