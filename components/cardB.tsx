import Link from "next/link";

interface CardProps {
    imgurl: string;
    title: string;
    link?: string;
}

export default function CardB({imgurl, title, link} : CardProps ) {
    return (
        <div className="flex flex-col w-44 shrink-0">
            <img src={imgurl} className="w-full h-44 rounded-md object-cover"/>
            <div className="py-1 flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-700">{title}</p>
            </div>
            
            <div className="px-2 text-right">
                { link ?
                <Link href={link}>
                   <a className="text-sm font-medium px-2 py-1 text-blue-500 hover:text-blue-600">
                    더 알아보기</a>
                </Link>
                : null }
            </div>
        </div>
    )
}