import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Quizooo</h1>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/quiz'>Quiz</NavLink>
                <NavLink to='/statistics'>Statictics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>

            </nav>

        </div>
    );
};

export default Header;