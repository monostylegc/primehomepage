import Link from "next/link";

interface CardProps {
    imgurl: string;
    title: string;
    subtitle? : string;
    description? : string;
    link?: string;
}

export default function CardA({imgurl, title, subtitle, description, link} : CardProps ) {
    return (
        <div className="flex flex-col w-48 shrink-0">
            <img src={imgurl} className="w-full h-52 rounded-md object-cover"/>
            <div className="py-1 flex items-center space-x-2">
                <h3 className="text-md font-semibold text-gray-700">{title}</h3>
                <p className="text-xs font-medium text-gray-400">{subtitle}</p>
            </div>
            <div className="">
                <h5 className="text-xs font-medium text-gray-500 truncate">{description}</h5>
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