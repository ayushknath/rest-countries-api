import { useState } from "react";
import CountryFilter from "../components/CountryFilter";
import CountryList from "../components/CountryList";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  function handleSearchFilter(searchTerm) {
    setSearchTerm(searchTerm);
  }

  function handleRegionFilter(region) {
    setRegion(region);
  }

  return (
    <main className="max-w-[1450px] mx-auto py-4 sm:py-8">
      <CountryFilter
        handleSearchFilter={handleSearchFilter}
        handleRegionFilter={handleRegionFilter}
      />
      <CountryList searchedCountry={searchTerm} filteredCountry={region} />
    </main>
  );
}

export default Home;
