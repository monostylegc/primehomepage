import Nav from "./nav"
import Footer from "./footer";

interface LayoutProps{
    children: React.ReactNode;
}


export default function Layout({children}:LayoutProps){
    return(
        <>
            <Nav/>
            <div className="mt-[80px]">
              {children}
            </div>
            <Footer />
        </>
    )
}