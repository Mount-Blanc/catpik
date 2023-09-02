import React from "react";
import './Form.css';
import { useState } from "react";
import axios from 'axios'
function Login() {
const [username,setusername]=useState()
const [password,setpassword]=useState()

  const handleSubmit  =async (e) => {
    e.preventDefault();

    const userData= {username,password}
    console.log(userData)

    try {
      const response = await axios.post('http://localhost:3000/login', userData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }


  };


const handleUsername = (event) => {
  setusername(event.target.value)
}
const handlePassword = (event) => {
  setpassword(event.target.value)
}

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input onChange={handleUsername} value={username} id="username" placeholder="Enter Username" />

          <label htmlFor="password">Password</label>
          <input onChange={handlePassword} value={password} id="password" placeholder="Enter Password" />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
