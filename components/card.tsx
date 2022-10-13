import { motion, Variants } from 'framer-motion'
import Link from "next/link"

interface CardProps {
    imgurl: string;
    title: string;
    subtitle? : string;

}

const variants: Variants = {
    offscreen: {
        opacity : 0,
        y: 100
    },
    onscreen: {
      y: 0,
      opacity : 1,
      transition: {
        type: "spring",
        duration: 2
      }
    }
  };

export default function Card({imgurl, title, subtitle} : CardProps ) {
    return (
        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        viewport={{once:true}}
        className="flex flex-col shrink-0">
            <img src={imgurl} className="w-full rounded-[20px] object-cover aspect-[4/5]" />
            <div className="mt-4">
                <h4 className="text-xl text-gray-800 font-bold">{title}</h4>
                <p className="text-gray-500 mt-2">{subtitle}</p>
            </div>            
        </motion.div>
    )
}