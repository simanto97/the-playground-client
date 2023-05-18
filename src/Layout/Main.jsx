import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Carousel from "../Pages/Home/Carousel/Carousel";
import Aside from "../Pages/Home/Aside/Aside";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <div className="flex justify-between">
        <Outlet></Outlet>
        <Aside></Aside>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
