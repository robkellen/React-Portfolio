import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//importing all necessary components
import Home from "../src/components/pages/Home/Home";
import About from "../src/components/pages/About/About";
import Portfolio from "../src/components/pages/Portfolio/Portfolio";
import Contact from "../src/components/pages/Contact/Contact";

function App() {
  return (
    <div className="mainDiv">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
