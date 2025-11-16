import { Navbar } from "react-bootstrap";
import NavbarSection from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import FindjobPage from "./FindjobPage";

const HomePage=()=>
{
    return(

        <>
            <NavbarSection/>
            <Home/>
            <About/>
            <FindjobPage/>
           
         
        
        </>

    )
}

export default HomePage;