import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

const UpdateToyLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UpdateToy></UpdateToy>
      <Footer></Footer>
    </div>
  );
};

export default UpdateToyLayout;
