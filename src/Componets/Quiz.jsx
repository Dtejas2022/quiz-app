import React, { useState } from 'react'
import QustionList from './QustionList'

const Quiz = () => {
    const questions = [
        {
            question: 'What is React?',
            options: ['CSS Freamwork', 'React Library', 'React Freamwork', 'Testing Tool'],
            answer: 'React Library'
        },
        {
            question: 'What is 2+2?',
            options: ['3', '2', '4', '1'],
            answer: '4'
        },

    ]
    const [currentQuestionIndex, setCurrebtQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const handleClick = (option) => {
        setCurrentAnswer(option);
        if(option === questions[currentQuestionIndex].answer){
            setScore(score+1);
        }
    }

    const handleNextQuestion = () => {
        setCurrebtQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }
    return (
        <div>
            {currentQuestionIndex < questions.length ? <div>
                <QustionList question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
                <button className='p-3 mt-2 border bg-slate-200 hover:bg-green-400 hover:text-white cursor-pointer' disabled={currentAnswer === null} onClick={handleNextQuestion}>Next Question</button>
            </div>:
                <div>your score is {score}</div>
            }
            
        </div>
    )
}

export default Quiz
