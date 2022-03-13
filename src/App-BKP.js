import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import React, { Suspense,useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(prevvalue => !prevvalue);
  }

  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
          exact
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={loggedIn ? <Homepage /> : <Navigate to="/" />}
        />
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

//export default App;
