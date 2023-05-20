import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const handleDelete = (_id) => {
    fetch(`https://assignment-11-server-simanto97.vercel.app/my-toys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Car deleted successfully");
          const remaining = toys.filter((toy) => toy._id !== _id);
          setToys(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://assignment-11-server-simanto97.vercel.app/my-toys/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{toy?.toy_name}</td>
                <td>{toy?.seller_name}</td>
                <td>{toy?.sub_category}</td>
                <td>{toy?.price}$</td>
                <td>{toy?.available_quantity}</td>
                <td>
                  <Link to={`/all-toys/${toy._id}`}>
                    <button className="btn btn-outline btn-info">
                      Details
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/update-toy/${toy._id}`}>
                    <button className="btn btn-outline btn-info">Update</button>
                  </Link>
                </td>
                <td>
                  <Link to="">
                    <button
                      onClick={() => handleDelete(toy?._id)}
                      className="btn btn-outline btn-error"
                    >
                      X
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

export default MyToys;
