import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)
  const handelar=()=>{
    alert('button clicked')
  }
  const addTwoFive=(num)=>{
    alert(num+5)
  }
  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
     <Count></Count>
      <h1>Vite + React</h1>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handelar}>button 1</button>
      <button onClick={()=>{alert('clicked-2')}}>buttont</button>
      <button onClick={()=>addTwoFive(3)}>Buttn-3</button>
    </>
  )
}

export default App
