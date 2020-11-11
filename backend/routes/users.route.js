const router = require('express').Router();
const Users = require('../models/user.model.js');

router.route('/register') 
.post((req, res)=>{
    const {
        username,
        userEmail,
        password,
        fullName,
    } = req.body; 
        
    const User = new Users({
        username,
        userEmail,
        password,
        fullName   
    });

    User.save()
    .then(()=>res.send("Signup successful"))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email'))
})

router.route("/login/:username/:password")
.get((req, res)=>{
    // finish login backend codes here
    Users.find({username:req.params.username, password:req.params.password})
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
})


module.exports =  router;