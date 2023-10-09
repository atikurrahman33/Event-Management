
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './detailsCard';


const ManyItem = () => {

    const[card, setcart]=useState({});

    const {id}=useParams();
    

    const cards= useLoaderData();
    
    useEffect(()=>{
        const findCard = cards.find((card)=>card.id==id)
        setcart(findCard)

    },[id, cards])
    return (
       <div>
        <DetailsCard card={card}></DetailsCard>
       </div>
    );
};

export default ManyItem;