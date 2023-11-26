import React from 'react'
import './Home.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Navbar;
