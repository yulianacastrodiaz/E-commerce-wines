import Search from "../Search";
import React, { useState, useEffect, useSelector } from "react";
import Cart from "../Cart";
import { useDispatch } from "react-redux";
import { login } from "../../actions"


const Navbar = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(login(user));
  }



  return (
    <>
      <div className="navbar mb-10 shadow-md">
        <div className="flex-1 px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">
            <i className="fas fa-user-md pr-3"></i>Wines
          </span>
        </div>
        <div className="px-2 navbar-center">
          <Search />
        </div>
        <div className="flex-none px-2 lg:flex md:flex sm:flex navbar-end">
          <div className="dropdown dropdown-hover dropdown-left">
            <button className="btn btn-square px-8 btn-ghost mr-2 ">
              Cart
            </button>
            <div
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-72"
            >
              <Cart />
            </div>
          </div>

          <label htmlFor="my-modal-2" className="btn btn-primary modal-button">
            LOGIN/SIGNUP
          </label>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="modal-action flex-col">
                <div className="form-control">
                  <h1 className="text-center text-2xl font-bold text-primary">
                    LOGIN
                  </h1>

                  <label className="label">
                    <span className="label-text font-bold mt-2">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-primary input-bordered"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                  />
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="input input-primary input-bordered"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="my-modal-2"
                    className="btn mt-2"
                    disabled={user.username === "" || user.password === ""}
                    onClick={handleSubmit}
                  >
                    Login
                  </label>
                  <label
                    htmlFor="my-modal-2"
                    className="btn bg-black  mt-2 hover:bg-white hover:text-black duration-150"
                  >
                    <img
                      className="w-5 h-5 mr-2"
                      src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                    />
                    Login with Google
                  </label>

                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-secondary mt-2"
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
