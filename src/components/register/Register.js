import React, { useState } from "react";
import RegValidation from "./RegValidation";
import "./register.css";

const Register = () => {
  const initState = {
    userName: "",
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    registeredStatus: false,
  };

  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});

  // To update part of the state
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Registers a user and validates input data.
   *
   *
   */
  const handleFormSubmit = async (event) => {
    //
    event.preventDefault();
    setErrors({});

    //Validate input fields
    const validationErrors = RegValidation(values);
    setErrors(validationErrors);

    //if there are errors, do not proceed
    if (validationErrors.hasErrors) {
      return;
    }

    //if there are NO errors, then register user
    const response = await fetch("http://localhost:3100/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      let data = await response.json(); 
        setErrors(
           { msg: data.msg }
        );
     
     
    } else {
      setValues({ ...values, registeredStatus: true });
    }
  };

  return (
    <div>
      <div className="content">
        <form id="register-form" className="register-form">
          {
            values.registeredStatus ? (
            <h2>{values.registeredStatus ? "Registered Successfully" : ""}</h2>
          ) : (
            <div className="register">
              <h1>Register</h1>
              {}
              {errors.msg && <p className="error">{errors.msg}</p>}

              {errors.name && <p className="error">{errors.userName}</p>}

              <input
                type="text"
                name="userName"
                className="input-text"
                placeholder="User Name"
                value={values.userName}
                onChange={handleChange}
                autoComplete="off"
              ></input>

              {errors.name && <p className="error">{errors.name}</p>}

              <input
                type="text"
                name="name"
                className="input-text"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                autoComplete="off"
              ></input>
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="text"
                name="email"
                className="input-text"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
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
            </div>
          )}
          <div className="register-text">
            <p>
              Already a user? <a href="/">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
