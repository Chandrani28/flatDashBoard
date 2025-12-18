import "./App.css";
import { useState } from 'react';
import ManagementDashboard from "./Components/ManagementDashboard";
import TowerForm from "./Components/TowerForm";
export default function App() {
  const [towerOpen, setTowerOpen] = useState(false);
  return (
    <>
      {/*<ManagementDashboard /> */}
      <button type='button' onClick={() => setTowerOpen(true)}>+ Add Tower</button>
      {towerOpen && <TowerForm/> }
    </>
    
  );
}












{
  /*export default function App() {
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
} */
}

{
  /*
  import { Routes, Route } from "react-router-dom";

import ManagementDashboard from "../../dashboard-fixed/src/Components/ManagementDashboard";

import "./App.css";
import LoginForm from "../../dashboard-fixed/src/Components/LoginForm";
import { Form } from "react-router-dom";
import FlatBoardPage from "../../dashboard-fixed/src/Components/FlatBoardPage";
import AddTower from "./Components/AddTower";
import AdminPage from "./Components/AdminPage";
export default function App() {
  return (
    <>
      <AdminPage />
      
        <AddTower />
        <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/management" element={<ManagementDashboard />} />
        <Route path="/flatboard" element={<FlatBoardPage />} />
      </Routes> 
    </>
  );
}


*/
}
