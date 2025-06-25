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

import Privaterout from "../component/Privaterout/Privaterout";

import Error from "../Error/Error";
import ForgetPassword from "../component/ForgetPassword/ForgetPassword";
import Addtask from "../component/Task/Addtask";
import BrowerTask from "../component/Task/BrowerTask";
import PostTask from "../component/Task/PostTask";
import TaskDetails from "../component/Task/TaskDetails";
import Update from "../page/Update";

export const router=createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>, 
    children:[
      { index: true, 
        element:<Hoamepage></Hoamepage>,
        loader:()=>fetch('https://backend-nu-livid-37.vercel.app/task/home')
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
  path:"/addTask",
  element: <Privaterout>
    <Addtask></Addtask>
  </Privaterout>
},
{
  path:"/browserTask",
  element: 
    <BrowerTask></BrowerTask>,
  
   loader:()=>fetch('https://backend-nu-livid-37.vercel.app/task')
},

{
  path:"/task/:id",
  
     loader:({params})=>fetch(`https://backend-nu-livid-37.vercel.app/task/${params.id}`),
  element: <Privaterout>
    <TaskDetails></TaskDetails>
  </Privaterout>,

},
{
  path:"/update/:id",
     loader:({params})=>fetch(`https://backend-nu-livid-37.vercel.app/task/${params.id}`),
  element: <Privaterout>
    <Update></Update>
  </Privaterout>,

},

{
  path:"/postTask",
    loader:()=>fetch('https://backend-nu-livid-37.vercel.app/task'),
  element: <Privaterout>
  <PostTask></PostTask>
  </Privaterout>
},

 ]
}, 
{ path: '/*', element: <Error></Error> },
{ path: '/forgetPassword', element: <ForgetPassword></ForgetPassword> },


 
     




]);