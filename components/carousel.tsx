// import * as React from "react"
// import {
//     animate,
//     AnimationOptions,
//     motion,
//     MotionStyle,
//     MotionValue,
//     PanInfo,
//     useMotionValue,
// } from "framer-motion"
// import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
// import { cls } from "@libs/client/utils"

// type CarouselProps = {
//     children: React.ReactNode
//     autoPlay: boolean
//     interval: number
//     loop: boolean
// }

// type ArrowProps = {
//     onClick: () => void
//     left?: boolean
//     children: React.ReactNode
// }

// type SliderProps = {
//     x: MotionValue<number>
//     i: number
//     children: React.ReactNode
//     onDragEnd: (e: Event, dragProps: PanInfo) => void
// }

// type DotProps = {
//     length: number
//     activeIndex: number
//     setActiveIndex: (index: number) => void;
// }

// const transition: AnimationOptions<any> = {
//     type: "spring",
//     bounce: 0,
// }

// const Contaier = React.forwardRef<HTMLDivElement,{ children: React.ReactNode }>((props, ref) => (
//     <div ref={ref} className='relative w-full, h-full overflow-x-hidden flex space-x-[20px]'>
//         {props.children}
//     </div>
// ))

// const Carousel = ({
//     children,
//     autoPlay = true,
//     interval = 2000,
//     loop = true,
// }: CarouselProps) => {
//     const x = useMotionValue(0)
//     const containerRef = React.useRef<HTMLDivElement>(null)
//     const [index, setIndex] = React.useState(0)

//     const calculateNewX = () =>
//         -index * (containerRef.current?.clientWidth || 0) - (index * 20)

//     const handleEndDrag = (e: Event, dragProps: PanInfo) => {
//         const clientWidth = containerRef.current?.clientWidth || 0

//         const { offset } = dragProps

//         if (offset.x > clientWidth / 4) {
//             handlePrev()
//         } else if (offset.x < -clientWidth / 4) {
//             handleNext()
//         } else {
//             animate(x, calculateNewX(), transition)
//         }
//     }

//     const childrens = React.Children.toArray(children)

//     const handleNext = () => {
//         const idx = loop ? 0 : index;
//         setIndex(index + 1 === childrens.length ? idx : index + 1)
//     }

//     const handlePrev = () => {
//         const idx = loop ? childrens.length - 1: 0;
//         setIndex(index - 1 < 0 ? idx : index - 1)
//     }

//     React.useEffect(() => {
//         const controls = animate(x, calculateNewX(), transition)
//         return controls.stop
//     }, [index])

//     React.useEffect(() => {
//         if (!autoPlay) {
//             return
//         }
//         const timer = setInterval(() => handleNext(), interval)
//         return () => clearInterval(timer)
//     }, [handleNext, interval])

//     return (
//         <Contaier ref={containerRef}>
//             {childrens.map((child, i) => (
//                 <Slider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
//                     {child}
//                 </Slider>
//             ))}
//             <Arrow left onClick={handlePrev}><FaAngleDoubleLeft /></Arrow>

//             <Arrow onClick={handleNext}><FaAngleDoubleRight /></Arrow>

//             <Dots
//                     length={childrens.length}
//                     setActiveIndex={setIndex}
//                     activeIndex={index}
//             />
//         </Contaier>
//     )
// }

// const pageStyle: MotionStyle = {
//     width: "100%",
//     height: "100%",
//     display: "inline-block",
//     flex: "none",
// }

// const Slider = ({ x, i, onDragEnd, children }: SliderProps) => (
//     <motion.div
//         style={{
//             ...pageStyle,
//             x,
//             left: `${i * 100}%`,
//             right: `${i * 100}%`,
//         }}
//         drag="x"
//         dragElastic={0.3}
//         onDragEnd={onDragEnd}
//     >
//         {children}
//     </motion.div>
// )

// const dotWrapStyle: React.CSSProperties = {
//     position: "absolute",
//     bottom: "10px",
//     left: "50%",
//     transform: "translateX(-50%)",
// }

// const dotItemStyle: React.CSSProperties = {
//     width: "10px",
//     height: "10px",
//     borderRadius: "50%",
//     margin: "0 10px",
//     display: "inline-block",
//     cursor: "pointer",
//     transition : ".2s all",
// }

// const Dots = ({ length, activeIndex, setActiveIndex }: DotProps) => {
//     return (
//         <div style={dotWrapStyle}>
//             {new Array(length).fill("").map((_, i) => (
//                 <span
//                     onClick={() => setActiveIndex(i)}
//                     key={i}
//                     style={{
//                         ...dotItemStyle,
//                         background: i === activeIndex ? "#008d00" : "#ffffff",
//                         transform: `scale(${i === activeIndex ? 1.7 : 1})`,
//                     }}
//                 ></span>
//             ))}
//         </div>
//     )
// }

// // const baseArrowStyle: React.CSSProperties = {
// //     position: "absolute",
// //     width: "50px",
// //     height: "50px",
// //     //backgroundColor: "rgba(0,0,0,0.5)",
// //     top: "50%",
// //     transform: "translateY(-50%)",
// //     borderRadius: "50%",
// //     color: "#fff",
// //     fontSize: "20px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     cursor: "pointer",
// // }

// const Arrow = ({ left = false, children, onClick }: ArrowProps) => (
//     <div
//         onClick={onClick}
//         // style={{
//         //     ...baseArrowStyle,
//         //     left: left ? "20px" : "initial",
//         //     right: !left ? "10px" : "initial",
//         // }}
//         className = {cls(" cursor-pointer transition-colors text-white absolute top-1/2 -translate-y-1/2 text-2xl hover:text-primary", left?"left-5":"right-5")}
//     >
//         {children}
//     </div>
// )

// export default Carousel

import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay,  } from "swiper";

interface CarouselProps {
    children : ReactNode[]
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        autoplay={{delay : 3000, disableOnInteraction: true}}
        modules={[Navigation, Pagination, Autoplay, ]}
      >
        {
            children.map((child) => <SwiperSlide> { child }</SwiperSlide>)
        }
      </Swiper>
    </>
  );
}