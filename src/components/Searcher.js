import React, { useState } from "react";

function Searcher({ searchCountry }) {
  const [search, setSearch] = useState("");

  const handlerForm = (e) => {
    e.preventDefault();
    searchCountry(search);
  };

  return (
    <>
      <form className="searcher" onSubmit={handlerForm}>
        <div className="searcher--input">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={search}
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default Searcher;
