import { useLoaderData } from "react-router-dom";
import Service from "../service/Service";
import './Home.css'
import Banner from "../banner/Banner";


const Home = () => {
    const items= useLoaderData()
    return (
        <div>
            <div><Banner></Banner></div>
           <div className="pt-10">
            <div className="text-center text-3xl font-bold">Our Service</div>
            <div className="CARD w-9/12 mx-auto gap-5">
           
           {
            items.map( items=> <Service key={items.id} items={items} ></Service>)
           }
        </div>
           </div>
        </div>
    );
};

export default Home;