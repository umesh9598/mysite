import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Portfolio from "./component/Portfolio";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
