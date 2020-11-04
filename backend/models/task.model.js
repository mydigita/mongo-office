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
    history:{
        username:[String],
        title:[String],
        details:[String],
        assigned_to:[String],
        deadline:[String],
        status:[String],
        ip:[String],
        updated_on:[String],
        mac:[String],
        update_count:{type:Number},
        deleted:{type:String},
        closed:{type:String},
        open:{type:String}
    }
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;