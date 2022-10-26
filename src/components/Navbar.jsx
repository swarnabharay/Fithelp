import React from "react";
import "../styles/Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navlogo from "../assets/images/Navlogo.jpg";


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">

                    {/* //* navbar brand */}

                    <img
                        src={
                            Navlogo
                        }
                        onClick={() => window.location.replace("/")}
                        alt="Milan-logo"
                        className="nav_bramhin_img"
                    />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item home">
                                <Link to={"/"} className={
                                    "" + (location.pathname === "/" ? "active-link" : "")
                                } >Home</Link>

                            </li>

                            <li className="nav-item home">
                                <Link to={"/display/clubs"} className={
                                    "" +
                                    (location.pathname === "/display/clubs"
                                        ? "active-link"
                                        : "")
                                }>About</Link>

                            </li>

                            <li className="nav-item home">
                                <Link to="/display/events" className={
                                    "" +
                                    (location.pathname === "/display/events"
                                        ? "active-link"
                                        : "")
                                }>Help</Link>

                            </li>

                            <li className="nav-item home">
                                <Link to="/shops/shop" className={
                                    "" +
                                    (location.pathname === "/shops/shop" ? "active-link" : "")
                                }>Contact</Link>

                            </li>

                            <li>
                                <div className="navbar_buttons_div">
                                    <button className="btn  navbar_signup_button ">
                                        Sign Up

                                    </button>
                                    <button className="btn  navbar_signup_button ">
                                        Login
                                    </button>
                                </div>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;