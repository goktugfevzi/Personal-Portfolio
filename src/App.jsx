import React from "react";
import Portfolio from "./pages/portfolio/portfolio";
import { Route,Routes } from "react-router-dom";
import BiletVarmi from "./pages/biletVarmi/biletVarmi";

const App = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<Portfolio/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/biletvarmi" element={<BiletVarmi/>}/>
  </Routes>
    </>
  );
};

export default App;
