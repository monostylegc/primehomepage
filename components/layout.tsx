<<<<<<< HEAD
=======
import FAB from "./fab";
import Footer from "./footer";
import Nav from "./nav"

>>>>>>> d66aedc700f6e0c63049fcc94e97e4f1f7fb5ea9
interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
<<<<<<< HEAD
            <div>
=======
            <Nav />
            <div className="max-w-7xl mx-auto mt-14 md:mt-16">
>>>>>>> d66aedc700f6e0c63049fcc94e97e4f1f7fb5ea9
                {children}
                <FAB />    
            </div>
            
            <Footer />
        </>
    )
}