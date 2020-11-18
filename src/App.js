import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav from "./components/side-nav.component";
import TaskManager from "./components/task-manager.component";
import UserForm from "./components/signup.component";
import UserLogin from "./components/login.component";
import Logout from './components/logout.component';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>    
          <SideNav />
          <Route path="/mongo-office/" exact component={UserLogin}/>
          <Route path="/mongo-office/accounts/signup/" component={UserForm}/>          
          <Route path="/mongo-office/task-manager/" component={TaskManager}/>
          <Route path="/mongo-office/accounts/logout/" component={Logout}/>  
    </Router>
  );
}

export default App;
