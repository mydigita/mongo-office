const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    meetingId:{type:String},
    meetingDate:{type:Date},
    noticeDate:{type:Date},
    title:{type:String},
    agenda:[String],
    venue:{type:String},
    notice:{type:String},
    noticeDistribution:[String],
    chairedBy:{type:String},
    participants:[String], 
    minutes:{type:String},
    minutesPreparedBy:{type:String},
    minutesApprovedBy:{type:String},
    minutesDistribution:[String],
    username:{type:String},
    userid:{type:String}

}, {timestamps:true});

const MeetingRecord = mongoose.model("MeetingRecord", meetingSchema);

module.exports = MeetingRecord;