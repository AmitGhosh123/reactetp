import React, { useState, useEffect } from 'react';
import images from './images.js';
function Slideshow() {
 const [currentIndex, setCurrentIndex] = useState(0);
 useEffect(() => {
 const intervalId = setInterval(() => {
 setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
 }, 3000);
 return () => clearInterval(intervalId);
 }, []);
 return (
    <div style={{width: '100px', height: '100px'}}><img src={images[currentIndex]} alt="Slideshow" /></div>
 
 );
}
export default Slideshow;
