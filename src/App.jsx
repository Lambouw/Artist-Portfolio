import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./jsx/Page_Components/Header";
import Navbar from "./jsx/Page_Components/Navbar";
import Footer from "./jsx/Page_Components/Footer";

import Landing from "./jsx/Pages/Landing";
import Wood from "./jsx/Pages/Art/Wood";

import Limestone from "./jsx/Pages/Art/Stone/Limestone";
import Marble from "./jsx/Pages/Art/Stone/Marble";
import Granite from "./jsx/Pages/Art/Stone/Granite";
import Sandstone from "./jsx/Pages/Art/Stone/Sandstone";
import Alabaster from "./jsx/Pages/Art/Stone/Alabaster";

import Clay from "./jsx/Pages/Art/Clay";
import Caststone from "./jsx/Pages/Art/Caststone";
import Painting from "./jsx/Pages/Art/Painting";
import Exhibition from "./jsx/Pages/Exhibition";
import About from "./jsx/Pages/About";
import Contact from "./jsx/Pages/Contact";
import Imprint from "./jsx/Pages/Imprint";
import Data from "./jsx/Pages/Data";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content--wrapper">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/wood" element={<Wood />}></Route>

            <Route path="/limestone" element={<Limestone />}></Route>
            <Route path="/marble" element={<Marble />}></Route>
            <Route path="/granite" element={<Granite />}></Route>
            <Route path="/sandstone" element={<Sandstone />}></Route>
            <Route path="/alabaster" element={<Alabaster />}></Route>

            <Route path="/clay" element={<Clay />}></Route>
            <Route path="/caststone" element={<Caststone />}></Route>
            <Route path="/painting" element={<Painting />}></Route>
            <Route path="/exhibition" element={<Exhibition />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/imprint" element={<Imprint />}></Route>
            <Route path="/data" element={<Data />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
