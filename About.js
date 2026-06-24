function About() {
  return (
    <div
      className="container mt-5"
      style={{ minHeight: "68vh" }}
    >
      <div
        className="card shadow p-4 text-center"
        style={{ borderRadius: "15px" }}
      >
        <h2 className="text-primary mb-3">
          🌍 About Country Explorer
        </h2>

        <p>
          Country Explorer is a React application that displays
          country information using the REST Countries API.
        </p>

        <h5 className="mt-3 text-success">Features</h5>
        <p>
          View countries, search by name, capital, or code,
          and see detailed country information.
        </p>

        <div className="alert alert-info mt-3">
          Explore the world with a single click 🌎
        </div>
      </div>
    </div>
  );
}

export default About;