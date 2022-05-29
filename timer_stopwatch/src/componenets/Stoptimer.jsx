import React, { useEffect, useState } from 'react'
import '../App.css';
export const Stoptimer = () => {
const[Seconds,setSeconds]=useState(0)
const[Minutes,setMinutes]=useState(0)
// const[Seconds,setSeconds]=useState(0)

var timer;
    useEffect(()=>{
      timer=  setInterval(()=>{
setSeconds(Seconds+1)
if(Seconds==59){
setMinutes(Minutes+1)
setSeconds(0);
}
        },100)
        return ()=>{
           clearInterval(timer)
        }
    })

  
    const start=()=>{
        setSeconds(0);
        setMinutes(0)
    }
    const stop=()=>{

clearInterval(timer)

    }
    



  return (
   <>
  
   <div className='container'>
       
<div className='time'><h1 className='minutes'>{Minutes<10 ? "0"+Minutes+"min":Minutes +"min"}</h1><h1 className='seconds'>{Seconds<10 ? "0"+Seconds+"sec":Seconds+"sec"}</h1></div>

  
 <div className='head'>STOP TIMER</div>

<button className='start' onClick={start}>start</button>
 <button className='stop' onClick={stop}>stop</button>
<button className='pause' >pause</button> 

</div>

   </>
  )
}
export default Stoptimer
