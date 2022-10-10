import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const quizPage = useLoaderData().data
    const { id, questions } = quizPage;

    console.log(id)
    return (
        <div>
            <h1>Quiz Page</h1>
            {
                questions.map(questionx => <Questions key={questionx.id}
                    questionx={questionx}></Questions>)
            }
        </div>
    );
};

export default QuizPage;