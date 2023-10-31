import logo from '../../assets/images/logo/logo.png'
import '../../assets/css/Navbar.css'
import {  useState } from 'react';
import { FaBars, FaShoppingCart } from "react-icons/fa";

import { useCount } from './Counter';

const Navbar = () => {

    const { count } = useCount()
    console.log(count)

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src={logo} alt="" />
                    </div>
                    <button className="menu-button" onClick={toggleMenu}>
                        {menuOpen ? "X" : <FaBars />}
                    </button>
                    <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <p className='counter'><FaShoppingCart /> {count}</p>
                </div>
            </nav>
        </div>

    )
}

export default Navbar


