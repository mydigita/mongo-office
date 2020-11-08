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
    const createdOn = new Date();
    const updatedOn = new Date();
  
    
    const User = new Users({
        username,
        userEmail,
        password,
        fullName,      
        createdOn,
        updatedOn
    });

    User.save()
    .then(()=>res.send("Signup successful"))
    .catch((err)=>res.send('User Registration Failed! Try with a different username / email'))
})


module.exports =  router;