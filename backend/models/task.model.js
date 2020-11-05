const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    username:{type:String},
    title:{type:String},
    details:{type:String},
    assigned_to:{type:String},
    created_by:{type:String},
    date_created:{type:Date},
    deadline:{type:Date},
    status:{type:String},
    update_count:{type:Number},
    open:{type:String},
    closed:{type:String},     
    deleted:{type:String},
    visit_count:{type:Number},
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
        browser:{type:String}
    }]
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;