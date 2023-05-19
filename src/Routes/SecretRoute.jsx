import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const SecretRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    console.log("loading");
    return (
      <div className="mt-8 flex justify-center items-center">
        <p className="text-5xl">Loading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default SecretRoute;
