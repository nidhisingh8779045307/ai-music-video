import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#111827",
        padding: "20px",
      }}
    >
      <h2>🎵 AI Studio</h2>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create Project</Link>
        <Link to="/studio">Studio</Link>
      </div>
    </div>
  );
}

export default Sidebar;