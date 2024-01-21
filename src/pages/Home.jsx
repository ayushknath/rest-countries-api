import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CountryFilter from "../components/CountryFilter";
import CountryList from "../components/CountryList";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const { theme } = useOutletContext();

  function handleSearchFilter(searchTerm) {
    setSearchTerm(searchTerm);
  }

  function handleRegionFilter(region) {
    setRegion(region);
  }

  return (
    <main className={`max-w-[1450px] mx-auto py-4 sm:py-8`}>
      <CountryFilter
        theme={theme}
        handleSearchFilter={handleSearchFilter}
        handleRegionFilter={handleRegionFilter}
      />
      <CountryList
        theme={theme}
        searchedCountry={searchTerm}
        regionWiseCountry={region}
      />
    </main>
  );
}

export default Home;
