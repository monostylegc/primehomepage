import { motion } from "framer-motion";

interface HeroProps {
    title : string;
    subtitle? : string;
    imgurl : string;
}

export default function Hero({title, subtitle, imgurl} : HeroProps) {
    return(
        <section className="flex flex-col justify-center items-center w-full h-[90vh] relative">
            <img src={ imgurl } alt='main img' className="w-full h-full object-cover absolute"/>
            <h1 className="text-white z-10">{ title }</h1>
            <h3 className="text-gray-200 z-10">{ subtitle }</h3>
        </section>
    )
}