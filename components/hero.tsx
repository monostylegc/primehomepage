import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"

interface HeroProps {
    title : string;
    subtitle? : string;
    description? : string;
    imgurl : string;
}

export default function Hero({title, subtitle, imgurl, description} : HeroProps) {
    useEffect(
        ()=>{
            AOS.init({
                duration: 1000
            })
        }
    ,[])

    return(
        <section className="h-[50vh] relative bg-gradient-to-l from-black via-transparent to-black">
            <img src={imgurl} className="absolute w-full h-full object-cover mix-blend-overlay" />
            <div data-aos="fade-up" className='w-full h-full flex flex-col justify-center text-center space-y-4'>
                <h1 className='text-8xl font-bold text-primary '>{title}</h1>
                <h3 className='text-6xl font-semibold text-secondary '>{subtitle}</h3>
                <p className='text-xl font-medium text-gray-600 '>{description}</p>
            </div>
        </section>
    )
}