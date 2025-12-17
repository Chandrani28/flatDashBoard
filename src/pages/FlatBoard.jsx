import Table from "../Components/Table";
import data from "../Components/flatboard.json";

export default function Flatboard() {
  const getHeadings = () => {
    return Object.keys(data[0]);
  };
  
  return (
    <div className="card">
      <div className="card-body">
       
        <Table name="Flat Availability Board" theadData={getHeadings()} tbodyData={data} />
      </div>
    </div>
  );
}

























{
  /* 
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("/.flatboard.json")
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.FlatAvailabilityBoard[0]));
        setRecords(data.FlatAvailabilityBoard);
        
      });
  }, []);*/
}


{
  /*
  import Table from "../Components/Table";
  export default function FlatBoard() {
    const [tableData, setTableData] = useState([]);
  
    // Fetch live flat data from backend (AUTO UPDATED)
    useEffect(() => {
      const fetchFlats = () => {
        fetch("http://localhost:5000/api/flats")
          .then((res) => res.json())
          .then((data) => setTableData(data))
          .catch((err) => console.error("Flats fetch error:", err));
      };
  
      fetchFlats(); // initial load
      const interval = setInterval(fetchFlats, 2000); // auto refresh every 2s
  
      return () => clearInterval(interval);
    }, []);
  
    // Prevent Object.keys crash
    const theadData = tableData.length > 0 ? Object.keys(tableData[0]) : [];
  
    return (
      <>
        <Table
          name="Flat Availability Board"
          theadData={theadData}
          tbodyData={tableData}
        />
      </>
    );
  }
  */
}
