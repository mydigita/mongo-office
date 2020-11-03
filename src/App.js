import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav from "./components/side-nav.component.js";

function App() {
  return (
    <Router className="App">
      <Route path="/" component={SideNav}/>
    </Router>
  );
}

export default App;
