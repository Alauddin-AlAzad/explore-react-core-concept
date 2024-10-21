import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend";
export default function Friends(){
   const [friend,setFriend]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriend(data))
  },[])
    return (
        <div className="box">
          <h1>Friends:{friend.length}</h1>
          {
            friend.map(friend=> <Friend Friend={friend}></Friend>)
          }
        </div>
    )
}