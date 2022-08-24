import FAB from "./fab";
import Footer from "./footer";
import Nav from "./nav"

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <Nav />
            <div className="max-w-7xl mx-auto mt-14 md:mt-16">
                {children}
                <FAB />    
            </div>
            
            <Footer />
        </>
    )
}