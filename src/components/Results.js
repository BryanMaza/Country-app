import React from "react";
import CardCountry from "./CardCountry";

function Results({ countries }) {
  return (
    <div className='results'>
      {countries.map((country, i) => (
        <CardCountry key={i} country={country} />
      ))}
    </div>
  );
}

export default Results;
