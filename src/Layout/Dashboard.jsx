import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";

import useEnroll from "../hooks/useEnroll";
import useAdmin from "../hooks/UseAdmin";

const Dashboard = () => {
  const [enrolls] = useEnroll();
  //console.log(enrolls);
  //const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">
                    {" "}
                    <FaUtensils></FaUtensils> Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservations">
                    <FaCalendarAlt></FaCalendarAlt> Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <span className="badge inl badge-secondary">
                      +{enrolls?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/menu"> Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">Order Food</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
