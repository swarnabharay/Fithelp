//import logo from './logo.svg';
import React from 'react';
import '../styles/Login.css';
import {  FaGithub} from 'react-icons/fa';
import {  FaGoogle} from 'react-icons/fa';
import {  FaLinkedin} from 'react-icons/fa';
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";
//import {Button} from 'react-bootstrap/Button';

function Login() {
  return (
    <div className="login_parent">
      <div className="image" >
        <img src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="oh" />

      </div>
      <div className="text" >
        <div>
        <p className="wb">
          Welcome back!
        </p>
        <h3 className="header">
          Login to your account
        </h3>
        </div>
        
        {/* <input name= required type="text" label="First Name" id="first-name" /> */}
        <input className="email"
          type="email"
          placeholder="Email"
          // onChange={(e) => {
          //   setSearchWord(e.target.value);
          // }}
        />
        <input className="email"
          type="text"
          placeholder="Password"
          // onChange={(e) => {
          //   setSearchWord(e.target.value);
          // }}
        />
           {/* <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div> */}
    <div className="form">
   <div className="remem" class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Remember me
  </label>
  <a className="for" href="!#">Forgot password?</a>
</div>
</div>

    <div   class="d-grid gap-2">
  {/* <button class="btn btn-primary" type="button">Button</button> */}
  <button className="button_continue" class="btn btn-primary" type="button">Continue</button>
</div>

<div>
  <p className="orc">
    or continue with
  </p>

</div>
<div className="icons">
<h6>< FaGoogle/> </h6>
<h6>< FaLinkedin/> </h6>
<h6>< FaGithub/> </h6>
</div>
<div className="jn">
<p className="da">Don't have an account? </p>
<a  href="!#">Join free today</a>
</div>




    
      </div>
      
    </div>
  );
}

export default Login;
