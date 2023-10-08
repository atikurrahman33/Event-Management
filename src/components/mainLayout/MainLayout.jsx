import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const MainLayout = () => {
    return (
       <div>
         <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
       </div>

    );
};

export default MainLayout;