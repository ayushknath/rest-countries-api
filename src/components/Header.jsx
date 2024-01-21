import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ theme, changeTheme }) => {
  return (
    <header
      className={`sticky top-0 z-50 py-4 shadow transition-colors duration-75 ease-linear ${
        theme === "dark" ? "bg-darkFloat text-white" : "bg-white"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-4 flex items-center justify-between">
        <h1 className="logo font-bold text-lg">Where in the world?</h1>
        <button
          className={`theme flex items-center gap-2 rounded outline-none focus-visible:ring-4 ${
            theme === "dark"
              ? "focus-visible:ring-slate-500"
              : "focus-visible:ring-slate-300"
          }`}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          onClick={changeTheme}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}{" "}
          {theme === "light" ? "Dark" : "Light"} mode
        </button>
      </div>
    </header>
  );
};

export default Header;
