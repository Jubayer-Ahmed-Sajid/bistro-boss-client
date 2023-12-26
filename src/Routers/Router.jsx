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
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Users from "../Pages/Dashboard/Users/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/ManageItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
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
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
        ,{
          path:'users',
          element:<AdminRoute><Users></Users></AdminRoute>
          
        },
        {
          path:'additems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },{
          path:'updateItems/:id',
          element:<UpdateItems></UpdateItems>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
          
        }
      ]
    }
  ]);
  export default router;