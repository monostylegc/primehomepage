import { cls } from '@libs/client/utils';
import { motion, Variants } from 'framer-motion'
import Link from "next/link"

interface CardProps {
    imgurl: string;
    title: string;
    subtitle? : string;
    additional? : string;
    description?: string;
    link? : string;
    width?: number;  
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

export default function Card({imgurl, title, subtitle,additional,description, link, width } : CardProps ) {
    return (
        <div 
        // initial="offscreen"
        // whileInView="onscreen"
        // variants={variants}
        // viewport={{once:true}}
        className='flex flex-col shrink-0 snap-center'
        style={{"width": width }}
        >
            <img src={imgurl} className="w-full rounded-[20px] object-cover aspect-[4/5]" />
            <div className="mt-3">
                <div className='flex items-baseline justify-between'>
                    <h4 className="text-xl text-gray-800 font-bold">{title}
                    <span className='text-xs text-gray-500 ml-1'>{additional}</span>
                    </h4>
                    <span className='text-xs text-gray-500'>{description}</span>
                </div>
                <p className="text-gray-500 mt-2 truncate">{subtitle}</p>
            </div>
            {link? 
                <div className='flex items-center justify-end mt-3 '>
                    {width?  <Link href={`${link}`}><span className={cls((width > 200)?'text-xl':'text-lg',' flex items-center text-secondary transition-all cursor-pointer hover:scale-105')}>
                        더 보기
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    </Link>:  <Link href={`${link}`}><span className='text-2xl flex items-center text-secondary transition-all cursor-pointer hover:scale-105'>
                        더 보기
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </span>
                    </Link>} 
                </div>
            : null}
            
        </div>
    )
}