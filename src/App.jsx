import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route exact path='/About' element={<About />} />
                    <Route exact path='/Help' element={<Help />} />
                    <Route exact path='/Contact' element={<Contact />} />
                    <Route exact path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

