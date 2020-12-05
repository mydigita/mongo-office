import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import "../App.css";
import DateFnsUtils from "@date-io/date-fns";
import {DateTimePicker, MuiPickerUtilsProvider} from "@material-ui/core";

export default function MeetingRecord(){
    const [meetingId, setMeetingId] = useState("");
    const [meetingDate, setMeetingDate] = useState(new Date())
    const [noticeDate, setNoticeDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [agenda, setAgenda] = useState([]);
    const [venue, setVenue] = useState("");
    const [notice, setNotice] = useState("");
    const [noticeDistribution, setNoticeDistribution] = useState([]);
    const [chairedBy] = useState("");
    const [participants] = useState([]);
    const [minutes] = useState("");
    const [minutesPreparedBy] = useState("");
    const [minutesApprovedBy] = useState("");
    const [minutesDistribution] = useState("");
    const [status] = useState("open");
    const username = localStorage.getItem('user');
    const userid = localStorage.getItem('userid');

    function onChangeMeetingId(e){
        setMeetingId(e.target.value);
    }
    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeAgenda(e){
        setAgenda(e.target.value);
    }
    function onChangeVenue(e){
        setVenue(e.target.value)
    }
    function onChangeNotice(e){
        setNotice(e.target.value);
    }

    function onSubmitRecordMeeting(e){
        e.preventDefault();
        const meetingData = {
            meetingId,
            meetingDate,
            noticeDate,
            title,
            agenda,
            venue,
            notice,
            noticeDistribution,
            chairedBy,
            participants,
            minutes,
            minutesPreparedBy,
            minutesApprovedBy,
            minutesDistribution,
            status,
            username,
            userid
        }
        axios.post(`http://localhost:5000/mongo-office/meeting-record/register/${username}/${userid}`, meetingData)
        .then((data)=>window.alert(data))
        .catch(err=>window.alert(err))
    }

    return(
        <div>

            {/* register meetings */}
            <div>
                <form>
                    <div className="form-group">
                        <label>Meeting Reference:</label>
                        <input type="text" className="form-control" onChange={onChangeMeetingId} required/>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" onChange={onChangeTitle} required/>
                    </div>
                    <div className="form-group">
                        <label>Meeting Reference:</label>
                        <input type="text" className="form-control" onChange={onChangeMeetingId} required/>
                    </div>
                    <div className="form-group">
                        <label>Agenda:</label>
                        <input type="text" className="form-control" onChange={onChangeAgenda} required/>
                    </div>
                    <div className="form-group">
                        <label>Venue:</label>
                        <input type="text" className="form-control" onChange={onChangeVenue} required/>
                    </div>
                    <div className="form-group">
                        <label>Notice:</label>
                        <input type="text" className="form-control" onChange={onChangeNotice} required/>
                    </div>
                </form>
            </div>

        </div>
    );
}


