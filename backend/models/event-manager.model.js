const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title:{type:String},
    details:{type:String},
    organizer:{type:String},
    venue:{type:String},
    eventDate:{type:Date},
    contactDetails:{type:String},
    status:{type:String},
    username:{type:String},
    userid:{type:String}
}, {timestamps:true});

const EventManager = mongoose.model('EventManager', EventSchema);

module.exports = EventManager;