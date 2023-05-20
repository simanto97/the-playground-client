import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Register from "../Pages/Register/Register";
import useTitle from "../hooks/useTitle";

const RegisterLayout = () => {
  useTitle('Register')
  return (
    <div>
      <Navbar></Navbar>
      <Register></Register>
      <Footer></Footer>
    </div>
  );
};

export default RegisterLayout;
