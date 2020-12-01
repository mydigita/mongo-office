import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";
import DateFnsUtils from '@date-io/date-fns'; 
import {  
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css";

export default function EventManager(){
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");    
    const [organizer, setOrganizer] = useState("");
    const [venue, setVenue] = useState("");
    const [contactDetails, setContactDetails] = useState("");    
    const status = 'open';
    const username = localStorage.getItem('user');
    const userid= localStorage.getItem('userid'); 
    const [eventDate, setEventDate] = useState(new Date());
    const [viewEvents, setViewEvents] = useState("");

 

    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeDetails(e){
        setDetails(e.target.value);
    }   
   
    function onChnageOrganizer(e){
        setOrganizer(e.target.value);
    }
    function onChangeVenue(e){
        setVenue(e.target.value);
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

    useEffect(()=>{
        axios.post(`http://localhost:5000/mongo-office/event-manager/view/${username}/${userid}`)
        .then(data=>{
            
            
            setViewEvents(data.data.map(e=>{
                function editPath(){
                    return window.location.assign(`/mongo-office/event-manager/edit/${e._id}`)
                }
                function actionToEditEvent(){
                    editPath();
                }
                return(
                    <div className="shadow p-3">
                        <h4>{e.title} 
                        <span><button onClick={actionToEditEvent} className="btn btn-default text-primary">Edit</button></span></h4>
                        <p>Date & time: {new Date(e.eventDate).toLocaleString()}</p>
                        <p>Event details: {e.details} <br/>
                        Organizer: {e.organizer}, Venue: {e.venue}, <br/> 
                        Contact details: {e.contactDetails}</p>
                    </div>
                );
            }))
            
        })
        .catch(err=>err)
    }, [userid, username]);
    


    return(
        <div className="body-part"> 
            {/* Event registration */}
            <div><h3>View Events</h3></div>
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
                        <label>Event date - time:</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker value={eventDate} onChange={setEventDate} className="form-control" required/>
                        </MuiPickersUtilsProvider>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div>
            {viewEvents}
            </div> 

        </div>
    );
}