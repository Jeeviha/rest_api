import React, { useEffect, useState } from 'react'

const Counter = () => {
    
    const [counter,set_counter]=useState(0)
    
    useEffect(()=>{
    
    let count=0;
    
    const counting=()=>
        {
    const set_interval_id=setInterval(()=>   //set_interval_id - stores the setInterval ID
        {
            count++
            set_counter(count)
        },2000)

        setTimeout(()=>
    {
        clearInterval(set_interval_id)
        count=0
        set_counter(count)
        counting()
    },5000)
        }
    counting();
    // return () => {                          //Cleanup Function - it runs if the component is removed from the screen before 4 sec to stop the counting timer immediately
    //     clearInterval(set_interval_id);     
    // };

},[]);
    return (
    <div style={{marginTop:"30px",fontFamily:"Times New Roman"}}>
        <h2>Using setTimeout and setInterval</h2>
        Counter:{counter}
    </div>
  )
}

export default Counter
