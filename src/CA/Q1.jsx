// 1. Display Current Date and Time in JSX in React JS. Use two buttons for the date and time. While clicking it displays the data and time.

import {useState} from 'react';
const Q1 = () => {
const [currentDate, setCurrentData] = useState();
const [currentTime, setCurrentTime] = useState();
const showDate=()=>{
const date = new Date();
setCurrentData(date.toLocaleDateString());
}
const showTime=()=>{
const time = new Date();
setCurrentTime(time.toLocaleTimeString());
}
return(
<div>
Current Date: {currentDate} <br></br>
Current Time: {currentTime} <br></br>
<button onClick={showDate}>Show Date</button>
<button onClick={showTime}>Show Time</button>
</div>
)
}
export default Q1;
