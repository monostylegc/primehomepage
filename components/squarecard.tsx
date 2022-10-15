import { cls } from '@libs/client/utils';
import { motion, Variants } from 'framer-motion'
import Link from "next/link"

interface CardProps {
    imgurl: string;
    title: string;
    link : string;
}

// const variants: Variants = {
//     offscreen: {
//         opacity : 0,
//         y: 100
//     },
//     onscreen: {
//       y: 0,
//       opacity : 1,
//       transition: {
//         type: "spring",
//         duration: 2
//       }
//     }
//   };

export default function SquareCard({imgurl, title, link } : CardProps ) {
    return (
        <div 
        // initial="offscreen"
        // whileInView="onscreen"
        // variants={variants}
        // viewport={{once:true}}
        className='flex flex-col rounded-3xl justify-end p-3 aspect-square snap-center relative bg-gradient-to-b from-transparent to-gray-800'>
            <img src={imgurl} className="absolute rounded-3xl w-full h-full object-cover mix-blend-overlay" />
            <p className='text-white text-center'>{title}</p>
        </div>
    )
}