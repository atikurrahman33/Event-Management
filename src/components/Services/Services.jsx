import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";


const Services = () => {
    const data=useLoaderData()
    return (
        <div className="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 md:w-full gap-7 ">
            {
                data.map(data=> <Card key={data.id} data={data}></Card> )
            }
        </div>
    );
};

export default Services;