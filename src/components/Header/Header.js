import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header py-2'>
            <h1 className='text-5xl font-bold '>Quizooo</h1>
            <nav className='grid lg:grid-cols-4'>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/quiz'>Quiz</NavLink>
                <NavLink to='/statistics'>Statictics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>

            </nav>

        </div>
    );
};

export default Header;