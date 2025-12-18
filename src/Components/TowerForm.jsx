import { useState, useEffect } from "react";
export default function TowerForm() {
  const [column, setColumn] = useState([]); // for BHK types
  const [formData, setFormData] = useState({}); // store each form data
  
  //values for dropdown
  const options = [
    { id: "1", label: "type1", value: "2BHK" },
    { id: "2", label: "type2", value: "3BHK" },
    { id: "3", label: "type3", value: "4BHK" },
    { id: "4", label: "type4", value: "5BHK" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleCancel = (e) => {
    //setCancel(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //not to reload
    console.log("Submitted JSON Data: ", formData);
  };

  // by default 4 columns needed to display upon page loading
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
            <select class="form-select" name="flat" onChange={handleChange}>
              {options.map((option) => (
                <option>{option.value}</option>
              ))}
            </select>
          </div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                name="sq.ft"
                placeholder="Sq.ft (e.g., 2800)"
                onChange={handleChange}
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
      <div>
          <button t>+Add tower</button>
      <div class="card w-75 mb-3 mt-6">
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <input
              class="form-control mb-3 "
              name="towername"
              placeholder="Enter tower name (e.g., Tower E)"
              onChange={handleChange}
            />
            <input
              class="form-control mb-3 "
              name="no.oftowers"
              type="number"
              defaultValue={100}
              onChange={handleChange}
            />
            <h5>Column Configuration (BHK Types)</h5>
            <div>
              {/* to render new column when addcolumn button is clicked */}
              {column.map((i, index) => {
                return i;
              })}
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
                onClick={() => handleCancel(true)}
                style={{
                  marginRight: "20px",
                  paddingLeft: "120px",
                  paddingRight: "120px",
                }}
              >
                Cancel
              </button>
              <button
                class="btn btn-secondary btn-lg "
                type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}
