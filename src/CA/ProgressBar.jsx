// . Display the progress bar {Analysis of 5 student marks}.
// ProgressBar.js :-
// import React, { useState } from 'react';
// function ProgressBar({ marks }) {
//  const [average, setAverage] = useState(
//  marks.reduce((total, mark) => total + mark, 0) / marks.length
//  );
//  const aboveAverage = marks.filter((mark) => mark > average).length;
//  const percentageAboveAverage = (aboveAverage / marks.length) * 100;
//  return (
//  <div>
//  <h2>Analysis of 5 student marks</h2>
//  <progress value={percentageAboveAverage} max="100" />
//  <p>{percentageAboveAverage}% scored above average</p>
//  </div>
//  );
// }
// export default ProgressBar;
// App.js :-
// import React from 'react';
// import ProgressBar from './ProgressBar';
// function App() {
//  const marks = [75, 80, 85, 90, 95];
//  return (
//  <div>
//  <ProgressBar marks={marks} />
//  </div>
//  );
// }
// export default App;