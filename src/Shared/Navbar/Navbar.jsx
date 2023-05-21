import React, { useContext } from "react";
import logo from "../../assets/main/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-toys">All Toys</Link>
      </li>
      {user && (
        <li>
          <Link to="/add-toy">Add Toy</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to={`/my-toys`}>My Toys</Link>
        </li>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <img className="w-1/2 md:w-full" src={logo} alt="" />
        <a className="btn btn-ghost normal-case text-xl hidden lg:block">
          The PlayGround
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="text-xs md:text-base">
          {user && <span>{user.displayName}</span>}
        </div>
        {user && (
          <img
            title={user.displayName}
            className="rounded-full"
            style={{ height: "50px", width: "50px" }}
            src={user.photoURL}
            alt="User"
          />
        )}
        {user ? (
          <Link to="">
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
