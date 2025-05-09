import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";

import Homelayout from "../Layout/Homelayout";
import Signup from "../page/Signup";
import App from "../App";
import Signin from "../page/Signin";
import Home from "../component/Home/Home";
import Hoamepage from "../page/Hoamepage";
import Productdetails from "../component/services/Productdetails";
import Privaterout from "../component/Privaterout/Privaterout";
import About from "../component/About/About";
import Error from "../Error/Error";
import ForgetPassword from "../component/ForgetPassword/ForgetPassword";
import Profile from "../component/Profile/profile"
export const router=createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>, 
    children:[
      { index: true, 
        element:<Hoamepage></Hoamepage>,
        loader:()=>fetch('../data.json')
       },
      { path:"details/:id",
         element:

         <Privaterout>
             <Productdetails></Productdetails>
         </Privaterout>,
        loader:()=>fetch('../data.json')
       },

{
  path:"/signup",
  element: <Signup></Signup>
},
{
  path:"/signin",
  element:<Signin></Signin>
},
{
  path:"/about",
  element: <Privaterout>
    <About></About>
  </Privaterout>
},
{
  path:"/profile",
  element: <Privaterout>
    <Profile></Profile>
  </Privaterout>
},
 ]
}, 
{ path: '/*', element: <Error></Error> },
{ path: '/forgetPassword', element: <ForgetPassword></ForgetPassword> },


 
     




]);