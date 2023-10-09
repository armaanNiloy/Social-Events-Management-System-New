import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilities/localstorage";
import SaveOrder from "./SaveOrder";


const Order = () => {
    const events = useLoaderData();
    const [orders, setOrders] = useState([]);
    useEffect( () =>{
        const ordersId = getStoredData();
        const selectedOrder = events.filter(card => ordersId.includes(card.id))
        setOrders(selectedOrder);
    },[events])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                orders.map(order => <SaveOrder key={order.id} order={order}></SaveOrder>)
            }
        </div>
    );
};

export default Order;