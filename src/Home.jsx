import React from 'react';
import proj from './images/project.png';
import google from './images/google.jpg';
import email from './images/email.jpg'
import './Home.css';

function Home() {
  return (
    <>
   <div className="contain1">Let's make Project management easy!</div>
    <div className="contain2">
    <img src={proj} alt="" className='mainimg'/>
      </div>
    <div className="contain3"><span>ToDo Room</span> is free to use as long as you want!</div>
    <div className='buttons'>
    <a href="/Signup" className='link'><button className='button1'><img src={email} alt="" className='butimg'/> SIGN UP WITH EMAIL</button></a>
    <a href="/Signup" className='link'><button className='button2'><img src={google} alt="" className='butimg'/>SIGN UP WITH GOOGLE</button></a>
    </div>
    </>
  )
}

export default Home