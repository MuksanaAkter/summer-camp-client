import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
  FaMusic,
} from "react-icons/fa";

import useEnroll from "../hooks/useEnroll";
import useAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/UseInstructor";
import logo from "../assets/logo1.png";
const Dashboard = () => {
  const [enrolls] = useEnroll();
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
                    Admin Home
                  </NavLink>
                </li>
                <li className="text-xl">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
                {/* <li className="text-xl">
                  <NavLink to="/dashboard/addClass">
                    {" "}
                     Add Class
                  </NavLink>
                </li> */}
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
             <li className="text-3xl">
                <NavLink to="/dashboard/home">
                   Insructor Home
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
                  <FaUtensils></FaUtensils> Add Class
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/">
                <FaUsers></FaUsers> MY classes
                </NavLink>
              </li>
             </div>
             
            </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
                <li>
                  <NavLink to="/dashboard/reservations">
                    <FaCalendarAlt></FaCalendarAlt> My enrolled classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclass">
                    <FaShoppingCart></FaShoppingCart> My Selected class
                    <span className="badge inl badge-secondary">
                      +{enrolls?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
