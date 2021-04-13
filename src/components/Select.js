import React, { useState } from "react";

function Select({ getCountriesRegion }) {
  const [click, setClick] = useState(false);
  const [region, setRegion] = useState("Filter by region");

  const handlerShowRegions = () => setClick((value) => !value);

  const changeValueRegion = (e) => {
    let nameRegion = e.target.innerText;
    setRegion(nameRegion);
    getCountriesRegion(nameRegion.toLowerCase());
    handlerShowRegions();
  };

  return (
    <div className="select">
      <div className={!click ? "select--region" : "select--region active"}>
        <button onClick={handlerShowRegions}>
          {region} <i className="fas fa-chevron-down"></i>{" "}
        </button>
      </div>
      <div className={!click ? "regions" : "regions active"}>
        <button onClick={changeValueRegion}>Africa</button>
        <button onClick={changeValueRegion}>Americas</button>
        <button onClick={changeValueRegion}>Asia</button>
        <button onClick={changeValueRegion}>Europe</button>
        <button onClick={changeValueRegion}>Oceania</button>
      </div>
    </div>
  );
}

export default Select;
