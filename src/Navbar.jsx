import React from 'react';
import logoimg from './images/logoc.jpg';

import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav className='container'>
   
   <div className='navleft'>
     <img src={logoimg} alt="" style={{width:90,padding:5,margin:10}}/>
   </div>
   <div className='navright'>
   <ul>
       <li><a href="/" className='lists' aria-current="page">Home</a></li>
        <li><a href="/About" className='lists'>About</a></li>
       <li><a href="/Help" className='lists'>Help</a></li>
       <li><a href="/Contact" className='lists'>Contact</a></li>
      <li><a href="/Signup"><button className="A">Sign Up</button></a></li>
     <li><a href="/Signup"><button className="A">Login</button></a></li>
    </ul>
   </div>
  </nav>
    </>
  )
}

export default Navbar