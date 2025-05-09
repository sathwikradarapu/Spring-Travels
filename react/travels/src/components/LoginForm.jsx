import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        form
      );
      setMessage("Login Successful");
      if (onLogin) {
        onLogin(response.data.token, response.data.user_id);
      }
    } catch (error) {
      setMessage("Login Failed");
    }
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={form.username}
            type="text"
            onChange={handleChange}
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={form.password}
            type="password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
