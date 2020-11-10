import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav from "./components/side-nav.component.js";
import TaskManager from "./components/task-manager.component.js";
import UserForm from "./components/users.component.js";
import UserLogin from "./components/login.component.js";

function App() {
  return (
    <Router>
      <SideNav />
      <Route path="/mongo-office/accounts/signup" component={UserForm}/>
      <Route path="/mongo-office/accounts/login" component={UserLogin}/>
      <Route path="/mongo-office/task-manager/" exact component={TaskManager}/>
    </Router>
  );
}

export default App;
