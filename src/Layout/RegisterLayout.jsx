import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Register from "../Pages/Register/Register";

const RegisterLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Register></Register>
      <Footer></Footer>
    </div>
  );
};

export default RegisterLayout;
