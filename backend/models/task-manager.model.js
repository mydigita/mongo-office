const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title:{type:String},
    details:{type:String},
    assignedTo:{type:String},
    deadline:{type:Date},
    progress:{type:String},
    status:{type:String},    
    username:{type:String}, 
    userid:{type:String},
    editPassword:{type:String}
}, {timestamps:true});


const TaskManager = mongoose.model('taskManager', TaskSchema);
module.exports = TaskManager;