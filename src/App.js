import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

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
      <Container style={{ minHeight: "100vh" }}>
        <Home />
      </Container>
      <Navbar />
      <div>
        <Fade right>
          <About />
        </Fade>
      </div>
      <div>
        <Fade up>
          <Portfolio />
        </Fade>
      </div>
      <div id="contact" >
        <Fade left>
          <Contact />
        </Fade>
        <Footer />
      </div>
    </div>
  );
}

export default App;
