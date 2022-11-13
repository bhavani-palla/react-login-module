import React from 'react';
import { updateLoggedIn } from '../../context/ProtectedRoutes';
import './homepage.css';


const Homepage = () => {
    const handleLogout = (e) => {
        e.preventDefault();
        // handleLogin(false)
        updateLoggedIn()
    }
  return (
      <div className='content'>
          <div className='homepage'>
              <h1>WELCOME</h1>
              <form>
                  <button className='submit-btn' type='submit' onSubmit={handleLogout}>Logout</button>
              </form>

          </div>
   </div>
  )
}

export default Homepage