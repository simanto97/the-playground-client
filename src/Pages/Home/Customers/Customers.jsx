import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h2 className="text-center font-bold text-5xl my-6 p-5">
        What customers are saying <br />
        <span className="text-indigo-600 italic">About Us</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer}></CustomerCard>
        ))}
      </div>
    </div>
  );
};

export default Customers;
