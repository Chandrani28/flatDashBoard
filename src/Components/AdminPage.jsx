import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import data from "./towersdata.json";
import AddTower from "./AddTower";

export default function AdminPage() {
  const [adminmode, setAdminMode] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const TowerData = data.towerData;

  const headings = [
    TowerData.map((eachData, i) =>
      eachData.columns.map((elt, i) => {
        return elt.type;
      })
    ),
  ];
  console.log(headings);

  const datas = [
    TowerData.map((eachData, i) =>
      eachData.columns.map((elt, i) =>
        elt.flats.map((eachelt, i) => {
          return eachelt.flatNo;
        })
      )
    ),
  ];
  console.log(datas);
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
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => setIsVisible(true)}
                >
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
      {/* Add Tower Component render when "+ Add Tower Button is clicked" */}
      {isVisible && <AddTower setIsVisible={setIsVisible} />}
      <div className="row row-cols-4 justify-content-around ">
        {TowerData.map((eachName, i) => (
          <div className="col" style={{ border: "solid" }}>
            <h3 className=" d-flex justify-content-around">{eachName.name}</h3>

            <div class="row">
              {eachName.columns.map((eachValue, i) => (
                <div class="col mb-2">
                  <div className="badge text-bg-secondary text-wrap mb-2">
                    <h6>{eachValue.type}</h6>
                    <p>{eachValue.area}</p>
                  </div>

                  <div>
                    {eachValue.flats.map((eachFlat, i) => (
                      <div>
                        <button>{eachFlat.flatNumber}</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* 
  
  <Table name="Tower A" theadData={headings} tbodyData={datas} />
  <table className="table table-hover mb-0">
    
    <tbody>
          <tr>
            {datas.map((key, index) => {
              return (
                <td>
                  <button>{key}</button>
                </td>
              );
            })}
          </tr>
       
    </tbody>
  </table>

  
  */
}

{
  /*{data.towerNames.map((eachName, i) => (
  <div class="container">
    <h3 className=" d-flex justify-content-center">{eachName.name}</h3>
    {data.columns.map((eachValue, i) => (
      <div className="d-flex row justify-content-around align-items-center">
        <div>
          <h4 class="row">
            {eachValue.type} {eachValue.area}
          </h4>
          <div class="col">
            {eachValue.flats.map((eachFlat, i) => (
              <div>
                <button>{eachFlat.flatNo}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
))}
{/*<div class="container">
  <h3 className=" d-flex justify-content-center">Tower A</h3>
  <div class="d-flex justify-content-around align-items-center">
    <div>
      <h3>4BHK</h3>
      <div class="grid text-center">
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
      </div>
    </div>
    <div>
      <h3>3BHK</h3>
      <div class="grid text-center">
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
      </div>
    </div>
    <div>
      <h3>2BHK</h3>
      <div class="grid text-center">
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
      </div>
    </div>
    <div>
      <h3>1BHK</h3>
      <div class="grid text-center">
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>1</button>
        </div>
      </div>
    </div>
  </div>
</div>*/
}

{
  /*
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
      </div> */
}
