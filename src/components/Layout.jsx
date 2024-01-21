import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("rest-countries-api-theme")) || "light"
  );

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("rest-countries-api-theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div
      className={`w-full h-full ${
        theme == "dark" ? "bg-darkBase text-white" : "bg-lightBase"
      }`}
    >
      <Header theme={theme} changeTheme={changeTheme} />
      <Outlet context={{ theme }} />
    </div>
  );
};

export default Layout;
