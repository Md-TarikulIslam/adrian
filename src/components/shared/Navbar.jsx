import logo from '../../assets/images/logo/logo.png'
import '../../assets/css/Navbar.css'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        // <div className='navbar'>
        //     <div className='nav-area'>
        //         <div className='nav-flex'>
        //             <div>
        //                 <img src={logo} alt="" />
        //             </div>
        //             <div>
        //                 <ul className='ul'>
        //                     <li>Home</li>
        //                     <li>Home</li>
        //                     <li>Home</li>
        //                     <li>Home</li>
        //                     <li>Home</li>
        //                     <li>Home</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar