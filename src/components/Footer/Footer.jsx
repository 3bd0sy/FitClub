import React from 'react';
import "./Footer.css";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from '../../assets/instagram.png';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="links">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer