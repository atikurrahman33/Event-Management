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
                        <h2>{name}</h2>
                        <p>{description}</p>
                     </div>
                     <div className='info'>
                        <p> $ Price: {price} </p>
                        </div>
                        <button   className='card-btn'>Select</button>


            </div>
        </div>
    
   
    );
};

export default Service;