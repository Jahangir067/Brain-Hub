
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Home/Classes/Classes";
import Instructor from "../pages/Home/Instructor/Instructor";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: 'classes',
            element: <Classes></Classes>
        },
        {
            path: 'instructor',
            element: <Instructor></Instructor>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);