import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function SideNav(){

    return (
        <div className="side-nav-container shadow">
            
            <div className="side-nav">
                <div>
                    <h1>Mongo Office</h1>
                    <p>by: theTradeCoder</p>
                </div>
                <div>
                    <a href="/mongo-office/task-manager/" className="form-control nav-link">Task Manager</a>
                    <a href="/mongo-office/event-manager/" className="form-control nav-link">Event Manager</a>                    
                    <a href="/mongo-office/file-tracker/" className="form-control nav-link">File Tracker</a>
                    <a href="/mongo-office/duty-roster/" className="form-control nav-link">Duty Roster</a>
                    <a href="/mongo-office/cash-register/" className="form-control nav-link">Cash Register</a>                   
                    <a href="/mongo-office/vehicle-records/" className="form-control nav-link">Vehicle Records</a> 
                    <a href="/mongo-office/travel-records/" className="form-control nav-link">Travel Records</a>
                    <a href="/mongo-office/meeting-records/" className="form-control nav-link">Meeting Records</a>
                    <a href="/mongo-office/medical-records/" className="form-control nav-link">Medical Records</a>                    
                    <a href="/mongo-office/plan-master/" className="form-control nav-link">Plan Master</a>
                    <a href="/mongo-office/project-manager/" className="form-control nav-link">Project Manager</a>        
                    <a href="/mongo-office/business-contacts/" className="form-control nav-link">Business Contacts</a>
                    <a href="/mongo-office/employee-contacts/" className="form-control nav-link">Employee Contacts</a>
                    <a href="/mongo-office/airline-contacts/" className="form-control nav-link">Airline Contacts</a>
                    <a href="/mongo-office/association-contacts/" className="form-control nav-link">Association Contacts</a>
                    <a href="/mongo-office/embassy-contacts/" className="form-control nav-link">Embassy Contacts</a>
                    <a href="/mongo-office/visa-centers/" className="form-control nav-link">Visa Centers</a>
                </div>
            </div>
        </div>
    );

}