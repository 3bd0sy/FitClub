import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} className='logo' alt="" />
            <ul className='list-menu'>
                <li>Home</li>
                <li>Programes</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>testimonials</li>
            </ul>
        </div>
    )
}

export default Header