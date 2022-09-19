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
        <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pb-12">
            <div className='bg-slate-300 rounded-md w-full h-80' data-aos="fade-up">
               <img src={imgurl} 
                className='w-full h-80 object-cover' />
            </div>
            <div  data-aos="fade-down" className='mt-12 text-center'>
                <h1 className='text-8xl font-bold text-primary mr-12'>{title}</h1>
                <h1 className='text-8xl font-bold text-secondary ml-12 mt-4'>{subtitle}</h1>
            </div>
        </section>
    )
}