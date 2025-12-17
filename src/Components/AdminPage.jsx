import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/*icon+title */}
          <div className="d-flex align-items-center">
            <i className="bi bi-houses fs-2  me-3 mb-2" />
            <div>
              <h5 style={{ fontWeight: "bold" }}>
                Flat Availability Wall Board
              </h5>
            </div>
          </div>
          {/*middle 3 buttons */}
          <div className="d-flex align-items-center">
            <button
              style={{
                width: "100px",
                backgroundColor: "white",
                borderColor: "rgba(114, 221, 139, 1)",
                borderRadius: "10px",
                borderWidth: "2px",
                border: "bold",
              }}
            >
              <b>Available</b>
            </button>
            <button
              style={{
                width: "100px",
                backgroundColor: "white",
                borderColor: "rgba(235, 206, 111, 1)",
                marginLeft: "10px",
                borderRadius: "10px",
                borderWidth: "2px",
                border: "bold",
              }}
            >
              <b>Sold</b>
            </button>
            <button
              style={{
                width: "100px",
                backgroundColor: "white",
                borderColor: "rgba(229, 160, 166, 1)",
                marginLeft: "10px",
                borderRadius: "10px",
                borderWidth: "2px",
                border: "bold",
              }}
            >
              <b>Blocked</b>
            </button>
          </div>
          {/* admin mode + search +logout */}
          <div className="d-flex align-items-center">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="button"
            >
              Admin Mode
            </button>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search..."
              />
            </form>
            <button className="btn" style={{ borderRadius: "8px" }}>
              <i className="bi bi-funnel fs-3"></i>
            </button>

            <Link to={"/login"}>
              <button className="btn ">
                <i class="bi bi-box-arrow-right fs-3"></i>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="card">
          <h5 class="card-header">Tower A</h5>
          <div class="card-body">
            
          </div>
        </div>
      </div>
    </div>
  );
}
