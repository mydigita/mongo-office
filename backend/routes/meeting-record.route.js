const router = require("express").Router();
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
    const meetingData = new MeetingRecord({
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
    });

    meetingData.save()
    .then(data=>res.send("Meeting Registered"))
    .catch(err=>res.send(err))
});

router.route('/add-minutes/:id')
.post((req, res)=>{
    const {id}=req.params;
    const {minutes, minutesPreparedBy, minutesApprovedBy} = req.ready;
    MeetingRecord.findOneAndUpdate({_id:id}, {$set:{minutes, minutesPreparedBy, minutesApprovedBy}})
    .then(()=>res.send("Minutes recorded!"))
    .catch(err=>res.send(err))
});

router.route('/add-participants/:id')
.post((req,res)=>{
    const {id} = req.params;
    const {participants, chairedBy} = req.body;
    MeetingRecord.findOneAndUpdate({_id:id}, {$push:{participants}, $set:{chairedBy}})
    .then(()=>res.send('Participants added'))
    .catch(err=>res.send(err))
})

module.exports = router;
