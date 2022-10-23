import React from 'react'
import proj from '../assets/images/project.png';
import google from '../assets/images/google.jpg';
import email from '../assets/images/email.jpg'
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
                <a href="/Signup" className='link'><button className='button1'><img src={email} alt="" className='butimg' /> SIGN UP WITH EMAIL</button></a>
                <a href="/Signup" className='link'><button className='button2'><img src={google} alt="" className='butimg' />SIGN UP WITH GOOGLE</button></a>
            </div>
        </>
    )
}

export default LandingBanner1