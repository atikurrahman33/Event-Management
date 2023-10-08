import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({ items }) => {
    const {  name, price, image, description } = items;
    const first10Words = description.split(' ').slice(0, 10).join(' ');

    return (
        <div className='pt-11'>
            <div className='card bg-pink-300'>
                <div className='card-img'>
                    <img className='photo  rounded-t-lg' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-semibold p-2 px-2 text-black'>{name}</h2>
                    <p className='text-black p-2 px-2'>{first10Words}...</p>
                </div>
                <div className='info p-1 '>
                    <p className='text-l font-bold text-black'> $ Price: {price} </p>
                </div>
                <div className='butt'>
                   <Link to={`/login`}> <button className='card-btn text-black'>See Details</button> </Link>
                </div>
            </div>
           
        </div>
    
    );
};

export default Service;
