import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams();
    const events = useLoaderData();
    const idx = parseInt(id);
    const event = events.find(event => event.id === idx);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={event.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{event.name}</h1>
                    <p className="py-6">{event.description}</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;