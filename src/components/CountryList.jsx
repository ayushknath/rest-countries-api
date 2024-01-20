import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";

const CountryList = ({ searchedCountry, filteredCountry }) => {
  const [countries, setCountries] = useState([]);
  const allCountries = useRef(countries);

  useEffect(() => {
    setCountries(() => {
      return allCountries.current.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      );
    });
  }, [searchedCountry]);

  useEffect(() => {
    filteredCountry
      ? setCountries(() => {
          return allCountries.current.filter((country) =>
            country.region.toLowerCase().includes(filteredCountry.toLowerCase())
          );
        })
      : setCountries(allCountries.current);
  }, [filteredCountry]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
      )
      .then((res) => {
        setCountries(res.data);
        allCountries.current = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="countries-list grid grid-cols-1 grid-flow-row sm:grid-cols-4 justify-items-center gap-y-12 sm:gap-12 px-4">
      {countries.map((country) => (
        <Link key={nanoid()} to={`/country/${country.name.common}`}>
          <div className="country shadow rounded bg-white overflow-hidden">
            <div className="country__flag">
              <img
                src={country.flags.png}
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
                  {country.population}
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
                        {index !== country.capital.length - 1 && ","}
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
