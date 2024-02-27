import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from "react-scroll"
const Header = () => {
    const mobile = window.innerWidth <= 786 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='header'>
            <img src={Logo} className='logo' alt="" />
            {(menuOpen === false && mobile === true) ? (<div >
                <img onClick={() => {
                    setMenuOpen(true)
                }} src={Bars} style={{ width: "30px", height: "30px" }} alt="" />
            </div>) : (
                <ul className='list-menu'>
                    <li ><Link
                        onClick={() => { setMenuOpen(false) }}
                        to="home"
                        span={true}
                        smooth={true}
                        duration={1500} >home</Link></li>
                    <li ><Link
                        onClick={() => { setMenuOpen(false) }}
                        to="programes"
                        span={true}
                        smooth={true}
                        duration={1500} >programes</Link></li>
                    <li > <Link
                        onClick={() => { setMenuOpen(false) }}
                        to="reasons"
                        span={true}
                        smooth={true}
                        duration={1500} >Why us</Link></li>
                    <li > <Link
                        onClick={() => { setMenuOpen(false) }}
                        to="plans"
                        span={true}
                        smooth={true}
                        duration={1500} >Plans</Link></li>
                    <li ><Link
                        onClick={() => { setMenuOpen(false) }}
                        to="testimonials"
                        span={true}
                        smooth={true}
                        duration={1500} >testimonials</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Header