import Link from "next/link"
import { cls } from "@libs/client/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    open: { rotate : 90 },
    closed: { rotate : 0 },
}

// const variants2 = {
//     open: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"},
//     closed: { clipPath : "polygon(0 0, 100% 0, 100% 0, 0 0)" },
// }

export default function Nav(){
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return(
        <header className="flex flex-col justify-between items-center p-5 h-20 bg-white fixed top-0 left-0 right-0 lg:flex-row z-30">
            <nav className="flex justify-between items-center w-full">
                <Link href="/">
                    <div className="flex items-center cursor-pointer space-x-1 shrink-0">
                        <img src="/photo/logo.png" alt="logo" className="w-36 lg:w-48" />
                    </div>
                </Link>
                <motion.div 
                    variants={variants}
                    animate={menu ? "open" : "closed"}
                    //className={cls(menu ? "transition duration-200" : "rotate-180")}
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
            <ul className="hidden gap-6 lg:flex lg:flex-row shrink-0 text-gray-700">
                <Link href="#">
                    <li className=" cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        진료안내
                    </li>
                </Link>
                <Link href="/">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        척추센터    
                    </li>
                </Link>
                <Link href="/">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        관절센터
                    </li>
                </Link>
                <Link href="#">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        내과센터
                    </li>
                </Link>
                <Link href="#">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        치료센터
                    </li>
                </Link>
                <Link href="#">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        종합검진센터
                    </li>
                </Link>
                <Link href="#">
                    <li className="cursor-pointer transition-all duration-200 hover:text-primary hover:scale-105">
                        알림마당
                    </li>
                </Link>   
            </ul>
            <AnimatePresence>
            { menu && 
                (<motion.ul 
                initial={{opacity :0, height :0}}
                animate={{opacity:1, height: "auto"}}
                transition ={{default: { ease: "linear" }}}
                exit={{ opacity: 0, height : 0 }}
                className="flex flex-col text-center mt-2 bg-white w-[100vw] lg:hidden shrink-0">
                <Link href="#">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            진료안내
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="cursor-pointer transition-all duration-200 rounded-md p-4 hover:text-primary hover:bg-gray-200">
                            척추센터    
                        </li>
                    </Link>
                    <Link href="/">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            관절센터
                        </li>
                    </Link>
                    <Link href="#">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            내과센터
                        </li>
                    </Link>
                    <Link href="#">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            치료센터
                        </li>
                    </Link>
                    <Link href="#">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            종합검진센터
                        </li>
                    </Link>
                    <Link href="#">
                        <li className="cursor-pointer transition-all duration-200 p-4 rounded-md hover:text-primary hover:bg-gray-200">
                            알림마당
                        </li>
                    </Link>   
                </motion.ul>)}
            </AnimatePresence>
        </header>
    )
}