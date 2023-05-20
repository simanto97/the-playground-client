import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Aside = () => {
  const [newToys, setNewToys] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/new-addition")
      .then((res) => res.json())
      .then((data) => setNewToys(data));
  }, []);
  return (
    <div className="md:my-6 flex flex-col items-center">
      <h2 className="text-3xl italic my-6">New Addition :</h2>
      {newToys.map((newToy) => (
        <div className="m-4 card w-[300px] bg-base-100 shadow-xl">
          <figure>
            <img src={newToy?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {newToy?.toy_name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{newToy?.sub_category}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aside;
