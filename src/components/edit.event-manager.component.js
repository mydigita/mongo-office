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

            <div>
                <form onSubmit={onSubmitSaveEvent}>

                    
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