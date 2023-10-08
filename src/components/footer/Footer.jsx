import { FaFacebookF } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bannerr'>
             <div>
             
                <div className="social-icons text-3xl text-white">
                
                   <a href=""> <FaFacebookF></FaFacebookF></a>
                    <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                    <a href=""><FaInstagram></FaInstagram></a>


                </div>
                <div className="policy text-white">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Setting</p>
                </div>
                <div className=''>
            <small  className="copyright">Social Event @2023 Event Management </small>
        </div>
            </div>

        </div>
    );
};

export default Footer;