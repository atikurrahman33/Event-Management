

const DetailsCard = ({ card }) => {
    const { id } = card
    console.log(card)

    return (
        <div className="w-6/12 mx-auto border my-20">
            <div className="shadow-xl">
                <figure ><img className="w-full h-[400px]" src={card.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{card.name}</h2>
                    <p className="font-semibold">{card.description}</p>
                    <div>
                        <p className="text-xl font-semibold">{card.price}$</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsCard;