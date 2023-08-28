import React from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
const loginHandler = () =>{
  console.log("butt0n clicked");
}

  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
