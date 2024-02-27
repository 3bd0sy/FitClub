import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"

const Header = () => {
    const mobile = window.innerWidth <= 786 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='header'>
            <img src={Logo} className='logo' alt="" />
            {(menuOpen === false && mobile === true) ? (<div >
                <img onClick={()=>{
                    setMenuOpen(true)
                }} src={Bars} style={{width:"30px",height:"30px"}} alt="" />
            </div>) : (
                <ul className='list-menu'>
                    <li onClick={()=>{setMenuOpen(false)}}>Home</li>
                    <li onClick={()=>{setMenuOpen(false)}}>Programes</li>
                    <li onClick={()=>{setMenuOpen(false)}}>Why us</li>
                    <li onClick={()=>{setMenuOpen(false)}}>Plans</li>
                    <li onClick={()=>{setMenuOpen(false)}}>testimonials</li>
                </ul>
            )}
        </div>
    )
}

export default Header