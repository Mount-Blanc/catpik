import React from 'react'
import "./Form.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
const [username, setusername] = useState()
const [password, setpassword] = useState()

const navigate = useNavigate();

  const handleSubmit  =async (e) => {
    e.preventDefault();

    const userData = { username, password };
    console.log (userData)
    try {
      const response = await axios.post('http://localhost:3000/register', userData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }


  };

  const handleUsernameChange = (e) => {
    setusername(e.target.value)
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
  };

  const handleRedirect= () => {
    navigate('/dashboard', { replace: true });
    }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input onChange={handleUsernameChange} id="username" placeholder="Choose Username..." />

          <label htmlFor="password">Password</label>
          <input onChange={handlePasswordChange} id="password" placeholder="Choose Password..." />

          <button onClick={handleRedirect} type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register