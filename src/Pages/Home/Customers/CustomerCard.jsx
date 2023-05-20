import React from "react";

const CustomerCard = ({ customer }) => {
  const { id, name, location, photo, feedback } = customer;
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1500"
      className="card w-96 bg-base-100 m-2 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
