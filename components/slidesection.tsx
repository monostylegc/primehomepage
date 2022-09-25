import { Children } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';


interface SlideSectionProps {
    title: string;
    description? : string;
    children : React.ReactNode;
}

export default function SlideSection({title, description, children} : SlideSectionProps){
    const childrenArray = Children.toArray(children)

    return (
        <section className='bg-white m-4 p-8 rounded-lg max-w-7xl'>
          <h2 className='text-primary text-5xl mb-4'>{title}</h2>
          <p className='text-gray-500 text-md mb-4'> {description }</p>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              childrenArray.map((c,i)=> {
                return <SwiperSlide key={i}>{c}</SwiperSlide>
              })
            }
          </Swiper>
      </section>
    )
}