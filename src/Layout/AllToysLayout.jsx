import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import AllToys from "../Pages/AllToys/AllToys";

const AllToysLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AllToys></AllToys>
      <Footer></Footer>
    </div>
  );
};

export default AllToysLayout;
