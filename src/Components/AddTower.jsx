import { useState, useEffect } from "react";

export default function AddTower(props) {
  const [column, setColumn] = useState([]);
  const [Cancel, setCancel] = useState(false);

  const handleCancel = (e) => {
    setCancel(e);
  };
  useEffect(() => {
    const newcolumn = [];
    for (let i = 0; i < 4; i++) {
      newcolumn.push(Tower(i));
      setColumn(newcolumn);
    }
  }, []);
  const Tower = (id) => {
    return (
      <>
        <div class="row ">
          <div class="col-6">
            <select class="form-select" aria-label="Default select example">
              <option selected>2BHK</option>
              <option value="1">3BHK</option>
              <option value="2">4BHK</option>
              <option value="3">5BHK</option>
            </select>
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Sq.ft (e.g., 2800)"
              ></input>
              <button
                onClick={() => deleteColumn(id)}
                style={{
                  padding: "10px",
                  width: "35px",
                  color: "white",
                  backgroundColor: "rgba(216, 6, 6, 1)",
                  border: "none",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                &#120;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const AddColumn = () => {
    const newColumn = [...column, Tower(column.length + 1)];
    setColumn(newColumn);
  };
  const deleteColumn = (Columnid) => {
    const newcolumn = column.filter((id) => {
      if (id === Columnid) {
        return false;
      } else {
        return true;
      }
    });
    setColumn(newcolumn);
  };

  return (
    <div class="card w-75 mb-3 mt-3">
      <div class="card-body">
        <h5 class="card-title" style={{ fontWeight: "bold" }}>
          Add New Tower
        </h5>

        <input
          class="form-control mb-3 towername"
          placeholder="Enter tower name (e.g., Tower E)"
        />
        <input
          class="form-control mb-3 no.oftowers"
          type="number"
          defaultValue={100}
        />

        <h5>Column Configuration (BHK Types)</h5>

        <div>
          {column.map((i) => {
            return i;
          })}
          {/* to render new column when addcolumn button is clicked */}
        </div>

        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={AddColumn}
          style={{
            backgroundColor: "rgba(224, 224, 224, 1)",
            padding: "10px",
            border: "none",
            borderRadius: "7px",
            marginBottom: "10px",
            color: "black",
          }}
        >
          +Add Column
        </button>
        <div>
          <button
            type="button"
            class="btn btn-secondary btn-lg "
            onClick={() => props.setIsVisible(false)}
            style={{
              marginRight: "20px",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
          >
            Cancel
          </button>
          <button
            type="button "
            class="btn btn-secondary btn-lg "
            style={{
              marginRight: "20px",
              paddingLeft: "120px",
              paddingRight: "120px",
              backgroundColor: "rgba(218, 121, 91, 1)",
            }}
          >
            Add Tower
          </button>
        </div>
      </div>
    </div>
  );
}
