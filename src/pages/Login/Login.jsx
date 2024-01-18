import React, { useEffect, useRef, useState } from "react";
import "./Login.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login_URL = "/users/login";

const Login = () => {
  const { setAuth, dataAction } = useAuth(); // global auth

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMessage("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        Login_URL,
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.data;
      const user = { username, password, accessToken };
      dataAction(user);
      setUsername("");
      setPassword("");

      // if successful redirect to home page
      navigate(from, { replace: true });
    } catch (err) {
      let message = "";
      if (!err.response) message = "No response from the server";
      else if (err.response?.data) message = err.response.data.errors;
      else message = "login failed";
      setErrMessage(message);
    }
  };

  return (
    <div className="container-login">
      <section>
        {/* <p ref={errRef} className={errMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errMessage}</p> */}
        <div className="wrapper">
          <h2>Login</h2>
          {errMessage ?? <p>{errMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="input-box button">
              <input type="submit" value="Login" />
            </div>
            <p>
              Need an Account? &nbsp;
              <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
