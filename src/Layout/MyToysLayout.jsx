import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import MyToys from "../Pages/MyToys/MyToys";
import Footer from "../Shared/Footer/Footer";
import useTitle from "../hooks/useTitle";

const MyToysLayout = () => {
  useTitle('My Toys')
  return (
    <div>
      <Navbar></Navbar>
      <MyToys></MyToys>
      <Footer></Footer>
    </div>
  );
};

export default MyToysLayout;
