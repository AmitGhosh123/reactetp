import React, { useState, useMemo } from 'react';   //use of usememo

function Q7() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the expensive calculation so it only runs when count changes
  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < count * 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Expensive calculation result: {expensiveCalculation}</p>
    </div>
  );
}
export default Q7;