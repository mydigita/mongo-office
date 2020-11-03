import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function SideNav(){

    return (
        <div className="side-nav shadow">
            <div>
                <h1>Mongo Office</h1>
                <p>by: theTradeCoder</p>
            </div>
                <a href="/task-manager/" className="form-control">Task Manager</a>
                <a href="/employee-contacts/" className="form-control">Employee Contacts</a>
                <a href="/file-tracker/" className="form-control">File Tracker</a>
                <a href="/travel-records/" className="form-control">Travel Records</a>
                <a href="/medical-records/" className="form-control">Medical Records</a>
                <a href="/meeting-records/" className="form-control">Meeting Records</a>
                <a href="/plan-master/" className="form-control">Plan Master</a>
                <a href="/project-manager/" className="form-control">Project Manager</a>
                <a href="/vehicle-records/" className="form-control">Vehicle Records</a>
                <a href="/driver-duty-roster/" className="form-control">Driver's Duty Roster</a>
            <div>

            </div>
        </div>
    );

}