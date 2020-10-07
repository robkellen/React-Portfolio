import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src//components/Footer/Footer"
import Home from "../src/components/pages/Home/Home";
import About from "../src/components/pages/About/About";
import Portfolio from "../src/components/pages/Portfolio/Portfolio";
import Contact from "../src/components/pages/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <Footer sticky="bottom" />
    </Router>
  );
}

export default App;
