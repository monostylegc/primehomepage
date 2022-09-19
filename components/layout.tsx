import Nav from "./nav"
import FAB from "./fab"
import Footer from "./footer";

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <div className="overflow-x-hidden">
            <Nav/>
            <div className="mt-16"></div>
            <FAB/>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}