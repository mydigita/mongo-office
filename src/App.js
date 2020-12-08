 import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav from "./components/side-nav.component";
import TaskManager from "./components/task-manager.component";
import UserForm from "./components/signup.component";
import UserLogin from "./components/login.component";
import Logout from './components/logout.component';
import "bootstrap/dist/css/bootstrap.min.css";
import EditTask from "./components/edit.task-manager.component";
import CashRegister from "./components/cash-register.component";
import EventManager from "./components/event-manager.component";
import EditEvent from "./components/edit.event-manager.component";
import MeetingRecord, {ViewSingleMeeting, RecordMinutes} from "./components/meeting-records.component";

function App() {

  return (
    <Router>    
          <SideNav />
          <Route path="/mongo-office/" exact component={UserLogin}/>
          <Route path="/mongo-office/accounts/signup/" component={UserForm}/>          
          <Route path="/mongo-office/task-manager/" exact component={TaskManager}/>
          <Route path="/mongo-office/task-manager/edit/"  component={EditTask}/>
          <Route path="/mongo-office/accounts/logout/" component={Logout}/> 
          <Route path="/mongo-office/cash-register/" component={CashRegister}/> 
          <Route path="/mongo-office/event-manager/" exact component={EventManager}/>
          <Route path="/mongo-office/event-manager/edit/" component={EditEvent}/>
          <Route path="/mongo-office/meeting-records/" exact component={MeetingRecord}/>
          <Route path="/mongo-office/meeting-records/view-single/" component={ViewSingleMeeting}/> 
          <Route path="/mongo-office/meeting-records/edit-minutes/" component={RecordMinutes}/>
    </Router>
  );
}

export default App;