import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className='header d-lg-flex flex-sm-column flex-md-column flex-lg-row justify-content-between px-5 ' >
            <nav className='d-flex flex-column  flex-lg-row text-center '>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/courses">Our Courses</NavLink>
            </nav>
            <nav className='d-flex flex-column  flex-lg-row text-center '>
                    <NavLink to="/home">Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;