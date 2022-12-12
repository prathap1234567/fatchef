import React,{ useState } from 'react'

function HookEx() {
    const[count,setCount]=useState(0)
    let inc=()=>{
        setCount(count+1)
    }
    let dec=()=>{
        setCount(count-1)
    }
  return (
    <div>
    {count}
    <button onClick={inc}>ClickMe</button> <br></br>
    <button onClick={dec}>ClickMe</button>
    </div>
  )
}
export default HookEx