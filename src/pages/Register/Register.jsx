import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { isHavingSpecialChars } from "../../uitls/general-helper";
import { registerUserService, isUserExistService } from "../../api/user-api";

const Register = () => {
  const navigate = useNavigate();

  const errObj = {
    usernameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  };

  const [isUserAvailable, setIsUserAvailable] = useState(true);

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState(errObj);

  const handleSubmit = async (e) => {
    setIsUserAvailable(true);
    e.preventDefault();
    try {
      if (
        !errors.usernameErr &&
        !errors.passwordErr &&
        !errors.confirmPasswordErr
      ) {
        const userAvailable = await isUserExistService(user.username);
        if (Boolean(userAvailable) === true) setIsUserAvailable(false);
        else {
          // create new user
          await registerUserService(user.name, user.username, user.password);
          navigate("/login", { replace: true });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        setUser({ ...user, name: value });
        break;
      case "username":
        setUser({ ...user, username: value });
        if (
          isHavingSpecialChars(value) ||
          /\s/g.test(value) ||
          value.length < 8
        )
          setErrors({
            ...errors,
            usernameErr: "Special chars is not allowed and min 8 chars",
          });
        else setErrors({ ...errors, usernameErr: "" });
        break;
      case "password":
        setUser({ ...user, password: value });
        if (value.length < 8) {
          setErrors({
            ...errors,
            passwordErr: "Password min 8 chars (contains uppercase and number)",
          });
        } else {
          setErrors({
            ...errors,
            passwordErr: "",
          });
        }
        break;
      case "confirmPassword":
        setUser({ ...user, confirmPassword: value });
        if (value !== user.password)
          setErrors({ ...errors, confirmPasswordErr: "Password is not match" });
        else {
          setErrors({ ...errors, confirmPasswordErr: "" });
        }
        break;
      default:
      // DO nothing
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      {!isUserAvailable ? <p>Username already taken </p> : null}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input
            className="input-field-text"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => handleInput("name", e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input
            className="input-field-text"
            type="text"
            name="name"
            placeholder="Enter your username"
            onChange={(e) => handleInput("username", e.target.value)}
            required
          />
          {errors?.usernameErr ?? (
            <span className="span-error">{errors.usernameErr}</span>
          )}
        </div>
        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            className="input-field-text"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => handleInput("password", e.target.value)}
            required
          />
          {errors?.passwordErr ?? (
            <span className="span-error">{errors.passwordErr}</span>
          )}
        </div>
        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            className="input-field-text"
            type="password"
            name="confirm_password"
            placeholder="Enter your confirm password"
            onChange={(e) => handleInput("confirmPassword", e.target.value)}
            required
          />
          {errors?.confirmPasswordErr ?? (
            <span className="span-error">{errors.confirmPasswordErr}</span>
          )}
        </div>
        <button type="submit" className="btn-register">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
