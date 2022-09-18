import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css"

interface HeroProps {
    title : string;
    subtitle? : string;
    imgurl : string;
}

export default function Hero({title, subtitle, imgurl} : HeroProps) {
    useEffect(
        ()=>{
            AOS.init({
                duration: 1000
            })
        }
    ,[])

    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 px-4 py-12">
            <div className='bg-slate-300 rounded-md w-full h-80'>
               <img src={imgurl} 
                className='w-full h-80 object-cover' />
            </div>
            <div className='mt-12 text-center'>
                <h1 data-aos="fade-left" className='text-8xl font-bold text-primary mr-12'>{title}</h1>
                <h1 data-aos="fade-right" className='text-8xl font-bold text-secondary ml-12 mt-4'>{subtitle}</h1>
            </div>
        </section>
    )
}