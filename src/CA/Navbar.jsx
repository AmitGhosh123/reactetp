import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className="nav">
    <a href="/" className='siteTitle'>Navbar</a>
    <ul>
        <li>
            <a href="/about">About</a> </li>
           <li><a href="/login">Login</a></li> 
          <li><a href="/register">Register</a></li>  
       
    </ul>
   </nav> 
      
  )
}

export default Navbar
