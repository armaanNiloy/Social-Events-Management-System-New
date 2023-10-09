import { Link } from "react-router-dom";


const EventCard = ({ oneData }) => {
    console.log(oneData);
    const {id, name, price, description, image } = oneData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h2 className="text-lg">Price: {price}</h2>
                <div className="flex justify-evenly gap-2">
                    <button className="btn btn-primary w-1/2">Order Now</button>
                    <Link className="w-full" to={`/details/${id}`}><button className="btn btn-accent w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;