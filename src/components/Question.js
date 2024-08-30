import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { data } from './QuizData';
import CountDown from "./CountDown";
import '../App.css';

export default function Question(props) {

  const {questionNo,question,options,answer}=props.ques;
  const [selectedOption, setSelectedOption]=props.selection;
  const [allQuestions,setallQuestions]=props.allques;
  const [score,setscore] = props.scores;

  
      useEffect(()=>{
        if(selectedOption == answer && questionNo<=allQuestions.length){
          setscore(s=>s+1) 
          return 
    }
    else {
      return
    }
    },[selectedOption,questionNo,answer])

  
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

      };

      const handleSubmit =(e)=>{
        e.preventDefault()

      }


  return (
    <div>
      <div className="container mt-5 px-4 py-1 ml-5">
        <div className="row">
          <div className="col-6">
            <h3>HTML QUIZ</h3>
          </div>
          <div className="col-6 ">
            <CountDown/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className='py-1'>Question {questionNo} of {data.length}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col fw-bold py-2">{question}</div>
        </div>
        <div className="row">
          <div className="col">
            
              <form onSubmit={handleSubmit}>
                  <div className='form-check'>
                        <input className="form-check-input me-1" 
                        type="radio" 
                        id={options[0].optionId}
                        name='options'
                        value="1"
                        checked={selectedOption==="1"}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor='options' id='option1'>
                              <div  type="submit" className=  "text-white  inline py-1 px-1" > {options[0].option}</div>
                        </label>
                            </div>

              </form>

              <form onSubmit={handleSubmit}>
                  <div className='form-check'>
                        <input className="form-check-input me-1" 
                        type="radio" 
                        id={options[1].optionId}
                        name='options'
                        value="2"
                        checked={selectedOption==='2'}
                        onChange={handleOptionChange}
                        
                        />
                        <label htmlFor='options' id='option2'>
                              <div  type="submit" className=  " text-white inline py-1 px-1"  >{options[1].option}</div>
                        </label>
                            </div>

              </form>
              <form onSubmit={handleSubmit}>
                  <div className='form-check'>
                        <input className="form-check-input me-1" 
                        type="radio" 
                        id={options[2].optionId}
                        value="3"
                        name='options'
                        checked={selectedOption==='3'}
                        onChange={handleOptionChange}

                        />
                        <label htmlFor='options' id='option3'>
                              <div  type="submit" className=  " text-white inline py-1 px-1">{options[2].option}</div>
                        </label>
                            </div>

              </form>
              <form onSubmit={handleSubmit}>
                  <div className='form-check'>
                        <input className="form-check-input me-1" 
                        type="radio" 
                        id={options[3].optionId}
                        value='4'
                        name='options'
                        checked={selectedOption==='4'}
                        onChange={handleOptionChange}

                        />
                        <label htmlFor='options' id='option4'>
                          <div  type="submit" className=  "text-white inline py-1 px-1">{options[3].option}</div>
                        </label>
                            </div>
              </form>
          </div>
        </div>
      
      </div>
    </div>
  )
}
