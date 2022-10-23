import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logoc.jpg';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


function Navv() {
  return (
    <>
    <Navbar style={{backgroundcolor: '#FFFFFF'}} expand="lg">
      <Container fluid>
        <img src={logo} alt="" style={{width:90,padding:6,marginLeft:10}} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav>
          <div className='d-flex' style={{paddingLeft:700}}>
        <Nav.Item >
          <LinkContainer to="/">
         <Nav.Link >Home</Nav.Link>
         </LinkContainer>
        </Nav.Item>
        <Nav.Item>
        <LinkContainer to="/About">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/Help">
          <Nav.Link >Help</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/Contact">
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Link to="/Signup">
        <Button variant="warning" style={{background:'#284B63',marginLeft:10,borderRadius:42,color:'#FFFFFF',width:80,height:40}}>SignUp</Button>{' '}
        </Link>
        <Link to="/Signup">
        <Button variant="warning" style={{background:'#284B63',marginLeft:10,borderRadius:42,color:'#FFFFFF',width:80,height:40}}>Login</Button>{' '}
        </Link>
       
        </div>
        
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Navv

