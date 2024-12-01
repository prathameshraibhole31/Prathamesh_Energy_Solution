import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Componenet/Header";
import About from "./Componenet/About";
import Home from "./Componenet/Home";
import Footer from "./Componenet/Footer";
import Services from "./Componenet/Services";
import PageNotFound from "./PageNotFound";
import Contact from "./Componenet/Contact";
import Gallery from "./Componenet/Gallery";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        {/* Add a default route for the home page */}
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;