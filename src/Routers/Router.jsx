import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'menu',
          element:<PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
          path:'orders/:category',
          element:<Orders></Orders>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);
  export default router;