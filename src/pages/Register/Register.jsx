import React from "react";
import './Register.scss'

const Register = () => {
  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <div className="policy">
          <input type="checkbox" name="policy" />
          <h3>Policy</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Register now" />
        </div>
      </form>
    </div>
  );
};

export default Register;
