import React from 'react';
import './Questios.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';



const Questions = ({ questionx }) => {
    const { correctAnswer, id, options, question } = questionx;
    // console.log(options)
    const notify = () => toast(`Correct ans:${correctAnswer}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });




    return (
        <div className='question p-2 bg-blue-100'>
            <div className='m-2'>
                <h4 className='py-2'>{question}</h4>

                <div className='options grid grid-cols-2 gap-2 mt-2'>

                    {
                        options.map(option =>
                            <Question key={id} option={option} correctAnswer={correctAnswer} id={id}></Question>
                        )
                    }


                    {/* <p className='text-start pl-2'><input onClick={showResult} type="radio" name={id} id="radio" />{options[0]}<ToastContainer></ToastContainer></p>

                    <p onClick={showResult} className='text-start pl-2'><input type="radio" name={id} id="" />{options[1]}</p>
                    <p onClick={showResult} className='text-start pl-2'><input type="radio" name={id} id="" />{options[2]}</p>
                    <p onClick={showResult} className='text-start pl-2'><input type="radio" name={id} id="" />{options[3]}</p> */}

                </div>
            </div>
            <div>
                <EyeIcon onClick={notify} className="icon w-5 h-5" /><ToastContainer></ToastContainer>
            </div>

        </div>
    );

};

export default Questions;
