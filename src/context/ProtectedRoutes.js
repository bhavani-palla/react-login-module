import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../components/login/Login";

/**
 * Protected router is to check if user is logged in or not to render home page
 */

let loggedIn = false;

const useAuth = () => {
  return loggedIn;
};

/**
 * Update user login state, set to false if user logged out or true if user logged in
 */
export const updateLoggedIn = () => {
  console.log("updating logged in");

  loggedIn = !loggedIn;
};

/**
 *
 * Check if user is logged in, if so render children '<Outlet>' else navigate to login page
 * 
 */
const ProtectedRoutes = () => {
  return useAuth() ? <Outlet /> : <Navigate to={"/login"}></Navigate>;
};

export default ProtectedRoutes;
