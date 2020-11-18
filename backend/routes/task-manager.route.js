const router = require('express').Router();
const TaskManager = require('../models/task-manager.model');


// retrive data from database
router.route('/view/:username/:userid')
.get((req, res)=>{
    const {     
        username,
        userid,
    } = req.params;
   
    TaskManager.find({username, userid})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});


// add task to database
router.route('/add/:username/:userid')
.post((req, res)=>{
    const {
        username,
        userid
    } = req.params;
   
    const {
        title,
        details,
        assignedTo,
        deadline,
        progress,
        status, 
        editPassword        
    } = req.body;

    const data = new TaskManager({
        title, 
        details, 
        assignedTo, 
        deadline,
        progress, 
        status,       
        username,
        userid,
        editPassword
    });

    data.save()
    .then(()=>res.send('Task Added!'))
    .catch(err=>res.send(err))
   
});

router.route('/edit/:editkey/:editpassword')
.post((req, res)=>{
    const {
        editkey, 
        editpassword
    } = req.params;
    const {
        details,
        assignedTo,
        deadline,
        progress               
    } = req.body;
    const updateTasks = {
        details, assignedTo, deadline, progress
    }

    TaskManager.findOneAndUpdate({_id:editkey, editPassword:editpassword}, updateTasks)
    .then(()=>res.send('Updated!'))
    .catch(err=>res.send(err))

})

module.exports = router;
