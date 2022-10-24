import { cls } from '@libs/client/utils';
import Link from "next/link"

interface CardProps {
    imgurl: string;
    title: string;
    subtitle? : string;
    description?: string;
    link? : string;
}



export default function Card({imgurl, title, subtitle, description, link } : CardProps ) {
    return (
        <div className='flex flex-col relative'>
            <img src={imgurl} className="absolute h-full w-full object-cover aspect-squre" />
            
            
        </div>
    )
}