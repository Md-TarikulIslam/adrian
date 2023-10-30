import '../../assets/css/Footer.css'
import logo from '../../assets/images/logo/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='max-area white'>
                <img className='logo' src={logo} alt="" />
                <div className='social'>
                    <a target='_blank' href="https://www.facebook.com/alwaysnayon"><FaFacebookF className='single-logo'/></a>
                    <a target='_blank' href="https://x.com/tarikul_nayon?t=cSY-pp6XBRal9C9x9o7yrQ&s=08"><FaTwitter className='single-logo'/></a>
                    <a target='_blank' href="https://www.instagram.com/socalled007/"><FaInstagram className='single-logo'/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer