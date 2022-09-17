import Link from "next/link"
import { useState } from "react"
import { cls } from "../libs/client/utils"

export default function Nav(){
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return(
        <header>
            <nav className="bg-white bg-opacity-50 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/"><a  className="flex items-center">
                        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold text-primary whitespace-nowrap">
                            프라임<span className="text-secondary">병원</span>
                        </span>
                    </a>
                    </Link>
                    <div className="flex items-center lg:order-2 lg:hidden">
                        <button onClick={toggleMenu} type="button" className={cls(!menu? "" : "rotate-180", "transition-all duration-100 inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100")}>
                            { 
                                !menu ? <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                                : 
                                <svg  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            } 
                        </button>
                    </div>
                    <div className={cls(!menu?
                        "hidden":"",
                        "justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:space-x-8")} >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
                                    척추센터
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
                                    관절센터
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 ">
                                    내과 검진
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
                                    진료안내
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">
                                    건강정보
                                </a>
                            </li>
                        </ul>
                        <div>
                            <Link href="#">
                                <a className={cls(!menu?"hidden":"","w-full lg:w-auto lg:flex order-2 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0")}>
                                    로그인
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}