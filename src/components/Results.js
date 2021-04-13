import React from "react";
import CardCountry from "./CardCountry";

function Results({ countries }) {
  return (
    <div className="results">
      {countries.map((country) => (
        <CardCountry key={country.alpha2Code} country={country} />
      ))}
    </div>
  );
}

export default Results;
