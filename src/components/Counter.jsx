//counter using useState.
import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

     function inc() {
        setCount(count + 1)
     }
     function dec() {
        setCount(count - 1)
     }
  return (
    <div>
      <button  onClick={inc}>+</button>
      <span>{count}</span>
      <button  onClick={dec}>-</button>
      <br />
      {/* <button
  style={{
    backgroundColor: "#5dd060", // Green
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
    margin: "4px 2px",
    cursor: "pointer"
  }}
>
  Click me!
</button> */}

      {/* <button  onClick={()=>setCount(count+2)}>+</button>
      <span>{count}</span>
      <button  onClick={()=>setCount(count-2)}>-</button> */}
     {/* //inline function use */}
    </div>
  )
}

export default Counter
