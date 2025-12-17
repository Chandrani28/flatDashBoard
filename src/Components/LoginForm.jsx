
















































/*
  import "./login.css";
import { useRef, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
 


export default function LoginForm() {

  const navigate = useNavigate();
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    let userName = nameRef.current.value;
    let password = passRef.current.value;
    //Error Message if inputs are invalid -> we should maintain states
    if (userName.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password");
      return;
    }
    setError("");

    if (userName === "admin" && password === "admin123") {
      navigate("/admin");
    } else if (userName === "management" && password === "management123") {
      navigate("/management");
    }
    else {
      setError("Invalid username or password");
    }
  };

  
  return (
    <div className="form-container">
      <form onSubmit={validateForm}>
        <div className="form-card">
          <i
            className="bi bi-house-door fs-1"
            style={{ color: "#ee5e32ff" }}
          ></i>
          <h2>Login</h2>
          <p className="subtitle">Flat Updates Management System</p>
          
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Enter username"
              ref={nameRef}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <div className="form-item">
              <input
                className="form-control"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                ref={passRef}
              />
              
            </div>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
          <div>
            <Link
              to={"/flatboard"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="back-link">&larr; Back to Flat Board</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
*/
