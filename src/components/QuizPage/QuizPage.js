import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const quizPage = useLoaderData().data;
    const { id, questions, name } = quizPage;

    // console.log(quizPage);
    return (
        <div>
            <h1 className='text-4xl py-4'>Quiz Of '{name}'</h1>
            {
                questions.map(questionx => <Questions key={questionx.id}
                    questionx={questionx}></Questions>)
            }
        </div>
    );
};

export default QuizPage;