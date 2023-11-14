import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders/Orders";
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
          element:<Menu></Menu>
        },
        {
          path:'orders/:category',
          element:<Orders></Orders>
        }
      ]
    },
  ]);
  export default router;