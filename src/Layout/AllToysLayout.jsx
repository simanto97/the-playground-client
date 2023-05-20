import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import AllToys from "../Pages/AllToys/AllToys";
import useTitle from "../hooks/useTitle";

const AllToysLayout = () => {
  useTitle("All Toys");
  return (
    <div>
      <Navbar></Navbar>
      <AllToys></AllToys>
      <Footer></Footer>
    </div>
  );
};

export default AllToysLayout;
