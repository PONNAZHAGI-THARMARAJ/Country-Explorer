import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >
          🌎 Country Explorer
        </Link>

        <div>
          <Link
            className="btn btn-outline-light me-2"
            to="/"
          >
            Home
          </Link>

          <Link
            className="btn btn-outline-warning me-2"
            to="/countries"
          >
            Countries
          </Link>

          <Link
            className="btn btn-outline-info"
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;