import React from "react";
import { Link } from "react-router-dom";

function CardCountry({ country }) {
  return (
    <Link
      to={{ pathname: "/country", state: country }}
      className='card-country'
    >
      <figure>
        {country.flag ? (
          <img
            src={country.flag.length > 3 ? country.flags.png : country.flag}
            alt='img'
          />
        ) : (
          <img src='/default.jpg' alt='default' />
        )}
      </figure>
      <div className='info'>
        <h3>{country.name.common ? country.name.common : country.name}</h3>
        <p className='population'>
          <span>Population: </span> {country.population.toLocaleString()}
        </p>
        <p className='region'>
          <span>Region: </span>
          {country.region}
        </p>
        <p className='capital'>
          <span>Capital: </span> {country.capital}
        </p>
      </div>
    </Link>
  );
}

export default CardCountry;
