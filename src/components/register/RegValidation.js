

const RegValidation = (values) => {
    let errors = {}
        if(!values.name){
            errors.name='Name is required'
        }
    if (!values.email) {
        errors.email='Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
        errors.password = 'Password is required'
        
    } else if (values.password.length < 5) {
        errors.password='Password must be more than five characters'
    }
    if (!values.reEnterPassword) {
        errors.reEnterPassword='Password is required'
    } else if (values.reEnterPassword !== values.password) {
        errors.reEnterPassword='Password do not match'
    }
        
    
    
  return errors
}

export default RegValidation