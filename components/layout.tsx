import Nav from "./nav"
import FAB from "./fab"

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <Nav/>
            <FAB/>
            <div>
                {children}
            </div>
            
        </>
    )
}