

const SaveOrder = ({ order }) => {
    return (
        <div className="grid grid-cols-2 mx-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={order.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{order.name}</h2>
                    <p>{order.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{order.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveOrder;