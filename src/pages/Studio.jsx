import Sidebar from "../components/Sidebar";

function Studio() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>Studio</h1>

        <div
          style={{
            marginTop: "20px",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Song Preview</h3>

          <audio controls style={{ width: "100%" }}>
            <source src="" />
          </audio>
        </div>

        <div
          style={{
            marginTop: "20px",
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Video Preview</h3>

          <video controls width="100%">
            <source src="" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Studio;