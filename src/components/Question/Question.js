import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ option, correctAnswer, id }) => {
    console.log(option)
    const notify = () => toast(rightWrong, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const rightWrong = () => {
        console.log(correctAnswer)
        console.log(option)

        if (correctAnswer === option) {
            return "Your ans is right";
        }

        else {
            return "Your ans is wrong";
        }



    }
    return (
        <div>
            <p>
                <input onClick={notify} type="radio" name={id} id="" />{option}
            </p>
        </div>
    );
};

export default Question;