import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "./logogreen.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "ishitaamod@gmail.com" && password === "123") {
      console.log("logged in");
      history("/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="tagline">We are Electric</div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type={"email"}
            placeholder={"E-mail"}
            autoComplete="username"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type={"password"}
            autoComplete="current-password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
