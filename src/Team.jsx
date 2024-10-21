import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const handledd=()=>{
      const newTeam = team+1;
       setTeam(newTeam) ;
    }
    const handleRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam)
    }
    return(
        <div style={{border:'2px solid red',margin:'15px'}}>
            <h3>Players:{team}</h3>
            <button onClick={handledd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}