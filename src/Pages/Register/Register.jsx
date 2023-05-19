import React, { useContext } from "react";
import { Link } from "react-router-dom";
import registerImage from "../../assets/authentication/authentication.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleAuth from "../../Shared/GoogleAuth/GoogleAuth";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    if (password.length < 6) {
      console.log("Password need 6 char");
      return;
    }
    if ((email, password)) {
      createUser(email, password)
        .then((result) => {
          updateUserProfile(name, photo)
            .then(() => {
              // profile Updated
            })
            .catch((error) => console.log(error));
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="text-center shadow-2xl rounded-2xl lg:text-left">
          <img className="h-[600px] rounded-2xl" src={registerImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
            <p>
              Already have an account?
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </form>
          <GoogleAuth></GoogleAuth>
        </div>
      </div>
    </div>
  );
};

export default Register;
