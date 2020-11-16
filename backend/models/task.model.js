const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title:{type:String},
    details:{type:String},
    assignedTo:{type:String},
    deadline:{type:Date},
    progress:{type:String},
    status:{type:String},    
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;