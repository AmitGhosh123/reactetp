// import React, { useState } from 'react'

// const InputRef = () => {
//     const [name,setName] = useState('')
//   return (
//     <div>
//       <input type="text" value={name} onChange={e=> setName(e.target.value)} />
//     <p>My name is {name}</p>
//     </div>
//   )
// }

// export default InputRef;

//useRef and storing previous state

import React, { useState,useEffect,useRef } from 'react'

const InputRef = () => {
    const [name,setName] = useState('')
    const prevName = useRef('')

    useEffect(()=>{
        prevName.current = name;
    })

  return (
    <div>
      <input type="text" value={name} onChange={e=> setName(e.target.value)} />
    <p>My name is {name} and it used to be {prevName.current}</p>
    </div>
  )
}

export default InputRef;
