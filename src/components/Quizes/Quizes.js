import React from 'react';
import { NavLink } from 'react-router-dom';
import './Quizes.css'

const Quizes = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    // console.log(quiz)
    return (
        <div className='single-quiz'>
            <img src={logo} alt="" />
            <div className='single-quiz-start'>
                <p>{name}</p>
                <button><NavLink to={`/quiz/${id}`}>Start Quiz</NavLink></button>
            </div>
        </div>
    );
};

export default Quizes;