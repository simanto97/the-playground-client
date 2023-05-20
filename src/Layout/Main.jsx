import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Carousel from "../Pages/Home/Carousel/Carousel";
import Aside from "../Pages/Home/Aside/Aside";
import Gallery from "../Pages/Home/Gallery/Gallery";
import Customers from "../Pages/Home/Customers/Customers";
import useTitle from "../hooks/useTitle";

const Main = () => {
  useTitle('Home')
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="md:flex justify-between">
        <Outlet></Outlet>
        <Aside></Aside>
      </div>
      <Customers></Customers>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Main;
