import React from 'react';
import { BrowserRouter as Router, Route } from 'react-dom-router';
import Home from '../src/components/pages/Home';
import About from '../src/components/pages/About';
import Portfolio from '../src/components/pages/Portfolio';
import Contact from '../src/components/pages/Contact';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Portfolio' component={Portfolio} />
      <Route exact path='/Contact' component={Contact} />
    </Router>
  );
}

export default App;
