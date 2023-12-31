import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/authentication/authentication.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleAuth from "../../Shared/GoogleAuth/GoogleAuth";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        setUser(loggedUser);
        alert(`${loggedUser.displayName} logged in successfully`);
      })
      .catch((error) => {
        toast.error(error.message.split("/")[1].split(")"[0]));
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="text-center shadow-2xl rounded-2xl lg:text-left">
          <img className="h-[600px] rounded-2xl" src={loginImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1>
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
                type="password"
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>
              New to the PlayGround?
              <Link className="underline" to="/register">
                Register
              </Link>
            </p>
          </form>
          <GoogleAuth></GoogleAuth>
          <Toaster />;
        </div>
      </div>
    </div>
  );
};

export default Login;
