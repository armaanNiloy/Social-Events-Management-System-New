import { useLoaderData } from "react-router-dom";
import EventCard from "../EventCard/EventCard";




const Home = () => {
    const eventData = useLoaderData();
    console.log(eventData);
    return (
        <div>
            <div>
                <img src="/bannar.png" alt="bannar does not found" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-10 gap-5 mt-5">
                {
                    eventData.map(oneData =><EventCard key={oneData.id} oneData={oneData}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Home;