import React from 'react';
import Question from './components/Question';
import NextPage from './components/NextPage';
import { useState } from 'react';
import {data} from './components/QuizData';
import Score from './components/Score';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';

export default function App() {

  const [allQuestions,setallQuestions] =useState(data);
  const [currentQuestion,setcurrentQuestion] = useState(0);
  const [score,setscore] =useState(0);
  const [selectedOption, setSelectedOption] = useState(0);


  return (
    <div>
    
      <div>
        <Routes>
            <Route path='/' element={<Home 
              ques={[currentQuestion,setcurrentQuestion]}/>}>
            </Route>

          
        <Route path='/score' element={ <Score 
            scores={[score,setscore]} 
            ques={allQuestions[currentQuestion]}
            allques={[allQuestions,setallQuestions]}             
            />}>
          </Route> 

          <Route path='/question' element={
            [
            <Question 
              allques={[allQuestions,setallQuestions]} 
              ques={allQuestions[currentQuestion]} 
              scores={[score,setscore]} 
              selection={[selectedOption,setSelectedOption]}
        />,   <NextPage 
                currentQuestion={[currentQuestion,setcurrentQuestion]} 
                selection={[selectedOption,setSelectedOption]} 
                allques={[allQuestions,setallQuestions]} 
                ques={allQuestions[currentQuestion]} 
                scores={[score,setscore]} 
          />]
          }>

          </Route>
        </Routes>

        
      
      </div>
    
    </div>
  )
}
