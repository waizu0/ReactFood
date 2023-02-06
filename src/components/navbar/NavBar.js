import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import './NavBarStyles.css'


function NavBar()
{

    const[nav, setNav] = useState(false);
    const handleNavClick = () => setNav(!nav)

    return(
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
    
        <div className={nav ? 'logo dark-logo' : 'logo'}>
            <h2>ReactFood</h2>
        </div>
        <ul className="nav-menu">
            <li><a href="/">Contact</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Menu</a></li>
        </ul>
        <div className="nav-menu-icons">
        </div>
        <div className="full-menu" onClick={handleNavClick}>
            {!nav ? (<HiOutlineMenuAlt4 className='menu-icon' />) :(<AiOutlineClose style={{color: 'white'}} className='menu-icon' />)}
            
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-navbar">
                <li><a href="/">Contact</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Menu</a></li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="mobile-menu-icons">
                <button>Search</button>
                <button>My Account</button>
                </div>
            </div>
        </div>

    </div>
    )
}

export default NavBar