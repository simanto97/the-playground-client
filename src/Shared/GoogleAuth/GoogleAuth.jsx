import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
  const { handleGoogleSignIn } = useContext(AuthContext);

  return (
    <div className="my-4 mx-7">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-success btn-block"
      >
        <FaGoogle className="mr-3 text-2xl"></FaGoogle> Login with Google
      </button>
    </div>
  );
};

export default GoogleAuth;
