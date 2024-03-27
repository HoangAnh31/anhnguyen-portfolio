import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/anhnguyen-portfolio/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
