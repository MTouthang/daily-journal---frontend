import React from "react";

import NavBar from "./layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Compose from "./pages/Compose";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
