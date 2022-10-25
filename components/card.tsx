import Link from "next/link"

interface CardProps {
    imgurl: string;
    title: string;
    description?: string;
    link : string;
}

export default function Card({imgurl, title, description, link } : CardProps ) {
    return (
        <Link href={link}>
            <a className='flex flex-col justify-center items-center shrink-0 snap-center'>
                <img src={imgurl} className='' />
                <h6 className='text-center text-gray-700 mt-1 text-sm'>{title}</h6>
                <p className='text-center text-xs text-gray-400 mt-1'>{description}</p>
            </a>
        </Link>
    )
}