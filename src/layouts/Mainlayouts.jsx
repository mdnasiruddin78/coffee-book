import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Mainlayouts = () => {
    return (
        <div>
          <div className="h-[50px]">
          <Navbar></Navbar>
          </div>
          <div className="min-h-[calc(100vh-232px)] p-12 container mx-auto">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>  
        </div>
    );
};

export default Mainlayouts;