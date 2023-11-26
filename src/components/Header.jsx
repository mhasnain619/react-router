import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Header = () => {
    return (
        <header>
            <ul className='nav'>
                <li>
                    <NavLink to='/'> Navbar </NavLink>
                </li>
                <li>
                    <NavLink to='home'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='about'> About </NavLink>
                </li>
                <li>
                    <NavLink to='contact'> Contacts </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;
