import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <h1>AI Music Video Studio</h1>

      <p style={{marginTop:"10px"}}>
        Generate Music + Video using AI
      </p>

      <Link to="/dashboard">
        <button
          style={{
            marginTop:"20px",
            padding:"12px 24px"
          }}
        >
          Start Creating
        </button>
      </Link>
    </div>
  );
}

export default Home;