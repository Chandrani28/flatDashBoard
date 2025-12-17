export default function Table({ name, theadData, tbodyData }) {
  
  return (
    <div className="card mt-4">
      <div className="card-body p-0">
        <h5 style={{ fontWeight: "bold" }}>{name}</h5>
        <div className="table-scroll-container">
          <table className="table table-hover mb-0">
            <thead
              className="sticky-head"
              style={{ position: "sticky", top: 0 }}
            >
              <tr>
                {theadData.map((heading) => {
                  return <th key={heading}>{heading}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tbodyData.map((row, index) => {
                return (
                  <tr key={index}>
                    {theadData.map((key, index) => {
                      return <td key={row[key]}>{row[key]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
