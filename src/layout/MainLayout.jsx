
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Footer from '../components/Navbar/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='min-h-screen'>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;