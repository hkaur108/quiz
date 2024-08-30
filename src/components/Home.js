import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';
import '../App.css';


export default function Home(props) {
    const [currentQuestion,setcurrentQuestion]=props.ques;
    const navigate=useNavigate();

    const handlePageChange=()=>{
        setcurrentQuestion(0)
        navigate('/question')

    }

return (
    <div className=''>
        <div className="container mt-5 py-5 border border-dark" style={{width:'550px', borderRadius:"30px", boxShadow:" 0px 0px 5px 5px #40A578"}}>
                <div className="row">
                    <div className="col">
                        <h4 className='text-center p-1' style={{textShadow:"0 0 5px #227B94"}}>HTML QUIZ</h4> 
                    </div>
                </div>
            <div className="row mx-auto mt-1">
                <div className="col p-3">
                    <p style={{textShadow:"0 0 3px #227B94"}}>This Quiz has 10 questions to test your HTML knowledge at the end you will get your total scores.</p>
                </div>
            </div>
                        <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                    <button onClick={handlePageChange} className='btn btn-outline-light'>Start HTML Quiz</button>
                </div>
            </div>
        </div>
    </div>
  )
}
