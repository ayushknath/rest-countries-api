import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/rest-countries-api" element={<Home />} />
          {/* <Route
            path="/rest-countries-api/country/:name"
            element={<CountryDetail />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
