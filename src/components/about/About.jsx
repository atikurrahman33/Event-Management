import { FaFacebookF } from 'react-icons/fa6';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { FcAbout} from 'react-icons/fc';

import './About.css'
const About = () => {
    return (
        <div>
            <body className="pt-20  shadow-xl w-8/12 mx-auto">
  <div>
   
    <div className="  px-4  ">
      <div className='relative m-0 shadow-lg flex'>
        <div className='flex-no-shrink'>
        <figure><img className='w-64 h-full block mx-auto py-10'  src="https://i.ibb.co/hW8ZDNy/IMG-20231008-043022.jpg" alt="Album"/></figure>
        </div>
        <div className='flex-1 card-block relative'>
          <div className="p-6">
            <h4 className='font-bold text-3xl mb-3 flex'>About <FcAbout></FcAbout> </h4>
            <h3 className='font-bold text-2xl mb-3'>Unique and bespoke event...</h3>
            <p className='leading-normal'> we believe in the power of unforgettable moments. As a premier event management, we specialize in turning your dreams into reality. With a passion for creativity and a commitment to excellence, we transform ordinary events into extraordinary experiences.</p>
            <p className="text-3xl font-bold text-grey block mt-10">Our Team</p>
           <div className='flex gap-10 p-5'>
            <div>
                <h2 className='text-rose-600 text-lg font-semibold'>Owner</h2>
                <h3 className='text-2xl font-bold'>Atikur Rahman</h3>
                <p></p>
                <div>
                <p className="socialIcon text-2xl flex gap-3 pt-2">
                
                <a href=""> <FaFacebookF></FaFacebookF></a>
                 <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
                 <a href=""><FaInstagram></FaInstagram></a>
              </p>
                </div>
            </div>

            <div>
                <h2 className='text-rose-600 text-lg font-semibold'>Event Director</h2>
                <h3 className='text-2xl font-bold'>MD.Tanim Khan</h3>
                <p></p>
                <div>
                <p className="socialIcon text-2xl flex gap-3 pt-2">
                
                <a href=""> <FaFacebookF></FaFacebookF></a>
                 
                 <a href=""><FaInstagram></FaInstagram></a>
              </p>
                </div>
            </div>

            <div>
                <h2 className='text-rose-600 text-lg font-semibold'>Event Planner</h2>
                <h3 className='text-2xl font-bold'>MD.Shakil Khan</h3>
                <p></p>
                <div>
                <p className="socialIcon text-2xl flex gap-3 pt-2">
                
                <a href=""> <FaFacebookF></FaFacebookF></a>
                 
                 <a href=""><FaInstagram></FaInstagram></a>
              </p>
                </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
           
        </div>
    );
};

export default About;