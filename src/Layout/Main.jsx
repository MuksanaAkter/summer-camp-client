import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import NavigationBar from "../Pages/Common/NaigatinBar";


const Main = () => {
    return (
        <div className="">
            <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;