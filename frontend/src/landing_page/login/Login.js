import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/login", formData);

      if (res.data.token) {
        // Store JWT token locally
        localStorage.setItem("token", res.data.token);
      }

      setMessage(res.data.message);

      // Redirect to Dashboard
      window.location.href = "http://localhost:3000";
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="container p-5 text-center">
      <h2>Login to Zerodha</h2>
      <p className="text-muted">Enter your account credentials to access the dashboard</p>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;