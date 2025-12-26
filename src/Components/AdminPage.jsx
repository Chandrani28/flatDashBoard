import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./towersdata.json";
import Table from "./Table";

export default function AdminPage() {
  const [adminmode, setAdminMode] = useState(true);

  

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
          <div>
            {!adminmode && (
              <div className="btn- container">
                <button
                  type="button"
                  class="btn btn-primary m-3 viewBtn"
                  onClick={() => setAdminMode(true)}
                >
                  View Mode
                </button>
                <button type="button" class="btn btn-primary" onClick={() =>}>
                  + Add Tower
                </button>
              </div>
            )}
          </div>
          {/* admin mode + search +logout */}
          <div className="d-flex align-items-center">
            {adminmode && (
              <button
                type="button"
                className="btn btn-primary adminBtn"
                data-bs-toggle="button"
                onClick={() => setAdminMode(false)}
              >
                Admin Mode
              </button>
            )}
            <form className="d-flex m-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
              />
            </form>
            <button className="btn" style={{ borderRadius: "8px" }}>
              <i className="bi bi-funnel fs-3"></i>
            </button>

            <Link to={"/login"}>
              <button className="btn ">
                <i className="bi bi-box-arrow-right fs-3"></i>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="card-group">
        <div className="card">
          <div className="card-body ">
            <h5 className="card-title text-center">{data.name}</h5>
            <div className="d-flex gap-2 mb-3">
              {data.columns.map((eachColumn, index) => (
                <div key={index}>
                  {eachColumn.type}
                  <br />
                  <small>{eachColumn.area}</small>
                </div>
              ))}
            </div>
            <div className="d-flex gap-2 ">
              {data.columns.map((eachColumn, index) => (
                <div key={index} className="d-flex flex-column">
                  {eachColumn.flats.map((eachFlat, index) => (
                    <button>{eachFlat.flatNo}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
