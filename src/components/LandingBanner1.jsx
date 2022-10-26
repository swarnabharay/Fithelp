import React from "react";
import "../styles/LandingBanner1.css";
import WelcomeImage from "../assets/images/project.png";
import { AiFillMail, AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LandingBanner1 = () => {
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
        </>
    );
};

export default LandingBanner1;
