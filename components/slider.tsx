import React, { ReactNode, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/css/pagination";
// import required modules
import SwiperCore, { Navigation, Pagination, Autoplay, } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface SliderProps {
    children : ReactNode[]
    slidesPerView?: number // 한 번에 보이는 카드 수
    autoplay? : boolean
    pagination? : boolean
    loop? : boolean
    delay? : number
    navigation? : boolean
}

export default function Slider({ children, navigation = false ,slidesPerView = 1, autoplay = false, pagination = false, loop = false, delay = 3000 }: SliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperSetting, setSwiperSetting] = useState<any | null>(null);

  const autoPlay = autoplay ? {delay : delay, disableOnInteraction: false,} : false
  const naVigation = navigation ? {
      prevEl: prevRef.current, // 이전 버튼
      nextEl: nextRef.current, // 다음 버튼
    } : false
  
  const pageclick = pagination ? {
    clickable : true
  } : false

  const slidebreakpoint = slidesPerView == 1 ? null : {
    768: {
      slidesPerView: 3,  //브라우저가 768보다 클 때
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 16,
    },
  }

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 16,
        navigation: naVigation,
        autoplay : autoPlay,
        loop : loop,
        pagination : pageclick,
        scrollbar: { draggable: true, el: null },
        slidesPerView : slidesPerView,
        breakpoints : slidebreakpoint,

        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
          swiper.navigation.update();
        },
      });
    }
  }, [swiperSetting, slidesPerView]);

  return (
    <div className="flex justify-center items-center space-x-2 ">
      {navigation?
        <button ref={prevRef} className="cursor-pointer text-gray-500 text-2xl disabled:invisible">
          <FaAngleLeft />
        </button> : null}
      {swiperSetting && (
          <Swiper {...swiperSetting}>
            {children.map((child ,i ) => (
              <SwiperSlide key={ i } className=''>{child}</SwiperSlide>
            ))}
          </Swiper>
      )}
      {navigation?
        <button ref={nextRef} className="cursor-pointer text-gray-500 text-2xl disabled:invisible">
          <FaAngleRight />
        </button> : null}
    </div>
  );
}

