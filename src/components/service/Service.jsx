import './Service.css'

const Service = ({items}) => {
    const{id, name, price,image,description }=items;
    return (
        <div className='pt-11'>
           
            <div className='card'>
        <div className='card-img'>
                    <img className='photo' src={image} alt="" />
                     </div>
                     <div>
                        <h2 className='text-xl font-semibold p-1'>{name}</h2>
                        <p>{description}</p>
                     </div>
                     <div className='info p-1 '>
                        <p className='text-l font-bold '> $ Price: {price} </p>
                        </div>
                       <div className='butt'>
                       <button   className='card-btn'>See Details</button>
                       </div>


            </div>
        </div>
    
   
    );
};

export default Service;