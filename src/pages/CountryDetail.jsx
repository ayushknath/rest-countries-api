import { useState, useEffect, Fragment } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import axios from "axios";
import { nanoid } from "nanoid";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetail = () => {
  const { name } = useParams();
  const { theme } = useOutletContext();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${name.replace(
          / /g,
          "%20"
        )}?fullText=true`
      )
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <main className="max-w-[1450px] mx-auto px-4 py-12">
      <nav className="mb-12">
        <button
          className={`px-6 py-2 shadow-md rounded ring-1 outline-none focus-visible:ring-4 transition-colors duration-75 ease-linear ${
            theme === "dark"
              ? "bg-darkFloat ring-slate-700 hover:bg-slate-700 focus-visible:ring-slate-500"
              : "bg-white ring-slate-100 hover:bg-slate-50 focus-visible:ring-slate-300"
          }`}
          aria-label="Back to all countries"
        >
          <Link to=".." className="flex items-center gap-x-3">
            <span>&larr;</span> Back
          </Link>
        </button>
      </nav>

      <div className="grid grid-cols-1 items-center justify-items-start gap-20 sm:grid-cols-2 sm:justify-items-center">
        {country.map((c) => (
          <Fragment key={nanoid()}>
            <div className="w-full">
              <img
                src={c.flags.svg}
                alt={`Flag of ${name}`}
                className="w-full"
              />
            </div>

            <section>
              <h1 className="font-bold text-2xl mb-4">{name}</h1>

              <ul className="flex flex-col gap-1 mb-8">
                <li>
                  <b>Native Name: </b>
                  {Object.values(c.name.nativeName)[0].common}
                </li>
                <li>
                  <b>Population: </b>
                  {c.population.toLocaleString()}
                </li>
                <li>
                  <b>Region: </b>
                  {c.region}
                </li>
                <li>
                  <b>Sub Region: </b>
                  {c.subregion}
                </li>
                <li>
                  <b>Capital: </b>
                  {c.capital.map((cap, index) => (
                    <span key={nanoid()}>
                      {cap}
                      {index !== c.capital.length - 1 && ", "}
                    </span>
                  ))}
                </li>
                <li>
                  <b>Top Level Domain: </b>
                  {c.tld[0]}
                </li>
                <li>
                  <b>Currencies: </b>
                  {Object.values(c.currencies)[0].name}
                </li>
                <li>
                  <b>Languages: </b>
                  {Object.values(c.languages).map((language, index) => (
                    <span key={nanoid()}>
                      {language}
                      {index !== Object.values(c.languages).length - 1 && ", "}
                    </span>
                  ))}
                </li>
              </ul>

              {Object.hasOwn(c, "borders") && (
                <section className="sm:flex items-center gap-4">
                  <h2 className="font-bold mb-4 sm:mb-0">Border Countries: </h2>
                  <ul className="flex items-center gap-2 flex-wrap">
                    {c.borders.map((border) => (
                      <li
                        key={nanoid()}
                        className={`px-6 py-1 shadow-md rounded ring-1 transition-colors duration-75 ease-linear ${
                          theme === "dark"
                            ? "bg-darkFloat ring-slate-700"
                            : "bg-white ring-slate-100"
                        }`}
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </section>
          </Fragment>
        ))}
      </div>
    </main>
  );
};

export default CountryDetail;
