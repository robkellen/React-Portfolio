import React from "react";
import "./App.css";

//importing all necessary components
import Home from "../src/components/pages/Home/Home";
import About from "../src/components/pages/About/About";
import Portfolio from "../src/components/pages/Portfolio/Portfolio";
import Contact from "../src/components/pages/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";

function App() {
  return (
    <div className="mainDiv">
      <div >
        <Home />
      </div>
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
