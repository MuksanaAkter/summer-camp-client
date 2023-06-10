import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import useEnroll from "../../hooks/useEnroll";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [enrolls]= useEnroll();
  //console.log(enrolls);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="font-bold text-xl">
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="font-bold text-xl">
        {" "}
        <Link to="/instructor">Instructors</Link>{" "}
      </li>

      <li className="font-bold text-xl">
        <Link to="/classes">Classes</Link>
      </li>
    
        <li className="font-bold text-xl">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/music">class <span>{enrolls?.length|| 0}</span></Link>
      </li>
            
        </>       
  );

  return (
    <div className="bg-black opacity-90">
      <div className=" max-w-screen-2xl px-10 mx-auto navbar h-20 mb-0 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img className="h-16 w-18 rounded-lg p-3" src={logo} alt="" />
          <h1 className="md:text-3xl text-xl " style={{ fontFamily: "Lobster, cursive" }}>
            Melody<span className="text-yellow-700">MAster</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {user && (
                // <Tooltip className=""  place="BottomRight" anchorSelect="#clickable">
                //   <button className="bg-blue">{user.displayName}</button>
                // </Tooltip>
                <Tooltip anchorSelect="#clickable" className='text-dark bg-light'>
                <button className='text-dark bg-light border-0 '>{user.displayName}</button>
                </Tooltip>
                
                
              )}

        <div className="navbar-end">
          {user && (
            <div style={{ width: "50px" }} className="me-2" id="clickable">
              {" "}
              <img
                className="rounded-full"
                style={{ width: "40px" }}
                src={user.photoURL}
                alt=""
              />
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary bg-cyan-800 border-0 "
            >
              Logout
            </button>
           ) : ( 
            <Link to="/login">
              <button className="btn btn-primary bg-cyan-800 border-0 ">
                Login
              </button>
            </Link>
           )} 
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;