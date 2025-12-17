import Header from "./Header";
import Tabs from "./Tabs";
import Statistics from "../pages/Statistics";
import FlatBoard from "../pages/FlatBoard";
import { useState } from "react";


export default function ManagementDashboard() {
  const [showtab, setshowtab] = useState(1);
  const handletab = (e) => {
    setshowtab(e);
  };
  return (
    <div>
      <Header />
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={showtab === 1 ? "nav-link active" : "nav-link"}
            onClick={() => handletab(1)}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Statistics
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={showtab === 2 ? "nav-link active" : "nav-link"}
            onClick={() => handletab(2)}
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            FlatBoard
          </button>
        </li>
      </ul>
      <div class="tab-content active ">
        <div class={showtab === 1 ? "tab-pane active" : "tab-pane"}>
          <Statistics />
        </div>
        <div class={showtab === 2 ? "tab-pane active" : "tab-pane"}>
          <FlatBoard />
        </div>
      </div>
    </div>
  );
}



















































{
  /*
  export default function ManagementDashboard() {
    const [activeTab, setActiveTab] = useState("statistics");
    const [flats, setFlats] = useState([]);
  
    const changeTab = (tabName) => {
      setActiveTab(tabName);
    };
  
   
    return (
      <div>
        <Header />
        <Tabs changeTab={changeTab} activeTab={activeTab} />
  
        <div style={{ padding: 16 }}>
          {activeTab === "statistics" && <Statistics flats={flats} />}
  
          {activeTab === "flatboard" && <FlatBoard />}
        </div>
      </div>
    );
  }
  */
}


{
  /*// ✅ FETCH LIVE FLATS FROM BACKEND
  useEffect(() => {
    const fetchFlats = () => {
      fetch("http://localhost:5000/api/flats")
        .then((res) => res.json())
        .then((data) => setFlats(data))
        .catch((err) => console.error("Fetch flats error:", err));
    };

    fetchFlats(); // initial load
    const interval = setInterval(fetchFlats, 2000); // auto refresh

    return () => clearInterval(interval);
  }, []);*/
}
