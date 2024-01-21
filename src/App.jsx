import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/rest-countries-api" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":name" element={<CountryDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
