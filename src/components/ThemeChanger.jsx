//Create a  button in react and whenever clicked the themed should change to dark and viceversa
import React,{useState} from 'react';
import '../components/Theme.css';

const ThemeChanger = () => {
    const [isDarkMode,setIsDarkMode] = useState(false)
    const handleThemeChange = () => {
        setIsDarkMode(!isDarkMode);
      }
    
      return (
        <div className={isDarkMode ? "dark" : "light"}>
          <button onClick={handleThemeChange}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum arcu. 
            Quisque tincidunt odio sed tellus vehicula, eu elementum velit suscipit. 
            In hac habitasse platea dictumst. Sed malesuada aliquet tellus, vitae eleifend est pulvinar ac.
          </p>
        </div>
      );
    }

export default ThemeChanger
