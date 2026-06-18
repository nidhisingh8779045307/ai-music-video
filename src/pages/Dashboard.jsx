import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{padding:"30px"}}>
      <h1>Dashboard</h1>

      <Link to="/create">
        <button
          style={{
            marginTop:"20px",
            padding:"10px 20px"
          }}
        >
          New Project
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;