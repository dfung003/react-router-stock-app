import data from "../../data";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import HomePage from "../HomePage/HomePage";
import Stocks from "../Stocks/Stocks";
import { useState } from "react";


export default function App() {
  return (
    <div className="App">
      <About />
      <Dashboard />
      <HomePage />
      <Stocks />
    </div>
  );
}

