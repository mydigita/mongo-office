const router = require('express').Router();
// const Users = require('../models/user.model.js');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String, unique:true},
    userEmail:{type:String, unique:true},
    password:{type:String},
    fullName:{type:String},
    mobileNumber:{type:String, unique:true},
    taskManager:[],
    eventManager:[],
    fileTracker:[],
    dutyRoster:[],
    cashRegister:[],
    vehicleRecords:[],
    travelRecords:[],
    meetingRecords:[],
    medicalRecords:[],
    planMaster:[],
    projectManager:[],
    businessContacts:[],
    employeeContacts:[],
    airlineContacts:[],
    associationContacts:[],
    embassyContacts:[],
    visaCenters:[],
    ticketingAgencies:[],
    personalAccounts:[],
    budgetRecords:[],
    updateCount:{type:Number},   
}, {timestamps:true});


router.route('/:register') 
.post((req, res)=>{
    
    const {
        username,
        userEmail,
        password,
        fullName,
        mobile
    } = req.body; 
    
    const Users = mongoose.model(req.params.register, UserSchema);

    const User = new Users({
        username,
        userEmail,
        password,
        fullName,
        mobile 
    });

    

    User.save()
    .then(()=>res.send("Signup successful"))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email/ mobile'))
})

router.route("/login/:username/:password")
.post((req, res)=>{
    const {username, password} = req.params;
    const Users = mongoose.model(username, UserSchema);
    // finish login backend codes here
    Users.find({username, password})
    .then(data=>res.send({userid:data[0]._id, username:data[0].username}))
    .catch(err=>res.send(err))
})


module.exports =  router;