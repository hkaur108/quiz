import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { data } from './QuizData';
import { useNavigate } from 'react-router-dom';

export default function NextPage(props) {

  const [currentQuestion,setcurrtentQuestion]= props.currentQuestion;
  const [selectedOption, setSelectedOption]=props.selection;
  const {questionNo,question,options,answer}=props.ques;
  const [allQuestions,setallQuestions]=props.allques;
  const [score,setscore] = props.scores;
  const choice=props.choice;
  const navigate =useNavigate();




  const handleNext=()=>{
    if(currentQuestion<data.length-1){
        setcurrtentQuestion(currentQuestion=>currentQuestion+1)
        setSelectedOption(0)
    }
  }

  const handlePrev=()=>{
    if(currentQuestion>0){
      setcurrtentQuestion(currentQuestion=>currentQuestion-1)
    }

  }

  useEffect(()=>{

  })

  const handleShowScore =()=>{
    navigate('/score')
    setSelectedOption(0)
  }

  return (
  <>
  <div className="container mt-3 py-1">
    <div className="row">
      <div className="col-4">
        <button onClick={handlePrev} className='btn btn-outline-light'>Previous</button>
      </div>
      {(questionNo===allQuestions.length)?
      (
        <div className="col-4">
          <button className='btn btn-outline-light' onClick={handleShowScore}>Show Scores</button>

      </div>
      ):""
    }
    {
      (questionNo!==allQuestions.length) && (
        <div className="col-4">
        <button onClick={handleNext} className='btn btn-outline-light'>Next</button>
      </div>

      )
    }
    
    </div>
  </div>
  </>

  )
}
