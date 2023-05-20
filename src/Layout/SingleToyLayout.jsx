import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import SingleToy from "../Pages/SingleToy/SingleToy";
import useTitle from "../hooks/useTitle";

const SingleToyLayout = () => {
  useTitle('Details')
  return (
    <div>
      <Navbar></Navbar>
      <SingleToy></SingleToy>
      <Footer></Footer>
    </div>
  );
};

export default SingleToyLayout;
