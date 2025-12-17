export default function Card({ title, value, subtitle, icon, children }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6>{title}</h6>
          <i className={icon}></i>
        </div>

        <h3 className="fw-bold mb-1">{value}</h3>
        <small className="text-muted d-block mb-2">{subtitle}</small>

        {children}
      </div>
    </div>
  );
}
