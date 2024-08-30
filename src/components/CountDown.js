import React, { useEffect, useState } from 'react'

export default function CountDown() {
  const [minutes,setminutes] = useState(0);
  const [seconds,setseconds] =useState(0);


  useEffect(()=>{
    const intervalID = setInterval(() => {
      if(seconds===60)
      {
        setseconds(0)
        setminutes(minutes=>minutes+1)
        if(minutes==10){
        return
        }
        return 
      }
    
      else{
        setseconds(seconds => seconds + 1);
      }
      }
    ,1000);
    return () => {
      clearInterval(intervalID);
    };   
  },[seconds])


  


  return (
    <div className='py-2'>
      
            <h6>{(minutes<=9)? (`0${minutes}`):(minutes)}:{(seconds<=9)? (`0${seconds}`):(seconds)}</h6> 
          
    </div>
  )
}
