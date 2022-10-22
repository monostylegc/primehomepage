import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion";

const variants = {
    open: { rotate : 90 },
    closed: { rotate : 0 },
}

const variants2 = {
    open: { opacity: 1, x: 0,},
    closed: { opacity: 0, x: "100%", },
  }

export default function Nav(){
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return(
        <header className="flex flex-col z-50 justify-between items-center p-5 h-20 bg-white fixed top-0 left-0 right-0 lg:flex-row">
            <nav className="flex justify-between items-center w-full">
                <Link href="/">
                    <div className="flex items-center cursor-pointer space-x-1 shrink-0">
                        <img src="/logo.png" alt="logo" className="w-12 h-10 object-contain" />
                        <div className="font-semibold">
                            <h3 className="text-[1.2rem] text-primary"><span className="text-secondary">프라임</span>병원</h3>
                            <p className="text-gray-400 text-xs hidden md:flex">PRIMEHOSPITAL</p>    
                        </div>
                    </div>
                </Link>
                <motion.div 
                    animate={menu ? "open" : "closed"}
                    variants={variants}
                >
                    <button onClick={toggleMenu} className="w-8 h-8 lg:hidden hover:text-secondary">
                        {
                            menu?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </button>
                </motion.div>
            </nav>
            <ul className="hidden gap-6 lg:flex lg:flex-row shrink-0">
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">진료안내</li>
                </Link>
                <Link href="/">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">증상별질환안내</li>
                </Link>
                <Link href="/">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">치료안내</li>
                </Link>
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">프라임건강칼럼</li>
                </Link>
                <Link href="#"><li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">물어보기</li>
                </Link>  
                <Link href="#"><li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">로그인</li>
                </Link>                      
            </ul>
            <motion.ul
            variants={variants2}
            animate={menu?"open":"closed"}
            className="flex flex-col gap-8 p-4 text-right bg-white w-[100vw] lg:hidden shrink-0">
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">진료안내</li>
                </Link>
                <Link href="/">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">증상별질환안내</li>
                </Link>
                <Link href="/">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">치료안내</li>
                </Link>
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">프라임건강칼럼</li>
                </Link>
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">물어보기</li>
                </Link>
                <Link href="#">
                    <li className="text-gray-500 cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105 hover:-translate-x-10">로그인</li>
                </Link>                         
            </motion.ul>
        </header>
    )
}