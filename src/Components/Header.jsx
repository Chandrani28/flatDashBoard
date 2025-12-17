import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="bi bi-bar-chart-line-fill fs-2 me-3" />
            <div>
              <h4 className="mb-0">Management Dashboard</h4>
              <small className="text-muted">
                Project Statistics &amp; Insights
              </small>
            </div>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="btn btn-outline-dark">Logout</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
