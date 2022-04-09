import data from "../../data";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import HomePage from "../HomePage/HomePage";
import Stocks from "../Stocks/Stocks";
import Nav from "../../components/Nav";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stocks={data} />} />
      </Routes>
    </div>
  );
}

