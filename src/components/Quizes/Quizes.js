import React from 'react';
import './Quizes.css'

const Quizes = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    console.log(quiz)
    return (
        <div className='single-quiz'>
            <img src={logo} alt="" />
            <div className='single-quiz-start'>
                <p>{name}</p>
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quizes;