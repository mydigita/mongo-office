import React, {useEffect, useState}  from 'react';
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

export default function EditEvent(){
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");    
    const [organizer, setOrganizer] = useState("");
    const [venue, setVenue] = useState("");
    const [contactDetails, setContactDetails] = useState("");
    const username = localStorage.getItem('user');
    const userid= localStorage.getItem('userid');
    const [eventDate, setEventDate] = useState(new Date());
    const eventId = window.location.href.split('/').reverse()[0];

    useEffect((req, res)=>{
        
        axios.get(`http://localhost:5000/mongo-office/event-manager/edit/${eventId}`)
        .then(data=>{
            if(data){
                setTitle(data.data.title);
                setDetails(data.data.details);
                setOrganizer(data.data.organizer);
                setEventDate(data.data.eventDate);
                setVenue(data.data.venue);
                setContactDetails(data.data.contactDetails);
            }
        })
    }, [eventId]);

    
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
        setVenue(e.target.venue);
    }
    function onChangeContactDetails(e){
        setContactDetails(e.target.value);
    }
    function onSubmitSaveEvent(e){
        e.preventDefault();
    }
    function onClickCloseEvent(e){
        // complete this
    }
    function onClickDeleteEvent(e){
        // complete this
    }

  
    return(
        <div className="body-part">
            <div className="p-3 text-center">
                <h4>Edit & Save / Close / Delete Event</h4>
            </div>

            <div>
                <form onSubmit={onSubmitSaveEvent}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" onChange={onChangeTitle} value={title} className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Details: </label>
                        <input type="text" onChange={onChangeDetails} value={details} className="form-control" required/>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start">
                        <div className="form-group pr-2">
                            <label>Organizer:</label>
                            <input type="text" onChange={onChnageOrganizer} value={organizer} className="form-control" required/>
                        </div>
                        <div className="form-group pr-2">
                            <label>Date:</label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker value={eventDate} onChange={setEventDate} className="form-control" required/>
                            </MuiPickersUtilsProvider>                        
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start">
                        <div className="form-group pr-2">
                            <label>Venue:</label>
                            <input type="text" onChange={onChangeVenue} value={venue} className="form-control" required/>
                        </div>
                    
                        <div className="form-group pr-2">
                            <label>Contact details: </label>
                            <input type="text" onChange={onChangeContactDetails} value={contactDetails} className="form-control" required/>
                        </div>
                    </div>

                    
                    <div className="btn-group">
                        <button type="submit" className="btn btn-success">Save Event</button>
                        <button type="button" className="btn btn-warning" onClick={onClickCloseEvent}>Close Event</button>
                        <button type="button" className="btn btn-danger" onClick={onClickDeleteEvent}>Delete Event</button>
                        <button type="button" className="btn btn-info" onClick={()=>{return window.location.assign('/mongo-office/event-manager/')}}>Go Back</button>
                    </div>
                </form>
            </div>

            

        </div>
    );
}