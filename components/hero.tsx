import { motion } from "framer-motion";

interface HeroProps {
    title : string;
    subtitle? : string;
    imgurl : string;
}

export default function Hero({title, subtitle, imgurl} : HeroProps) {
    return(
        <section className="flex flex-col justify-center items-center w-full h-[90vh] relative mb-20">
            <img src={ imgurl } alt='main img' className="w-full h-full object-cover absolute -z-10"/>
            <h1 className="text-white ">{ title }</h1>
            <h3 className="text-gray-200 mb-8">{ subtitle }</h3>
            <button className="px-8 py-2 rounded-full transition-all bg-primary text-white hover:scale-105 hover:bg-secondary">예약하기</button>
        </section>
    )
}