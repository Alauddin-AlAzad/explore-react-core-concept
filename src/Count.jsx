import { useState } from "react"

export default function Count(){
    const [count,setCount]=useState(0)
    const HandleAdd=()=>{
     const newCount= count+1;
     setCount(newCount)   
    }
    const handleReduce=()=>{
        const newCount=count-1;
          setCount(newCount)
    }
return(
    <div style={{border:'2px solid yellow'}}>
        <h3>Counter:{count}</h3>
        <button onClick={HandleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
)
}
