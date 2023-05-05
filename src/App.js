import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import CountDown from './CA/CountDown';
import Navbar from './CA/Navbar';
import NewsCards from './CA/News';
import About from './CA/Pages/About';
import Home from './CA/Pages/Home';
import Login from './CA/Pages/Login';
import Register from './CA/Pages/Register';
import Square from './CA/Square';








import Card from './components/Card';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Double from './components/Double';
import InputRef from './components/InputRef';
import Practice from './components/Practice';
import ThemeChanger from './components/ThemeChanger';
import WindowSize from './components/WindowSize';



function App() {
  return (
    <div>
      <Navbar/> <BrowserRouter><Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>} />
     </Routes></BrowserRouter>
     <Practice/>
     <h1>counter using useState</h1>
     <Counter/>
     <h1>Window Size program</h1>
     <WindowSize/>
     <h1>Digital Clock</h1>
     <Clock/>
     <h1>Theme Chage with button</h1>
     <ThemeChanger/>
     <h1>Double the number on click of button</h1>
     <Double/>
     <h1>input name question</h1>
     <InputRef/>
     <h1>Card style question</h1>
     <Card/>
     
     <CountDown countdownTime={60}/>
     <Square/>
     <NewsCards/>
    
  
     
    </div>
    
  );
}

export default App;


