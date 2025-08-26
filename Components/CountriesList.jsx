// import CountriesData from "../data.json";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer.jsx";
import data from "../data.json";

function CountriesContainer({ query }) {
  const [CountriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/")
    //   .then((res) => res.json())
    //   .then((data) => {
    setCountriesData(data);
    // })
    // .catch((error) => console.log(error.message));
  }, []);

  // Normalize query: trim and lowercase
  const normalizedQuery = query.trim().toLowerCase();

  return CountriesData.length === 0 ? (
    <CountryListShimmer />
  ) : (
    <div className="countries-container">
      {CountriesData.filter(
        (country) =>
          country.name.common.toLowerCase().includes(normalizedQuery) ||
          country.region.toLowerCase().includes(normalizedQuery)
      ).map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital}
          data={country}
        />
      ))}
    </div>
  );
}
export default CountriesContainer;
