// 8. Write a code for Incrementing and Decrementing the State Variable on Button clicked in React JS.

import { useState } from "react";
const Q8 = () => {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};

return (
<div>
<h1>Count: {count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);
}
export default Q8;