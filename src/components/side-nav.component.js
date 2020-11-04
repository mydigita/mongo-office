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
                    <a href="/task-manager/" className="form-control nav-link">Task Manager</a>
                    <a href="/event-manager/" className="form-control nav-link">Event Manager</a>
                    <a href="/business-contacts/" className="form-control nav-link">Business Contacts</a>
                    <a href="/employee-contacts/" className="form-control nav-link">Employee Contacts</a>
                    <a href="/airline-contacts/" className="form-control nav-link">Airline Contacts</a>
                    <a href="/association-contacts/" className="form-control nav-link">Association Contacts</a>
                    <a href="/embassy-contacts/" className="form-control nav-link">Embassy Contacts</a>
                    <a href="/file-tracker/" className="form-control nav-link">File Tracker</a>
                    <a href="/travel-records/" className="form-control nav-link">Travel Records</a>
                    <a href="/medical-records/" className="form-control nav-link">Medical Records</a>
                    <a href="/meeting-records/" className="form-control nav-link">Meeting Records</a>
                    <a href="/plan-master/" className="form-control nav-link">Plan Master</a>
                    <a href="/project-manager/" className="form-control nav-link">Project Manager</a>
                    <a href="/vehicle-records/" className="form-control nav-link">Vehicle Records</a>            
                    <a href="/duty-roster/" className="form-control nav-link">Duty Roster</a>
                </div>
            </div>
        </div>
    );

}