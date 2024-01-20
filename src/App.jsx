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
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
