import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [cars, setCars] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/carSearchByToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  };
  return (
    <div className="flex justify-center flex-col space-y-6">
      <h2 className="text-center text-5xl">All Toys</h2>
      <div className="mx-auto">
        <input
          className="input input-bordered"
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          name=""
          id=""
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{car?.toy_name}</td>
                <td>{car?.seller_name}</td>
                <td>{car?.sub_category}</td>
                <td>{car?.price}$</td>
                <td>{car?.available_quantity}</td>
                <td>
                  <Link to={`/all-toys/${car._id}`}>
                    <button className="btn btn-outline btn-info">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
