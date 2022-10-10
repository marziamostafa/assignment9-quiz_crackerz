import React from 'react';
import './Questios.css'
import { EyeIcon } from '@heroicons/react/24/solid'



const Questions = ({ questionx }) => {
    const { correctAnswer, id, options, question } = questionx;


    return (
        <div className='question'>
            <div>
                <h4>{question}</h4>

                <div className='options'>
                    <p><input type="radio" name={id} id="" />{options[0]}</p>

                    <p><input type="radio" name={id} id="" />{options[1]}</p>
                    <p><input type="radio" name={id} id="" />{options[2]}</p>
                    <p><input type="radio" name={id} id="" />{options[3]}</p>
                </div>
            </div>
            <EyeIcon className="icon" />
        </div>
    );
};

export default Questions;
