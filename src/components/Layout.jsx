import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div
      className={`max-w-screen min-h-screen ${
        theme == "dark" ? "bg-darkBase text-white" : "bg-lightBase"
      }`}
    >
      <Header theme={theme} changeTheme={changeTheme} />
      <Outlet context={{ theme }} />
    </div>
  );
};

export default Layout;
