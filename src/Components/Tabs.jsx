export default function Tabs({ changeTab, activeTab }) {
  return (
    <div className="d-flex gap-3 p-3 border-bottom">
      <button
        className={`btn ${
          activeTab === "statistics" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => changeTab("statistics")}
      >
        Statistics
      </button>

      <button
        className={`btn ${
          activeTab === "flatboard" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => changeTab("flatboard")}
      >
        Flat Board
      </button>
      {/*<ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Statistics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FlatBoard
          </a>
        </li>
        
      </ul>*/}
    </div>
  );
}
