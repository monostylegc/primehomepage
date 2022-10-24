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
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-3 bg-gradient-to-r from-secondary to-primary z-50 origin-left rounded-r-full" />  
            <Nav/>
            <div className="mt-[80px]">
              {children}
            </div>
            <FAB />
            <Footer />
        </>
    )
}