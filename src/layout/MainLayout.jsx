import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/Loading/Loading";
import Footer from "../components/Navbar/Footer/Footer";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <div className="min-h-screen">
        {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
