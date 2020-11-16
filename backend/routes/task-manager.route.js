const router = require('express').Router();
const TaskManager = require('../models/task-manager.model');
// further required mongoose and Schema for creating a system to select existing mongodb-collection
// because the stored collection was created with an automated system during signup
// and mongoose does not have any method itself to select mongodb-selections
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionSchema = new Schema({}, {strict:false});
// and the mongoose model is used inside the post request to use necessary data from the client side

router.route('/add/:username/:userid')
.post((req, res)=>{
    const {     
        username,
        userid
    } = req.params;
    
    // this will select the database-collections for the logged in client only 
    const db = mongoose.model(username, collectionSchema);

    const {
        title,
        details,
        assignedTo,
        deadline,
        progress,
        status,
        createdOn
        
    } = req.body;

    
    const tasksToAdd = new TaskManager({
        title, details, assignedTo, deadline, progress, status, createdOn
    });

    // mongoose code to save (push) tasks in task-manager array
    
    db.findOneAndUpdate({username, _id:userid}, {$push:{taskManager:tasksToAdd}})
    .then(()=>res.send('Task added!'))
    .catch(err=>res.send(err))    
});

module.exports = router;
