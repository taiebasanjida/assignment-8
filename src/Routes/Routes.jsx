import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([

    {
    path:"/",
    element:<MainLayout></MainLayout>,
    children : [
        {
        index:true,
        element:<Home></Home>
        }
    ]

    }

])
export default router