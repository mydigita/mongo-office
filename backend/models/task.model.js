const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    username:{type:String},
    title:{type:String},
    details:{type:String},
    assigned_to:{type:String},
    created_by:username,
    date_created:{type:Date},
    deadline:{type:Date},
    status:{type:String},
    history:[{
        username:{type:String},
        title:{type:String},
        details:{type:String},
        assigned_to:{type:String},
        deadline:{type:Date},
        status:{type:String},
        ip:{type:String},
        updated_on:{type:Date},
        mac:{type:String},
        update_count:{type:Number},
        deleted:{type:String},
        closed:{type:String},
        open:{type:String},
        visit_count:{type:Number},
        browser:{type:String}
    }]
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;