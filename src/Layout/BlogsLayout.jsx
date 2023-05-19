import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Blogs from "../Pages/Blogs/Blogs";
import Footer from "../Shared/Footer/Footer";

const BlogsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogsLayout;
