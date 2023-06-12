import { NavLink, Outlet } from "react-router-dom";
import {

  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaMusic,
} from "react-icons/fa";

import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/UseInstructor";
import logo from "../assets/logo1.png";
const Dashboard = () => {

  //console.log(enrolls);
  //const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isinstructor] = useInstructor();
  return (
    <div className="max-w-screen-2xl mx-auto text-white text-xl font-semibold">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:bg-black bg-opacity-80">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
          <img className=" rounded-lg p-3 w-1/2 md:w-full" src={logo} alt="" />
          <h1 className="md:text-3xl text-xl text-center" style={{ fontFamily: "Lobster, cursive" }}>
            Melody<span className="text-yellow-700">MAster</span>
            </h1>
            {isAdmin ? (
              <>
                <li className="text-3xl">
                  <NavLink className="text-2xl" to="/dashboard">
                    Admin Dashboard
                  </NavLink>
                </li>
                <li className="text-xl">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
                <li className="text-xl">
                  <NavLink to="/dashboard/manageClass">
                     <FaMusic></FaMusic> Manage Class
                  </NavLink>
                </li>
               
                <li className="text-xl">
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isinstructor ? (
              <>
             <div className=" mt-5">
             <li className="text-2xl">
                <NavLink to="/dashboard/home">
                   Insructor Dashboard
                </NavLink>
              </li>
              <li className="text-xl">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
              <li className="text-xl text-center">
                <NavLink to="/dashboard/addClass">
                  {" "}
                  <FaMusic></FaMusic> Add Class
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/instructorClass">
                <FaUsers></FaUsers> MY classes
                </NavLink>
              </li>
             </div>
             
            </>
            ) : (
              <>
                <div className="">
                <li className="text-xl text-center pt-3 pb-2">
                  <NavLink to="/dashboard/home">
                     User Dashboard
                  </NavLink>
                </li>
                <li className="text-lg">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
                
                <li className="text-lg">
                  <NavLink to="/dashboard/myclass">
                    <FaMusic></FaMusic> My Selected class
                    
                  </NavLink>
                </li>
                <li className="text-lg">
                  <NavLink to="/dashboard/reservations">
                    <FaCalendarAlt></FaCalendarAlt> My enrolled classes
                  </NavLink>
                </li>
                
                </div>
              </>
            )}

            
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
