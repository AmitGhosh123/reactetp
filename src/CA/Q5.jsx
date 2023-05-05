// How to get Time on Refreshing and Clicking Button using useState Hook.  


import {  useState } from "react";
const Q5 = () => {
const [time, setTime]=useState(new Date().toLocaleTimeString());
// useEffect(()=>{
// const interval = setInterval(()=>{
// setTime(new Date().toLocaleTimeString());                       //for auto refresing clock
// },1000);
// return ()=>clearInterval(interval);
// },[])

const handleClick = () => {
setTime(new Date().toLocaleTimeString());
}
// useEffect(()=>{
// window.addEventListener('load', handleClick);
// return ()=>window.removeEventListener('load', handleClick);
// },[]);
return (
<div>
<p>Current time: {time}</p>
<button onClick={handleClick}>Refresh time</button>
</div>
)
}
export default Q5;