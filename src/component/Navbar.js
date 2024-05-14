import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const  [Mobile, setMobile] = useState(false);

    return(
        <nav className='navbar'>
            <h3 className='app-name'>Auditorium Request</h3>

            <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/request'><li>New Request</li></Link>
            </ul>

            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}

export default Navbar;