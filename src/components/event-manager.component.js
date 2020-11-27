import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function EventManager(){
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [eventDate, setEventDate]= useState(new Date());
    const [eventTime, setEventTime]= useState(new Date());
    const [organizer, setOrganizer] = useState("");
    const [venue, setVenue] = useState("");
    const [contactPerson, setContactPerson] = useState("");    
    const status = 'open';
    const username = localStorage.getItem('user');
    const userid= localStorage.getItem('userid');
    const [displayEvent, setDisplayEvent] = useState("");


    return(
        <div>           

        </div>
    );
}