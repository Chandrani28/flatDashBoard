import { useState } from "react";
import "./Login.css";
import ManagementDashboard from "./ManagementDashboard";
import AdminPage from "./AdminPage";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // To Validate username and password
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
      return;
    } else if (
      formData.username === "admin" &&
      formData.password === "admin123"
    ) {
      navigate("/admin");

      return;
    } else if (
      formData.username === "management" &&
      formData.password === "management123"
    ) {
      navigate("/management");
      return;
    } else {
      setError("Invalid username and password");
      return;
    }
  };
  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <i class="bi bi-house-door fs-3"></i>
        <h2 className="mb-3">Login Form</h2>
        <p>Flat Updates Management System</p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div className="form-group mb-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2 mb-2">
              Login
            </button>

            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              &larr; Back to flatboard
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
