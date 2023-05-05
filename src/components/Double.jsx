//create a input field and a button in react and whenever user put a number and clicks the button the number doubles and shows

import React, { useState } from 'react'

const Double = () => {

    const [number, setNumber] = useState(0);

    const handleInputChange = (event) => {
      const inputNumber = parseInt(event.target.value);
      setNumber(inputNumber);
    }
    const handleButtonClick = () => {
        setNumber(number * 2);
    }

  return (
    <div>
      <input type="number" id='numberInput' value={number} onChange={handleInputChange} placeholder='Enter a number here'/>
      <button onClick={handleButtonClick}>Double</button>
      <p>{number}</p>
    </div>
  )
}

export default Double;
