import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form className="login offset-lg-4 col-lg-4 offset-lg-4">
        <div className="formContent">
          <input className="formInput" type="email" placeholder="Email" />
          <input className="formInput" type="password" placeholder="Password" />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <span>
            <NavLink to={"/register"}>Create Account</NavLink>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
