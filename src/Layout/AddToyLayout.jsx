import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import AddToy from "../Pages/AddToy/AddToy";

const AddToyLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AddToy></AddToy>
      <Footer></Footer>
    </div>
  );
};

export default AddToyLayout;
