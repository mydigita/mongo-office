const router = require("express").Router();
const MeetingRecord = require("../models/meeting-records.model");

router.route('/view-list/:username/:userid')
.get((req,res)=>{
    const {username, userid} = req.params;
    MeetingRecord.find({userid:userid, username:username}, {_id:true, meetingId:true, title:true, status:true, meetingDate:true, companyName:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});


router.route('/view-single/:id')
.get((req, res)=>{
    const {id} = req.params;
    MeetingRecord.findOne({_id:id})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});


router.route('/register/:username/:userid')
.post((req, res)=>{
    const {username, userid} = req.params;
    const {
        meetingId,
        meetingDate,
        companyName,
        noticeDate,
        title,
        agenda,
        venue,
        notice
    } = req.body;
    const meetingData = new MeetingRecord({
        meetingId,
        companyName,
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
        status:"open",
        username,
        userid
    });

    meetingData.save()
    .then(data=>res.send("Meeting Registered"))
    .catch(err=>res.send(err))
});

router.route('/edit-minutes/:id')
.get((req, res)=>{
    const {id} =  req.params;
    MeetingRecord.findOne({_id:id}, {minutes:true, minutesApprovedBy:true, minutesPreparedBy:true, participants:true, agenda:true, meetingDate:true})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})

router.route('/edit-minutes/:id')
.put((req, res)=>{
    const {id}=req.params;
    const {minutes, minutesPreparedBy, minutesApprovedBy, participants, agenda} = req.body;
    MeetingRecord.findOneAndUpdate({_id:id}, {$set:{minutes, minutesPreparedBy, minutesApprovedBy, participants, agenda}})
    .then(()=>res.send("Minutes recorded!"))
    .catch(err=>res.send(err))
});

router.route('/add-participants/:id')
.put((req,res)=>{
    const {id} = req.params;
    const {participants, chairedBy} = req.body;
    MeetingRecord.findOneAndUpdate({_id:id}, {$push:{participants}, $set:{chairedBy}})
    .then(()=>res.send('Participants added'))
    .catch(err=>res.send(err))
});

router.route('/edit/close/:id')
.put((req, res)=>{
    const {id}= req.params;
    MeetingRecord.findOneAndUpdate({_id:id}, {$set:{status:"closed"}})
    .then(()=>res.send("Meeting is closed!"))
    .catch(err=>res.send(err))
});

module.exports = router;
