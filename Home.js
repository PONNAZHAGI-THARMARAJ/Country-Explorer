import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        minHeight: "75vh",
        background:
          "linear-gradient(to right, #4facfe, #00f2fe)"
      }}
    >
      <div>
        <h1 className="display-2 fw-bold">
          🌎 Country Explorer
        </h1>

        <p className="lead mb-4">
          Discover Countries Around The World
        </p>

        <Link
          to="/countries"
          className="btn btn-warning btn-lg px-4"
        >
           Countries
        </Link>
      </div>
    </div>
  );
}

export default Home;