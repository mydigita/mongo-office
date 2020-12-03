const router = require("express").route();
const MeetingRecord = require("../models/meeting-record.model");


router.route('/register/:username/:userid')
.post((req, res)=>{
    const {username, userid} = req.params;
    const {
        meetingID,
        meetingDate,
        noticeDate,
        title,
        agenda,
        venue,
        notice
    } = req.body;
    const meetingData = {
        meetingID,
        meetingDate,
        noticeDate,
        title,
        agenda,
        venue,
        notice,
        noticeDistribution:[],
        chairedBy:"",
        participants:[],
        minutes:"",
        minutesPreparedBy:"",
        minutesApprovedBy:"",
        minutesDistribuion:[],
        username,
        userid
    };

    meetingData.save()
    .then(data=>res.send("Meeting Registered"))
    .catch(err=>res.send(err))
})

module.exports = router;
