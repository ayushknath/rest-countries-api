import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <Header theme={theme} setTheme={changeTheme} />
      <Outlet />
    </>
  );
};

export default Layout;
