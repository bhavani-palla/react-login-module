import React, { useState } from "react";
import RegValidation from "./RegValidation";
import "./register.css";

const Register = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  };

  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(RegValidation(values));
  };

  return (
    <div>
      <div className="content">
        <form id="register-form" className="register-form">
          <div className="register">
            <h1>Register</h1>
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="text"
              name="name"
              className="input-text"
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              autocomplete="off"
            ></input>
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="email"
              className="input-text"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              autocomplete="off"
            ></input>
            {errors.password && <p className="error">{errors.password}</p>}

            <input
              type="password"
              name="password"
              className="input-text"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
            ></input>

            {errors.reEnterPassword && (
              <p className="error">{errors.reEnterPassword}</p>
            )}

            <input
              type="password"
              name="reEnterPassword"
              className="input-text"
              placeholder="Re-enter password"
              value={values.reEnterPassword}
              onChange={handleChange}
            ></input>
            <button
              className="submit-btn"
              type="submit"
              form="register-form"
              onClick={handleFormSubmit}
            >
              Register
            </button>
            <div className="register-text">
              <p>
                Already a user? <a href="/">Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
