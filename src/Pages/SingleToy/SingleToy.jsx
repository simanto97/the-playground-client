import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToy = useLoaderData();
  const {
    _id,
    toy_name,
    image,
    price,
    rating,
    available_quantity,
    description,
    seller_name,
    seller_email,
    sub_category,
  } = singleToy[0];
  return (
    <div>
      <h2 className="text-4xl mt-6">Details for: {toy_name}</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl my-6">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl mb-2">{toy_name}</h2>
          <p>Seller Name: {seller_name}</p>
          <p>Seller Email: {seller_email}</p>
          <p>Sub-Category: {sub_category}</p>
          <p className="font-bold">
            Price: <span className="text-orange-800 text-lg">{price}</span> $
          </p>
          <p className="font bold">
            Available:
            <span className="text-orange-800 text-lg">
              {available_quantity}
            </span>
          </p>
          <div>
            <Rating
              className="text-orange-700"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="text-orange-700 ml-1">{rating}</span>
          </div>
          <p>Details: {description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
