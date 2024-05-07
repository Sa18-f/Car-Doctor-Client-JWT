import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { img, title, _id, price} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-8">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;