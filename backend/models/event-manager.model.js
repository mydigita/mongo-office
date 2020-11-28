const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title:{type:String},
    details:{type:String},
    organizer:{type:String},
    venue:{type:String},
    date:{type:Date},
    time:{type:Date},
    contactPerson:{type:String}
}, {timestamps:true});

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;