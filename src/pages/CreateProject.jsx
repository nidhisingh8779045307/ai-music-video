import Sidebar from "../components/Sidebar";

function CreateProject() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>Create Project</h1>

        <form
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "700px",
          }}
        >
          <input
            type="text"
            placeholder="Project Name"
            style={{
              padding: "12px",
            }}
          />

          <input
            type="text"
            placeholder="Music Style"
            style={{
              padding: "12px",
            }}
          />

          <textarea
            rows="6"
            placeholder="Lyrics"
            style={{
              padding: "12px",
            }}
          />

          <textarea
            rows="6"
            placeholder="Video Script"
            style={{
              padding: "12px",
            }}
          />

          <button
            style={{
              padding: "12px",
            }}
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;