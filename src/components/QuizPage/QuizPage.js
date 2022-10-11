import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const quizPage = useLoaderData().data;
    const { id, questions } = quizPage;

    // console.log(questions);
    return (
        <div>
            <h1 className='text-4xl py-4'>Quiz Page</h1>
            {
                questions.map(questionx => <Questions key={questionx.id}
                    questionx={questionx}></Questions>)
            }
        </div>
    );
};

export default QuizPage;