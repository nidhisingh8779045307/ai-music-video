import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>Dashboard</h1>

        <p style={{ marginTop: "10px" }}>
          Welcome to AI Music Video Studio
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Project 1</h3>
            <p>Epic Rock Song</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Project 2</h3>
            <p>LoFi Music Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;