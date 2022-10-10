import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (

        <div className='home'>
            <div className='quizoo'>
                <h1>Do you Want to develop your skills with us? Let's get Started with Quizooo and perfom in everydays quizez</h1>
                <button><NavLink to='/quiz'>Get Started Now</NavLink></button>
            </div>

        </div>
    );
};

export default Home;