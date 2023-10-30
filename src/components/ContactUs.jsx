import '../assets/css/ContactUs.css'
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className="max-area" id='contact'>
            <p className='about'>Contact us</p>
            <div className="flex-2">
                <div className="flex-1">
                    <div>
                        <p className="company">Our Company</p>
                        <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut officia quod iste aperiam cupiditate, expedita dolorem, voluptates exercitationem, iure temporibus illo earum laborum aliquid! Consectetur est impedit vitae error laudantium ratione, eos doloremque itaque explicabo. Quos distinctio accusantium aspernatur praesentium sunt quo doloribus voluptas, vel eligendi commodi eos repellat at.</p>
                    </div>
                    <div className="">
                        <p className='corporate'>Corporate Office</p>
                        <div className='mini-div'>
                            <FaLocationArrow />
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className='mini-div'>
                            <FaPhoneAlt />
                            <p>+880 1739-426293</p>
                        </div>
                        <div className='mini-div'>
                            <FaEnvelope />
                            <a className='mail' href="mailto:tarikul2605@gmail.com"><p className='mail'>tarikul2605@gmail.com</p></a>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                   <div className='input-div'>
                   <input className='input' type="text" name="" id="" placeholder='Enter your name'/>
                    <input className='input' type="text" name="" id="" placeholder='Enter your mail'/>
                    <input className='input mail' type="text" name="" id="" placeholder='Enter your message'/>
                    <button className='send-btn'>Send message</button>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs