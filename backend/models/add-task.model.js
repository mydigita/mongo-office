const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddTask = new Schema({
    username:{type:String},
    title:{type:String},
    details:{type:String},
    assigned_to:{type:String},
    created_by:username,
    date_created:{type:Date},
    deadline:{type:Date},
    status:{type:String},
    ip:{type:String},
    updated_on:{type:Date}

});