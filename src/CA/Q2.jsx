// 2. Creating Simple Greeting Website using React JS. Use text boxes for the same.  
// Website will greet you according to time. As if the time is from 5 am to 12 noon 
// it says good morning and colour of good morning must be green. As if the time is from 12 noon to 3 pm 
// it says good afternoon and colour of good morning must be red. And so on.  


import { useState } from "react";

const Q2 = () => {
const [name, setName] = useState('');
const [greeting, setGreeting] = useState('');
const [color, setColor]=useState('');

const handlenameChange=(event)=>{
setName(event.target.value);
}
const handleGreeting=()=>{
const time = new Date();
const hours = time.getHours();
if(hours>=5 && hours<12){
setGreeting(`Good Morning, ${name}`);
setColor('green');
} else if(hours>=12 && hours <15){
setGreeting(`Good Afternoon, ${name}`);
setColor('red');
} else if(hours >= 15 && hours < 20){
setGreeting(`Good evening, ${name}`);
setColor('purple');
} else {
setGreeting(`Good night, ${name}`);
setColor('blue')
}
}
return (
<div>
<label>Enter Your Name: <input type="text" value={name} onChange={handlenameChange}/></label>
<button onClick={handleGreeting}>Greet Me!</button>
<h2 style={{color}}>{greeting}</h2>
</div>
)
}
export default Q2;