const router = require('express').Router();
const TaskManager = require('../models/task-manager.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({}, {strict:false});


router.route('/add/:username/:userid')
.post((req, res)=>{
    const {     
        username,
        userid
    } = req.params;
    
    const db = mongoose.model(username, collectionSchema);

    const {
        title,
        details,
        assignedTo,
        deadline,
        progress,
        status
    } = req.body;

    const tasksToAdd = new TaskManager({
        title, details, assignedTo, deadline, progress, status
    });
    // mongoose codes
    
    db.findOneAndUpdate({username, _id:userid}, {$push:{taskManager:tasksToAdd}})
    .then(()=>res.send('Task added!'))
    .catch(err=>res.send(err))
    
});

module.exports = router;
