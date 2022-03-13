import React from "react";

const LoginValidation = (user) => {
  let errors = {};
  let hasErrors = false;
 
  if (!user.userName) {
    errors["userName"] = "Please enter valid username.";
    hasErrors = true
  }

  if (!user.password) {
    errors.password = "Password is required";
    errors.hasErrors = true;
  } else if (user.password.length < 5) {
    errors.password = "Password must be more than five characters";
    hasErrors = true;
  }

  errors.hasErrors = hasErrors
  return errors;
};

export default LoginValidation;
