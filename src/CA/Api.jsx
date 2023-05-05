import React, { useState, useEffect } from 'react';
function Api() {
 const [data, setData] = useState([]);
 useEffect(() => {
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(data => setData(data));
 }, []);
 return (
 <div>
 {data.map(item => (
 <div key={item.id}>
 <h2>{item.title}</h2>
 <p>{item.body}</p>
 </div>
 ))}
 </div>
 );
}
export default Api;