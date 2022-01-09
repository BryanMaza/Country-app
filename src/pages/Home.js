import React, { useEffect, useState } from "react";
import Searcher from "../components/Searcher";
import Select from "../components/Select";
import Results from "../components/Results";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllCountries = async () => {
      setLoading(true);
      const data = await fetch(`https://restcountries.com/v2/all`);
      const res = await data.json();
      setCountries(res);
      setLoading(false);
    };
    getAllCountries();
  }, []);

  const searchCountry = async (country) => {
    setLoading(true);
    const data = await fetch(`https://restcountries.com/v2/name/${country}`);
    const res = await data.json();
    setCountries(res);
    setLoading(false);
  };

  const getCountriesRegion = async (region) => {
    setLoading(true);
    const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const res = await data.json();
    setCountries(res);
    setLoading(false);
  };

  return (
    <div className='container'>
      <Searcher searchCountry={searchCountry} />
      <Select getCountriesRegion={getCountriesRegion} />
      {countries.status === 404 && !loading && <h1>Results not found..</h1>}
      {loading && <h1>Loading..</h1>}
      {countries.length > 0 && !loading && <Results countries={countries} />}
    </div>
  );
}

export default Home;
