

const Card = ({ data }) => {
    const { name, price, image, description } = data;
    return (
        <div className="py-10  ">
            <div className="w-7/12 h-[500px] shadow-xl rounded-lg">
                <figure><img className="h-[250px] rounded-t-lg w-full" src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Card;