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
    const [contactDetails, setContactDetails] = useState("");    
    const status = 'open';
    const username = localStorage.getItem('user');
    const userid= localStorage.getItem('userid');
    const [displayEvent, setDisplayEvent] = useState("");

    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeDetails(e){
        setDetails(e.target.value);
    }
    function onChangeEventDate(e){
        setEventDate(e);
    }
    function onChangeEventTime(e){
        setEventTime(e)
    }
    function onChnageOrganizer(e){
        setOrganizer(e.target.value);
    }
    function onChangeVenue(e){
        setVenue(e.target.venue);
    }
    function onChangeContactDetails(e){
        setContactDetails(e.target.value);
    }
    function onSubmitEventRegistration(e){
        e.preventDefault();
        const eventData = {title, details, organizer, venue, eventDate, contactDetails, status};
        axios.post(`http://localhost:5000/mongo-office/event-manager/register/${username}/${userid}`, eventData)
        .then(data=>window.alert(data.data))
        .catch(err=>window.alert(err))
    }
    


    return(
        <div className="body-part"> 
            {/* Event registration */}
            <div>
                <form onSubmit={onSubmitEventRegistration}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" onChange={onChangeTitle} className="form-control" placeholder="Event title" required/>
                    </div>
                    <div className="form-group">
                        <label>Details:</label>
                        <input type="text" onChange={onChangeDetails} className="form-control" placeholder="Event details" required/>
                    </div>
                    <div className="form-group">
                        <label>Organizer:</label>
                        <input type="text" onChange={onChnageOrganizer} className="form-control" placeholder="Event organizer" required/>
                    </div>
                    <div className="form-group">
                        <label>Venue:</label>
                        <input type="text" onChange={onChangeVenue} className="form-control" placeholder="Event palce" required/>
                    </div>
                    <div className="form-group">
                        <label>Contact details:</label>
                        <input type="text" onChange={onChangeContactDetails} className="form-control" placeholder="Contact details" required/>
                    </div>
                    <div className="form-group">
                        <label>Event date:</label>
                        <DatePicker selected={eventDate} type="text" onChange={onChangeEventDate} className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Event time:</label>
                        <input type="text" onChange={onChangeEventTime} className="form-control" placeholder="Event time" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div> 

        </div>
    );
}