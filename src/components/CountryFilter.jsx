import { useState, useEffect } from "react";

const CountryFilter = ({ handleSearchFilter, handleRegionFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    handleSearchFilter(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    handleRegionFilter(region);
  }, [region]);

  return (
    <section className="countries-filter block sm:flex items-center justify-between mb-12 px-4">
      <input
        type="search"
        name="countryName"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a country..."
        aria-label="Search for a country"
        className="w-full sm:w-1/3 mb-8 sm:mb-0 rounded shadow p-4"
      />
      <select
        name="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Filter countries by region"
        className="rounded shadow p-4"
      >
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default CountryFilter;
