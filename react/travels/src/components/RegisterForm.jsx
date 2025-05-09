import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register/", form);
      setMessage("Registration Successful");
    } catch (error) {
      const errorMsg =
        error.response?.data?.username?.[0] ||
        error.message ||
        "Registration Failed";
      setMessage("Registration Failed: " + errorMsg);
    }
  };

  return (
    <div>
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
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            type="email"
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
          <button type="submit">Register</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
