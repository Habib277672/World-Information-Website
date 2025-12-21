import { NavLink } from "react-router-dom";
export const CountryCard = ({ curCountry }) => {
  const { id, name, flags, population, region, capital } = curCountry;
  return (
    <li key={id} className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt="Flag Image" />

        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 14) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population :</span>
            {population}
          </p>
          <p>
            <span className="card-description">Region : </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital : </span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
