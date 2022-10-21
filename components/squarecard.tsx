import { cls } from '@libs/client/utils';
import { motion, Variants } from 'framer-motion'

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
        className='flex flex-col justify-end  aspect-square snap-center 
        relative bg-gradient-to-b from-transparent to-gray-800 transition hover:scale-105 cursor-pointer'>
            <img src={imgurl} className="absolute  w-full h-full object-cover mix-blend-overlay -z-10" />
            <p className='text-white text-center mb-2'>{title}</p>
        </div>
    )
}