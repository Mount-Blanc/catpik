import React from 'react'
import "./Form.css"
function Register() {
  return (
    <div className="form-container">
      <form>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input id="username" placeholder="Choose Username..." />

          <label htmlFor="password">Password</label>
          <input id="password" placeholder="Choose Password..." />

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register