import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header py-2 bg-lime-100 grid sm:grid-cols-1'>
            <h1 className='text-5xl font-bold '>Quizooo</h1>
            <nav className='grid grid-cols-5 sm:grid-cols-5 '>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/quiz'>Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/statistics'>STAT</NavLink>
                <NavLink className='blog' to='/blog'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>

            </nav>

        </div>
    );
};

export default Header;