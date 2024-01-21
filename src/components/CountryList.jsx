import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";

const CountryList = ({ theme, searchedCountry, regionWiseCountry }) => {
  const [countries, setCountries] = useState([]);
  const [regionWise, setRegionWise] = useState({ region: "", countries: [] });
  const allCountries = useRef(countries);

  useEffect(() => {
    setCountries(() => {
      return regionWise.countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      );
    });
  }, [searchedCountry]);

  useEffect(() => {
    if (regionWiseCountry === "all") {
      setCountries(allCountries.current);
      setRegionWise({
        region: "all",
        countries: allCountries.current,
      });
      return;
    }

    setCountries(() => {
      return allCountries.current.filter(
        (country) =>
          country.region.toLowerCase() === regionWiseCountry.toLowerCase()
      );
    });

    setRegionWise({
      region: regionWiseCountry,
      countries: allCountries.current.filter(
        (country) =>
          country.region.toLowerCase() === regionWiseCountry.toLowerCase()
      ),
    });
  }, [regionWiseCountry]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
      )
      .then((res) => {
        setCountries(res.data);
        setRegionWise({
          region: "all",
          countries: res.data,
        });
        allCountries.current = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="countries-list grid grid-cols-1 grid-flow-row sm:grid-cols-4 justify-items-center gap-y-12 sm:gap-12 px-4">
      {countries.map((country) => (
        <Link
          key={nanoid()}
          to={country.name.common}
          className={`outline-none focus-visible:ring-4 ${
            theme === "dark"
              ? "focus-visible:ring-slate-500"
              : "focus-visible:ring-slate-300"
          }`}
        >
          <div
            className={`country shadow rounded ring-1 overflow-hidden transition-colors duration-75 ease-linear ${
              theme === "dark"
                ? "bg-darkFloat ring-slate-700 hover:bg-slate-700"
                : "bg-white ring-slate-100 hover:bg-slate-50"
            }`}
          >
            <div className="country__flag">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
              />
            </div>
            <div className="country__details py-8 px-6">
              <h2 className="country__name font-bold text-lg mb-4">
                {country.name.common}
              </h2>
              <ul className="country__data flex flex-col gap-y-1">
                <li>
                  <b>Population: </b>
                  {country.population.toLocaleString()}
                </li>
                <li>
                  <b>Region: </b>
                  {country.region}
                </li>
                {country.capital.length ? (
                  <li>
                    <b>Capital{country.capital.length > 1 && "s"}: </b>
                    {country.capital.map((capital, index) => (
                      <span key={nanoid()}>
                        {capital}
                        {index !== country.capital.length - 1 && ", "}
                      </span>
                    ))}
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CountryList;
