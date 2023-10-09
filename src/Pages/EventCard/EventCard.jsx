import { Link, useNavigate } from "react-router-dom";
import { saveCard } from "../../utilities/localstorage";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const EventCard = ({ oneData }) => {
    console.log(oneData);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const {id, name, price, description, image, card_color, text_color } = oneData;
    const handleSaveOrder = () =>{
        let flag = false;
        if(user)
        {
            flag  = saveCard(parseInt(id));
        }
        else{
            navigate('/login')
            return;
        }
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
        <div style={{backgroundColor: card_color}} data-aos="fade-up" className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-40 lg:h-60 w-full" src={image} alt="no picture" /></figure>
            <div className="card-body">
                <h2 style={{color: text_color}} className="card-title">{name}</h2>
                <p style={{color: text_color}}>{description}</p>
                <h2 style={{color: text_color}} className="text-lg">Price: {price}</h2>
                <div className="flex justify-evenly gap-2">
                    <button onClick={handleSaveOrder} className="btn btn-primary w-1/2">Order Now</button>
                    <Link className="w-full" to={`/details/${id}`}><button className="btn btn-accent w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;