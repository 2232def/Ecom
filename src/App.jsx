import { React } from "react";
import Home from "./Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
