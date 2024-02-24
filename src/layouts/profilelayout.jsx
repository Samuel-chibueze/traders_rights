import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
const profilelayout = () => {
    return (  
    <div>
        <Navbar/>
         <main>
        <Outlet/>
        </main>
       <Footer/>
    </div>);
}


export default profilelayout;