import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/home.component.js";

function App() {
  return (
    <Router className="App">
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;
