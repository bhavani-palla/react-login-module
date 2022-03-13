import React from "react";
import { useState } from "react";
import LoginValidation from './LoginValidation'
import "./login.css";
import { useNavigate } from "react-router-dom";
import { updateLoggedIn } from "../../context/ProtectedRoutes";

const Login = ({ handleLogin }) => {
  const initState = {
    userName: "",
    password: "",
  };

  const navigate = useNavigate()

  const [user, setUser] = useState(initState);
    const [errors, setErrors] = useState({});


  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = LoginValidation(user);
    
    setErrors(validationErrors)

    if (validationErrors.hasErrors) {
       return
    }



    const response = await fetch("http://localhost:3100/api/login", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(user),
     });

    if (response.ok) {
      const body = await response.json();
       updateLoggedIn();
      navigate('/home')
    }
  
    setUser(initState);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="content">
      <form id="login_form" className="login-form">
        <h1>Login</h1>

        <div className="form_div">
          <label>username:</label>
          <input
            className="input-text"
            name="userName"
            type="text"
            value={user.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error">{errors.userName}</p>}

          <label>Password:</label>
          <input
            id="pass"
            className="input-text"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button
            className="submit-btn"
            type="submit"
            form="login_form"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>

        <div className="register-text">
          <p>
           Not a user? Register <a href="register">Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

