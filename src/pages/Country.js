import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Country({ location }) {
  const history = useHistory();
  const country = location.state;
  const [countriesBorders, setCountriesBorders] = useState([]);
  console.log(country);
  useEffect(() => {
    setCountriesBorders([]);
    (async () => {
      if (country.borders) {
        for (let item of country.borders) {
          const data = await asyncGetName(item);
          setCountriesBorders((countries) => [...countries, data]);
        }
      }
    })();
  }, [country.borders]);

  const asyncGetName = async (code) => {
    const data = await fetch(`https://restcountries.com/v2/alpha/${code}`);
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
          {country.flag ? (
            <img
              src={country.flag.length > 3 ? country.flags.png : country.flag}
              alt='img'
            />
          ) : (
            <img src='/default.jpg' alt='default' />
          )}
        </div>

        <div className='country-details-info'>
          <section>
            <div className='country-details'>
              <h3>
                {country.name.common ? country.name.common : country.name}
              </h3>
              <p>
                <span>Native Name</span>:
                {country.nativeName ? country.nativeName : "-"}
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
                <span>Top Level Domain</span>:
                {country.topLevelDomain ? country.topLevelDomain[0] : "-"}
              </p>
              <p>
                <span>Currencies</span>:
                {country.currencies[0]
                  ? country.currencies[0].name
                  : Object.values(country.currencies)[0].name}
              </p>
              <p>
                <span>Languages</span>:
                {Array.isArray(country.languages)
                  ? country.languages.map((item) => item.name).join(", ")
                  : Object.values(country.languages)
                      .map((item) => item)
                      .join(", ")}
              </p>
            </div>
          </section>
          <div className='border-countries'>
            <h3>Border Countries:</h3>
            <div className='button-group'>
              {countriesBorders.length > 0
                ? countriesBorders.map((country, i) => (
                    <Link to={{ pathname: "/country", state: country }} key={i}>
                      {country.name.split(" ")[0]}
                    </Link>
                  ))
                : "No borders"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
