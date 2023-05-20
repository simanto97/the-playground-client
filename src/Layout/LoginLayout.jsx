import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Login from "../Pages/Login/Login";
import useTitle from "../hooks/useTitle";

const LoginLayout = () => {
  useTitle("Login");
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
