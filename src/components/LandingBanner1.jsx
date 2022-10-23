import React from 'react'
import proj from '../assets/images/project.png';
import google from '../assets/images/Google.png';
import email from '../assets/images/mail.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const LandingBanner1 = () => {
    return (
        <>
            <div className="contain1">Let's make Project management easy!</div>
            <div className="contain2">
                <img src={proj} alt="" className='mainimg' />
            </div>
            <div className="contain3"><span>ToDo Room</span> is free to use as long as you want!</div>
            <div className='buttons'>
            <Link to="/Signup" className='Link'>
                <button className='button1'><img src={email} alt="" className='butimg' /> SIGN UP WITH EMAIL</button>
            </Link>
            <Link to="/Signup" className='Link'>    
                <button className='button2'><img src={google} alt="" className='butimg' />SIGN UP WITH GOOGLE</button>
             </Link>    
            </div>
        </>
    )
}

export default LandingBanner1