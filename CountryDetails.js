import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    loadCountry();
  }, [name]);

  const loadCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}`
    );

    const data = await response.json();

    console.log("Country Details:", data[0]);

    setCountry(data[0]);
  };

  if (!country) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  const lat = country.latlng?.[0];
  const lng = country.latlng?.[1];

  return (
    <div
      className="container mt-4"
      style={{
        paddingTop: "70px",
        paddingBottom: "70px",
      }}
    >
      {/* Back Button */}
      <Link
        to="/countries"
        className="btn btn-primary mb-3"
      >
        ← Back to Countries
      </Link>

      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">
          {country.name.common}
        </h2>

        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="img-fluid border"
            />
          </div>

          <div className="col-md-8">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Official Name</th>
                  <td>{country.name.official}</td>
                </tr>

                <tr>
                  <th>Capital</th>
                  <td>{country.capital?.[0]}</td>
                </tr>

                <tr>
                  <th>Region</th>
                  <td>{country.region}</td>
                </tr>

                <tr>
                  <th>Country Code</th>
                  <td>{country.cca2}</td>
                </tr>

                <tr>
                  <th>Population</th>
                  <td>{country.population.toLocaleString()}</td>
                </tr>

                <tr>
                  <th>Area</th>
                  <td>{country.area} km²</td>
                </tr>

                <tr>
                  <th>Time Zone</th>
                  <td>{country.timezones?.[0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Section */}
        <h4 className="mt-4 mb-3 text-success">
          📍 Country Location
        </h4>

        <iframe
          title="country-map"
          width="100%"
          height="400"
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=5&output=embed`}
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}

export default CountryDetails;