import React, { useState } from 'react';

function Square() {
  const [number, setNumber] = useState(0);
  const [square, setSquare] = useState(0);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleButtonClick = () => {
    setSquare(number * number);
  };

  return (
    <div>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleInputChange} />
      </label>
      <button onClick={handleButtonClick}>Calculate Square</button>
      <p>The square of {number} is {square}</p>
    </div>
  );
}

export default Square;