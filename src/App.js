import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import ProtectedRoutes from "./context/ProtectedRoutes";

/**
 *
 * Application component with Routes to different paths
 * @returns
 */

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/**
         * Public routes
         */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/**
         * Home page is protected
         */}

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
