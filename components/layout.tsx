import Nav from "./nav"
import Footer from "./footer";
import FAB from "./fab";
import { motion, useScroll } from "framer-motion";

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    const { scrollYProgress } = useScroll();
    
    return(
        <>
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-[80px] left-0 right-0 h-[2px] bg-primary z-50 origin-left" />  
            <Nav/>
            <div className="mt-[80px]">
              {children}
            </div>
            <FAB />
            <Footer />
        </>
    )
}