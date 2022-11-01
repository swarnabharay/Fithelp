import React from "react";
import "../styles/LandingBanner1.css";
import WelcomeImage from "../assets/images/project.png";
import { AiFillMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation} from "react-router-dom";
import easyimg from "../assets/images/easy_use.png";
import settingsimg from "../assets/images/settings_logo.png";
import hassle from "../assets/images/hassle_free.png";
import everyoneimg  from "../assets/images/for_everyone.png";


const LandingBanner1 = () => {
    const location = useLocation();
    return (
        <>
            <div className="container-fluid landing_welcome_parent_main">
                <div className="landing_welcome_parent">
                    {/* //* BAA DIK ER DIV TA */}

                    <div className="landing_welcome_textdiv">
                        <h1>Let’s make project management easy!</h1>
                        <p>
                            {" "}
                            <span>ToDo Room</span> is free to use as long as you want!
                        </p>

                        <div className="signup_button_div">
                            <button className="btn  signup_button button_email">
                                <AiFillMail className="signup_button_icon" />
                                SIGN UP WITH EMAIL
                            </button>
                            <button className="btn  signup_button button_google">
                                <FcGoogle className="signup_button_icon" />
                                SIGN UP WITH GOOGLE
                            </button>
                        </div>
                    </div>

                    {/* //* DAN DIK ER DIV */}

                    <div className="landing_welcome_imagediv">
                        <img src={WelcomeImage} alt="welcome" />
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid text-center lower_part">
  <div class="row row-cols-2">
    <div className="col for_img1">
        <img src={easyimg} alt="" />
        <p>Easy to use</p>
    </div>
    <div className="col for_img2">
        <img src={settingsimg} alt="" />
        <p>Quick setup</p>
    </div>
    <div className="col for_img3">
        <img src={hassle} alt="" />
        <p>Hassle free</p>
    </div>
    <div className="col for_img4">
        <img src={everyoneimg} alt="" />
        <p>For everyone</p>
    </div>
  </div>
<div className='lower_part_text'>
    <h1>Why <span>ToDo Room</span>?</h1>
    <p>We help you to organise your work seamlessly with Todo Room.</p>
</div>
</div>
<div className='container-fluid p-3 lower_part_box'>
    <div className='container-lg w-75 p-5 footer'>
        <h1>Ready to get started ?</h1>
        <button type="button" className="btn btn-secondary p-1 footer_button">Get Started Now</button>
    </div>

</div>
<div className='container footer_nav'>
<nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">

                    {/* //* navbar brand */}
                    <p className="copyright_text">© 2022 All rights reserved
                </p>


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
</div>

        </>
     );
};

export default LandingBanner1;

