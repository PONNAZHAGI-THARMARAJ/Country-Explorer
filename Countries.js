import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,cca2,cca3,region"
    );

    const data = await response.json();
    setCountries(data);
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      country.cca2
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      country.capital?.[0]
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">
        🌍 Countries List
      </h1>

      <input
        type="text"
        className="form-control form-control-lg mb-4"
        placeholder="Search by Name, Capital, Code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredCountries.map((country) => (
          <div className="col-md-3 mb-4" key={country.cca3}>
            <div
              className="card shadow-lg border-0 h-100"
              style={{
                transition: "0.3s",
                borderRadius: "15px",
              }}
            >
              <Link
                to={`/country/${country.name.common}`}
              >
                <img
                  src={country.flags.png}
                  alt=""
                  className="card-img-top"
                  height="180"
                />
              </Link>

              <div className="card-body text-center">
                <Link
                  to={`/country/${country.name.common}`}
                  className="text-decoration-none"
                >
                  <h5 className="text-dark fw-bold">
                    {country.name.common}
                  </h5>
                </Link>

                <p>
                  <b>Capital:</b>{" "}
                  {country.capital?.[0]}
                </p>

                <p>
                  <b>Region:</b> {country.region}
                </p>

                <p>
                  <b>Code:</b> {country.cca2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;