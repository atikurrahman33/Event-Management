
import './Service.css';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Service = ({ items }) => {
    const{user}=useContext(AuthContext);
    
    const { id,  name, price, image, description } = items;

    const navigate=useNavigate();
    const handleClic= ()=>{
        navigate(`/abouts/${id}`)
    }

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
                   <button onClick={handleClic} className='card-btn text-black'>See Details</button> 
                </div>
               
                
            </div>
            {
                
            }
           
        </div>
    
    );
};

export default Service;
