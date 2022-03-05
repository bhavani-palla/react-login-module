import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Switch, NavLink, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (test) => {
    alert('test' + test);
    setLoggedIn(test);
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            loggedIn ? (<Navigate to='/HomePage' />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
          />
          <Route path="/register" element={<Register />} />
          {/* <Route path='/Homepage' element={!loggedIn ? (<Login handleLogin={handleLogin} />)} */}
          
            {/* /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
