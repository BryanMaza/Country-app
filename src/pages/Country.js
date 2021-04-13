import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Country({ location }) {
  const history = useHistory();
  const country = location.state;
  const [countriesBorders, setCountriesBorders] = useState([]);

  useEffect(() => {
    setCountriesBorders([]);
    (async () => {
      for (let item of country.borders) {
        const data = await getName(item);
        setCountriesBorders((countries) => [...countries, data]);
      }
    })();
  }, [country.borders]);

  const getName = async (code) => {
    const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const res = await data.json();
    return res;
  };

  return (
    <div className='country'>
      <button className='btn-back' onClick={() => history.goBack()}>
        <i className='fas fa-arrow-left'></i>Back
      </button>
      <div className='country-info'>
        <div className='img-container'>
          <img src={country.flag} alt='flag country' />
        </div>

        <div className='country-details-info'>
          <section>
            <div className='country-details'>
              <h3>{country.name}</h3>
              <p>
                <span>Native Name</span>: {country.nativeName}
              </p>
              <p>
                <span>Population</span>: {country.population.toLocaleString()}
              </p>
              <p>
                <span>Region</span>: {country.region}
              </p>
              <p>
                <span>Sub Region</span>: {country.subregion}
              </p>
              <p>
                <span>Capital</span>: {country.capital}
              </p>
            </div>
            <div className='country-details'>
              <p>
                <span>Top Level Domain</span>: {country.topLevelDomain[0]}
              </p>
              <p>
                <span>Currencies</span>: {country.currencies[0].name}
              </p>
              <p>
                <span>Languages</span>:{" "}
                {country.languages.map((lan) => lan.name)}
              </p>
            </div>
          </section>
          <div className='border-countries'>
            <h3>Border Countries:</h3>
            <div className='button-group'>
              {countriesBorders.map((country, i) => (
                <Link to={{ pathname: "/country", state: country }} key={i}>
                  {country.name.split(" ")[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
