import React from "react";
import { useState, useEffect } from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="content">
      <form id="login_form" className="login_form">
        <h1>Login</h1>

        <div className="form_div">
          <label>Email:</label>
          <input className="input-text" name="username" type="text" />

          <label>Password:</label>
          <input
            id="pass"
            className="input-text"
            name="password"
            type="password"
          />

          <button className="submit-btn" type="submit" form="login_form">
            Login
          </button>
        </div>

        <div className="register-text">
          <p>
            Register<a href="register">Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
