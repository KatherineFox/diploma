import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <form className="login offset-lg-3 col-lg-6 offset-lg-3">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <span>
          <NavLink to={"/register"}>Create Account</NavLink>
        </span>
      </form>
    </>
  );
};

export default Login;
