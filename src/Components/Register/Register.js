import React from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";

import { NavLink } from "react-router-dom";
const Register = () => {

const signupHandler = () =>{
  console.log("signup clicked");
}

  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create your account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
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
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
          <input
            type="text"
            name="business"
            id="business"
            placeholder="Business"
          />
          <input
            type="text"
            name="roles"
            id="roles"
            placeholder="Role"
          />
          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};
export default Register;
