const router = require('express').Router();
const Users = require('../models/user.model');

router.route('/:register') 
.post((req, res)=>{
    
    const {
        username,
        email,
        password,
        firstName,
        lastName,
        mobile
    } = req.body;    

    const User = new Users({
        username,
        email,
        password,
        firstName,
        lastName,
        mobile 
    });

    User.save()
    .then(()=>res.send("Signup successful"))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email/ mobile'))
})


router.route("/login/:username/:password")
.post((req, res)=>{
    const {username, password} = req.params;  

    Users.findOne({username, password})
    .then(data=>res.send({userid:data._id, username:data.username, firstName:data.firstName}))
    .catch(err=>res.send(err))
})


module.exports =  router;