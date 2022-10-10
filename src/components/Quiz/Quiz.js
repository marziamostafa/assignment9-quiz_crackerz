import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quizes from '../Quizes/Quizes';
import './Quiz.css'
const Quiz = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes);
    return (
        <div>
            <h1>Total Quizes:{quizes.length} </h1>
            <div className='quizes'>
                {
                    quizes.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>

        </div>
    );
};

export default Quiz;