import React,{useState} from 'react'

const Practice = () => {
  const [State,setState] = useState("post")


  return (
    <div>
      <button onClick={()=>setState('post')}>post</button>
      <button onClick={()=>setState("likes")}>likes</button>
      <button onClick={()=>setState("comments")}>comments</button>
      <br /><span>{State}</span>
    </div>
  )
}

export default Practice
