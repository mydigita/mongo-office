import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function SideNav(){
    const user = localStorage.getItem('user');

    function loginLogout(){
        if(user){
            return(
                <div>Logout</div>
            );
        }else{
            return(
                <div>Login</div>
            );
        }
    }
    function loginLogoutLink(){
        if(user){
            return "/mongo-office/accounts/logout/";
        }else{
            return "/mongo-office/";
        }
    }

    function renderSideNav(){
        if(user){
            return(
                <div className="side-nav-container shadow">
            
            <div className="side-nav">
                <div>
                    <h1>Mongo Office</h1>
                    <p>By: theTradeCoder</p>
                </div>
                <div>
                    <Link to={loginLogoutLink} className="form-control nav-link">{loginLogout()}</Link>             
                    <Link to="/mongo-office/task-manager/" className="form-control nav-link">Task Manager</Link>
                    <Link to="/mongo-office/event-manager/" className="form-control nav-link">Event Manager</Link>                    
                    <Link to="/mongo-office/file-tracker/" className="form-control nav-link">File Tracker</Link>
                    <Link to="/mongo-office/duty-roster/" className="form-control nav-link">Duty Roster</Link>
                    <Link to="/mongo-office/cash-register/" className="form-control nav-link">Cash Register</Link>                   
                    <Link to="/mongo-office/vehicle-records/" className="form-control nav-link">Vehicle Records</Link> 
                    <Link to="/mongo-office/travel-records/" className="form-control nav-link">Travel Records</Link>
                    <Link to="/mongo-office/meeting-records/" className="form-control nav-link">Meeting Records</Link>
                    <Link to="/mongo-office/medical-records/" className="form-control nav-link">Medical Records</Link>                    
                    <Link to="/mongo-office/plan-master/" className="form-control nav-link">Plan Master</Link>
                    <Link to="/mongo-office/project-manager/" className="form-control nav-link">Project Manager</Link>        
                    <Link to="/mongo-office/business-contacts/" className="form-control nav-link">Business Contacts</Link>
                    <Link to="/mongo-office/employee-contacts/" className="form-control nav-link">Employee Contacts</Link>
                    <Link to="/mongo-office/airline-contacts/" className="form-control nav-link">Airline Contacts</Link>
                    <Link to="/mongo-office/association-contacts/" className="form-control nav-link">Association Contacts</Link>
                    <Link to="/mongo-office/embassy-contacts/" className="form-control nav-link">Embassy Contacts</Link>
                    <Link to="/mongo-office/visa-centers/" className="form-control nav-link">Visa Centers</Link>                    
                </div>
            </div>
        </div>
            );
        }
    }

    return (
        <div>
            {renderSideNav()}
        </div>
        
    );

}