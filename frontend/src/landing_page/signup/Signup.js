import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/signup", formData);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      setMessage(res.data.message);

      // Redirect to Dashboard on port 3000 after successful signup
      window.location.href = "http://localhost:3000";
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="container p-5 text-center" style={{ marginTop: "30px" }}>
      <h2>Open a Zerodha Account</h2>
      <p className="text-muted mb-4">Modern platform for stock trading and investments</p>

      {message && <div className="alert alert-info w-50 mx-auto">{message}</div>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "380px", margin: "0 auto" }}>
        <div className="mb-3 text-start">
          <label className="form-label text-muted">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label text-muted">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4 text-start">
          <label className="form-label text-muted">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a strong password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;