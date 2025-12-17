import data from "../Components/statistics.json";
import Table from "../Components/Table.jsx";
import Card from "../Components/Card.jsx";
export default function Statistics() {
  const cardArr = data.summaryCards;
  const squareFootage = data.squareFootage;
  const facingBreakdown = data.facingBreakdown;
  console.log(typeof cardArr);
  const getHeadings = () => {
    return Object.keys(data.towerBreakdown[0]);
  };
  return (
    <div>
      <div className="row g-4 mt-3">
        {cardArr.map((eachCard, index) => (
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              title={eachCard.title}
              icon={eachCard.icon}
              value={eachCard.value}
              subtitle={eachCard.subtitle}
            />
          </div>
        ))}
      </div>
      <div className="row g-4 mt-4">
        <div className="col-12 col-md-6">
          <Card title="Total Square Footage">
            <h4>{squareFootage.total} sq.ft</h4>
            <p>Available: {squareFootage.available} sq.ft</p>
            <p>Sold: {squareFootage.sold} sq.ft</p>
            <p>Blocked: {squareFootage.blocked} sq.ft</p>
          </Card>
        </div>
        <div className="col-12 col-md-6">
          <Card title="Facing-wise Breakdown">
            {facingBreakdown.map((eachValue, index) => (
              <div key={index} className="mb-3">
                <b>{eachValue.facing +" facing"}</b> ({eachValue.totalFlats +" flats"})
                <div className="d-flex gap-4">
                  <span>Avail: {eachValue.available}</span>
                  <span>Sold: {eachValue.sold}</span>
                  <span>Block: {eachValue.blocked}</span>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <Table
        name="Tower-wise Breakdown"
        theadData={getHeadings()}
        tbodyData={data.towerBreakdown}
      />
    </div>
  );
}

{
  /*
  import { useEffect, useState } from "react";

import Table from "../Components/Table";

function StatCard({ title, value, subtitle, icon, children }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0">{title}</h6>
          {icon && <i className={icon}></i>}
        </div>

        {subtitle && (
          <small className="text-muted d-block mb-2">{subtitle}</small>
        )}

        {children}
      </div>
    </div>
  );
}




export default function Statistics() {
  const [stats, setStats] = useState(null);

  //  Fetch statistics from backend (AUTO UPDATED)
  useEffect(() => {
    const fetchStats = () => {
      fetch("http://localhost:5000/api/statistics")
        .then((res) => res.json())
        .then((data) => setStats(data))
        .catch((err) => console.error("Stats fetch error:", err));
    };

    fetchStats(); // initial load
    const interval = setInterval(fetchStats, 2000); // auto refresh every 2s

    return () => clearInterval(interval);
  }, []);

  // Wait until backend responds
  if (!stats) return <p>Loading statistics...</p>;

  const { summaryCards, squareFootage, facingBreakdown, towerBreakdown } =
    stats;

  const towerTableData = Object.entries(towerBreakdown).map(
    ([tower, data]) => ({
      tower,
      total: data.total,
      available: data.available,
      sold: data.sold,
      blocked: data.blocked,
    })
  );

  return (
    <>
      
      <div className="row g-4 mt-3">
        <div className="col-12 col-md-6 col-lg-3">
          <StatCard
            title="Total Flats"
            icon="bi bi-house-door fs-3"
            value={summaryCards.total}
            subtitle="Total Units "
            />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <StatCard
            title="Available"
            icon="bi bi-check-circle fs-3"
            value={summaryCards.available}
            subtitle={summaryCards.availablePercent}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <StatCard
            title="Sold"
            icon="bi bi-bag-check fs-3"
            value={summaryCards.sold}
            subtitle={summaryCards.soldPercent}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <StatCard
            title="Blocked"
            value={summaryCards.blocked}
            icon="bi bi-exclamation-circle fs-3"
            subtitle={summaryCards.blockedPercent}
          />
        </div>
      </div>
      
      <div className="row g-4 mt-4">
        <div className="col-12 col-md-6">
          <StatCard title="Total Square Footage">
            <h4>{squareFootage.total} sq.ft</h4>
            <p>Available: {squareFootage.available} sq.ft</p>
            <p>Sold: {squareFootage.sold} sq.ft</p>
            <p>Blocked: {squareFootage.blocked} sq.ft</p>
          </StatCard>
        </div>

        <div className="col-12 col-md-6">
          <StatCard title="Facing-wise Breakdown">
            {Object.entries(facingBreakdown)
              .filter(([face]) =>
                ["North", "East", "North-East"].includes(face)
              )
              .map(([face, data], i) => (
                <div key={i} className="mb-3">
                  <b>{face}</b> ({data.totalFlats})
                  <div className="d-flex gap-4">
                    <span>Avail: {data.available}</span>
                    <span>Sold: {data.sold}</span>
                    <span>Block: {data.blocked}</span>
                  </div>
                </div>
              ))}
          </StatCard>
        </div>
      </div>
      

      <Table
        name="Tower-wise Breakdown"
        theadData={
          towerTableData.length > 0 ? Object.keys(towerTableData[0]) : []
        }
        tbodyData={towerTableData}
      />
    </>
  );
}
*/
}
