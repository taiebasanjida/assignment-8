
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import AllApps from "../pages/AllApps/AllApps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([

    {
    path:"/",
    element:<MainLayout/>,
    children : [
        {
        index:true,
        element:<Home/>
        },
        {
            path:"apps",
            element:<AllApps/>
        }
    ]

    }

])
export default router