import img from '../assets/images/about-us/1.webp'

import '../assets/css/AboutUs.css'
import { AttentionSeeker, Zoom } from 'react-awesome-reveal'
const AboutUs = () => {
    return (
        <div className='max-area' id='about'>
            <p className='about'>About us</p>

            <Zoom><div className='flex'>
          
          <div className='flex-1'>
                <img className='about-img' src={img} alt="" />
            </div>
       
            <div className='flex-1'>
                <p className='about-details'>Our Mission is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.</p>
            </div>
        </div></Zoom>
        </div>
    )
}

export default AboutUs