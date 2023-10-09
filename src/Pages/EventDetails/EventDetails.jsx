import { useLoaderData, useParams } from "react-router-dom";
import { saveCard } from "../../utilities/localstorage";
import Swal from "sweetalert2";


const EventDetails = () => {
    const { id } = useParams();
    const events = useLoaderData();
    const idx = parseInt(id);
    const event = events.find(event => event.id === idx);
    const handleSaveOrder = () =>{
        const flag = saveCard(idx);
        if(flag){
            Swal.fire({
                icon: 'success',
                title: 'Order',
                text: 'Order added successfully.'
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Already Added'
            })
        }
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={event.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{event.name}</h1>
                    <p className="py-6">{event.description}</p>
                    <p className="mb-4">Price: {event.price}</p>
                    <button onClick={handleSaveOrder} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;