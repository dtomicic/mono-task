import React from "react";
import { observer } from "mobx-react";
import tokenStore from "../../stores/TokenStore";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";
import "./style.css";
import SuccessMessageBox from "../SuccessMessageBox/SuccessMessageBox";

function AuthForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.append("username", username);
    data.append("password", password);
    data.append("grant_type", "password");
    const response = await fetch(
      "https://api.baasic.com/beta/vehicle-application/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      },
    );

    const responseData = await response.json();
    if (response.status === 200) {
      tokenStore.setToken(responseData.access_token);
      localStorage.setItem("authToken", responseData.access_token);
      setUsername("");
      setPassword("");
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="auth-form">
      {error && <ErrorMessageBox message="Username or password incorrect" />}
      {success && <SuccessMessageBox message="Authentication successful" />}
      <form onSubmit={handleSubmit} className="form-element">
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit">Authenticate</button>
      </form>
    </div>
  );
}

export default observer(AuthForm);
