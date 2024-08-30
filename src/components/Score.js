import React, { useEffect } from 'react';
import { data } from './QuizData';
import { useNavigate } from 'react-router-dom';
import {DeclareWinner} from "./DeclareWinner";
import Email from './Email';

export default function Score(props) {
    const [score,setscore] = props.scores;
    const {answer,questionNo}=props.ques;
    const navigate=useNavigate();
    const [allQuestions,setallQuestions]=props.allques;


    const handleStartAgain =() =>{
        navigate('/');
        setscore(0)
    }


return (
    <div className='m-5 p-5'>
        {(score>6) && <DeclareWinner/>}
    <h2 className='text-light text-center'>{(score>6)? "Congratulations! You scored more than 60%": "Your score is less than 60%, Retry the quiz."}</h2>
    <h5 className='px-5 mx-5 py-3 text-center'>You scored: {score}/{data.length}</h5>
        
    <div className='d-flex align-items-center justify-content-center my-1'>
        
        <button className='btn btn-outline-light'  onClick={handleStartAgain}>Start Again</button>
    </div>
    </div>
)
}
