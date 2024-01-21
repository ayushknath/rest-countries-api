import { useState, useEffect } from "react";

const CountryFilter = ({ theme, handleSearchFilter, handleRegionFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("all");

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
        className={`w-full sm:w-1/3 mb-8 sm:mb-0 rounded shadow p-4 ring-1 outline-none focus-visible:ring-4 ${
          theme === "dark"
            ? "bg-darkFloat ring-slate-700 focus-visible:ring-slate-500"
            : "bg-white ring-slate-100 focus-visible:ring-slate-300"
        }`}
      />
      <select
        name="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        aria-label="Filter countries by region"
        className={`rounded shadow p-4 ring-1 outline-none focus-visible:ring-4 ${
          theme === "dark"
            ? "bg-darkFloat ring-slate-700 focus-visible:ring-slate-500"
            : "bg-white ring-slate-100 focus-visible:ring-slate-300"
        }`}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default CountryFilter;
