import React from "react";
import './Form.css'
function Form() {
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

export default Form;
