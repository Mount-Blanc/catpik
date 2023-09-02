import React from "react";
import './Form.css';

function Login() {

  const handleSubmit  =async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/login', userData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }


  };
  return (
    <div className="form-container">
      <form>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="Enter Username" />

          <label htmlFor="password">Password</label>
          <input id="password" placeholder="Enter Password" />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
