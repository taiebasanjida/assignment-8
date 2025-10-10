import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"; // Footer এর সঠিক import path
import AllApps from "../pages/AllApps/AllApps";
import Home from "../pages/Home/Home";

const MainLayout = () => {
  const location = useLocation();
  const showHome = location.pathname === "/"; // "/" route এ Home দেখাবে

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* "/" route এ Home + Top 8 AllApps */}
      {showHome && <Home />}
      {showHome && <AllApps topOnly={true} />}

      {/* Other routes */}
      {!showHome && <Outlet />}

      <Footer />
    </div>
  );
};

export default MainLayout;
