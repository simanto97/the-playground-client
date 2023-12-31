import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import AddToy from "../Pages/AddToy/AddToy";
import useTitle from "../hooks/useTitle";

const AddToyLayout = () => {
  useTitle("Add a Toy");
  return (
    <div>
      <Navbar></Navbar>
      <AddToy></AddToy>
      <Footer></Footer>
    </div>
  );
};

export default AddToyLayout;
