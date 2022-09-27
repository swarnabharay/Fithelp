import React from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Help from "./Help";
import Signup from "./Signup";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Help' element={<Help/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
