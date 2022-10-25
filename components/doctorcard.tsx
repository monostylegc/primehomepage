import Link from "next/link"

interface DoctorCardProps {
    imgurl: string;
    name: string;
    part: string;
    link : string;
}

export default function DoctorCard({imgurl, name, part, link } : DoctorCardProps ) {
    return (
        <Link href={link}>
            <a className='flex flex-col justify-center items-center  rounded-lg snap-center hover:border hover:border-primary transition-all duration-200'>
                <img src={imgurl} className='w-full aspect-square rounded-lg' />
                <h6 className='text-center text-gray-700 mt-1 text-sm'>{name}<span className="text-xs text-gray-400">원장</span> </h6>
                <p className='text-center text-xs text-gray-400 mt-1'>{part}</p>
            </a>
        </Link>
    )
}