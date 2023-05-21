import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CategoryCard = ({ car }) => {
  const { toy_name, _id, image, price, rating } = car;
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{toy_name}</h1>
          <p className="mt-4 font-bold">
            Price: <span className="text-orange-800 text-lg">{price}</span> $
          </p>
          <p className="my-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="my-4">
            <Rating
              className="text-orange-700"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>{" "}
            <span className="text-orange-700 ml-1">{rating}</span>
          </div>
          <Link to={`/all-toys/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
