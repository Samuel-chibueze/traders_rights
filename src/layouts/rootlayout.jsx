import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const rootlayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
          <Footer/>
        </>

    );
}

export default rootlayout;