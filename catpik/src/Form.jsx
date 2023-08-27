import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <form>
        <div className="form-wrapper">
          <label>Username</label>
          <input placeholder="Enter Username" />

          <label>Password</label>
          <input placeholder="Enter Password" />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
