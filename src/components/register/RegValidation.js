const RegValidation = (values) => {
  //Empty error object
    let errors = {};

     let hasErrors = false;
  
    if (!values.userName) {
        errors.userName = "User name is requried"
        hasErrors = true
   } 
    //check if name is empty
  if (!values.name) {
      errors.name = "Name is required";
       errors.hasErrors = true;
  }
  if (!values.email) {
      errors.email = "Email is required";
       hasErrors = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
       hasErrors = true;
  }
  if (!values.password) {
      errors.password = "Password is required";
       hasErrors = true;
  } else if (values.password.length < 5) {
      errors.password = "Password must be more than five characters";
       hasErrors = true;
  }
  if (!values.reEnterPassword) {
      errors.reEnterPassword = "Password is required";
       hasErrors = true;
  } else if (values.reEnterPassword !== values.password) {
      errors.reEnterPassword = "Password do not match";
       hasErrors = true;
  }

  errors.hasErrors = hasErrors
  return errors;
};

export default RegValidation;
