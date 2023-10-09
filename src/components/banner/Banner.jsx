import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/h956z8J/image-1000x500.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Prottasa Event Management</h1>
                    <p className="mb-5">Craft unforgettable experiences and elevate your brand with our expert event management services, seamlessly bringing your vision to life</p>
                    <Link to='/login' className="btn bg-pink-700 text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;