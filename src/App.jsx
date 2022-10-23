import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navv from "./components/Navv";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Help from "./pages/Help";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navv />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route exact path='/About' element={<About/>}/>
                   <Route exact path='/Help' element={<Help/>}/>
                   <Route exact path='/Contact' element={<Contact/>}/>
                   <Route exact path='/Signup' element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

