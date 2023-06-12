import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Class from "../Pages/Class/Class";
import Instructors from "../Pages/Instructors/Instructors";
import MyClass from "../Pages/Dashboard/myclass/myclass";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import AddClass from "../Pages/Dashboard/myclass/AddClass/AddClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Error from "../Pages/Error/Eror";
import PrivateRoute from "./PrivateRouter";
import AdminRoute from "./AdminRoute";
import SinglePayment from "../Pages/Dashboard/Payment/SinglePayment";
import InstructorsClass from "../Pages/Dashboard/InstructorsClass/InstructorsClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/> ,
        errorElement:<Error></Error>,
        children: [
          {
              path: '/',
              element:<Home></Home> 
          },
          {
            path: '/login', 
            element:<Login></Login>
        }, 
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        },
        {
          path: '/classes', 
          element:<Class></Class>
      },
      {
        path: '/instructor', 
        element:<Instructors></Instructors> 
    },
  //   {
  //     path: '/dashboard', 
  //     element:<Dashboard></Dashboard>
  // },
        ],  
    },
    {
      path: "dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>  ,
      errorElement: <Error></Error>,
      children: [
        {
            path: 'myclass',
            element:<MyClass></MyClass>
        },
        {
          path: 'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addClass',
        element:<AddClass></AddClass>
    },
    {
      path: 'manageClass',
      element:<ManageClass></ManageClass>
  },
  {
    path: 'instructorClass',
    element:<InstructorsClass></InstructorsClass>
},
  {
    path: 'payment',
    element:<Payment/>
},
{
  path: 'singlepayment/:id',
  element:<SinglePayment/>,
  loader:({params}) => fetch(`https://musical-instrument-server-muksanaakter.vercel.app/classes/${params.id}`)
},
      ]
     }
  ]);